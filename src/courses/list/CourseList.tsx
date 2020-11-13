import React, { useEffect, useState } from 'react';

import { useHistory, useLocation } from 'react-router-dom';
import * as qs from 'query-string';
import { Column } from 'primereact/column';

import { Alert } from '@erkenningen/ui/components/alert';
import { Button } from '@erkenningen/ui/components/button';
import { CursusDeelnameStatusEnum, SortDirectionEnum, useExamsQuery } from 'generated/graphql';
import { DataTable } from '@erkenningen/ui/components/datatable';
import { Panel, PanelBody } from '@erkenningen/ui/layout/panel';
import { Spinner } from '@erkenningen/ui/components/spinner';
import { toDutchDate } from '@erkenningen/ui/utils';
import { useGrowlContext } from '@erkenningen/ui/components/growl';

type IPagination = {
  pageNumber: number;
  pageSize: number;
};

type ISort = {
  field: string;
  direction: number;
};

type IPaginationAndSort = IPagination & ISort;

const CourseList: React.FC<{}> = (props) => {
  const history = useHistory();
  const { search } = useLocation();
  const { showGrowl } = useGrowlContext();

  const [pagination, setPagination] = useState<IPaginationAndSort>({
    pageNumber: 0,
    pageSize: 10,
    field: 'Sessies:Datum',
    direction: 1,
  });

  const { loading, data, error } = useExamsQuery({
    fetchPolicy: 'cache-and-network',
    variables: {
      input: {
        pageNumber: pagination.pageNumber,
        pageSize: pagination.pageSize || 10,
        orderBy: {
          field: pagination.field,
          sortDirection:
            pagination.direction === 1 ? SortDirectionEnum.Asc : SortDirectionEnum.Desc,
        },
        // examCode: '',
        // title: '',
        // from: new Date(),
        // to: new Date(),
        // locationId: 0,
      },
    },
    onError() {
      showGrowl({
        severity: 'error',
        summary: 'Examenvakken ophalen',
        sticky: true,
        detail: `Er is een fout opgetreden bij het ophalen van de examenvakken. Controleer uw invoer of neem contact met ons op.`,
      });
    },
  });

  useEffect(() => {
    // reset to first page when prop (aka filters) change
    const parsed = qs.parse(search, { parseNumbers: true });
    let pageNumber = pagination.pageNumber;
    if (Number.isInteger(parsed.pageNumber)) {
      pageNumber = parsed.pageNumber as number;
    }
    let pageSize = pagination.pageSize || 10;
    if (Number.isInteger(parsed.pageNumber)) {
      pageSize = parsed.pageSize as number;
    }
    let field = pagination.field;
    if (parsed.field) {
      field = parsed.field as string;
    }
    let direction = pagination.direction;
    if (parsed.direction) {
      direction = parsed.direction as number;
    }
    setPagination({
      pageNumber: pageNumber,
      pageSize: pageSize,
      field: field,
      direction: direction,
    });
  }, [pagination.pageNumber, pagination.pageSize, pagination.field, pagination.direction, search]);

  const setStateAndQueryParam = (pagination: IPagination, sort: ISort) => {
    history.push({
      search: `?pageNumber=${pagination.pageNumber}&pageSize=${pagination.pageSize}&field=${sort.field}&direction=${sort.direction}`,
    });
  };

  if (loading) {
    return (
      <PanelBody>
        <Spinner />
      </PanelBody>
    );
  }

  if (error || !data) {
    console.log('error', error);
    return (
      <Alert type="danger">
        Er is een fout opgetreden, probeer het later opnieuw. Fout informatie:{' '}
        <>
          {error?.graphQLErrors.map((e, index) => (
            <div key={index}>{e.message}</div>
          ))}
        </>
      </Alert>
    );
  }

  return (
    <Panel title="Examens wijzigen">
      <DataTable
        value={data.Exams?.nodes}
        lazy={true}
        dataKey="CursusCode"
        emptyMessage="Geen examens gevonden. Controleer filter criteria."
        responsive
        paginator={true}
        rows={pagination.pageSize || 10}
        rowsPerPageOptions={[10, 25, 50, 100]}
        first={pagination.pageNumber}
        onPage={(e: { first: number; rows: number; page: number; pageCount: number }) => {
          setStateAndQueryParam(
            { pageNumber: e.page, pageSize: e.rows },
            { field: pagination.field, direction: pagination.direction },
          );
        }}
        sortField={pagination.field}
        sortOrder={pagination.direction}
        onSort={(e: { sortField: string; sortOrder: number; multiSortMeta: any }) => {
          setStateAndQueryParam(pagination, { field: e.sortField, direction: e.sortOrder });
        }}
        totalRecords={0}
        currentPageReportTemplate="{first} tot {last} van {totalRecords}"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      >
        <Column
          headerStyle={{ width: '8rem' }}
          bodyStyle={{ textAlign: 'center' }}
          body={(row: any) => (
            <>
              <Button
                label={''}
                icon="fas fa-info"
                onClick={() => history.push(`/details/${row.CursusID}`)}
              />
              <Button
                label={''}
                icon="fas fa-edit"
                onClick={() => history.push(`/wijzig/${row.CursusID}`)}
              />
            </>
          )}
        />
        <Column
          field="CursusCode"
          header={'Examencode'}
          headerStyle={{ width: '14rem' }}
          sortable={true}
        />
        <Column
          field="IsBesloten"
          header={''}
          headerStyle={{ width: '2rem' }}
          bodyStyle={{ textAlign: 'center' }}
          body={(row: any) => (row.IsBesloten ? <i className={'fas fa-lock'}></i> : '')}
        />
        <Column field="Titel" header={'Titel'} sortable={true} />
        <Column
          field="Datum"
          header={'Datum'}
          sortable={true}
          sortField={'Sessies:Datum'}
          headerStyle={{ width: '11rem' }}
          body={(row: any) => toDutchDate(row.Sessies[0]?.Datum)}
        />
        <Column
          field="Locatie"
          header={'Locatie'}
          sortField={'Sessies:Locatie:Naam'}
          sortable={true}
          body={(row: any) =>
            `${row.Sessies[0]?.Locatie?.Naam} | ${
              row.Sessies[0]?.Locatie?.Contactgegevens?.Woonplaats || ''
            }`
          }
        />
        <Column
          field="AantalDeelnemers"
          headerStyle={{ width: '4rem' }}
          bodyStyle={{ textAlign: 'center' }}
          header={<i className={'fas fa-users'} />}
          body={(row: any) =>
            row.CursusDeelnames.filter((cd: any) => cd.Status !== CursusDeelnameStatusEnum.Afgemeld)
              .length
          }
        />
      </DataTable>
    </Panel>
  );
};

export default CourseList;
