import React, { useEffect, useState } from 'react';

import { Link, useHistory, useLocation } from 'react-router-dom';
import * as qs from 'query-string';
import * as yup from 'yup';
import { Column } from 'primereact/column';
import { Tooltip } from 'primereact/tooltip';

import { Alert } from '@erkenningen/ui/components/alert';
import { Button } from '@erkenningen/ui/components/button';
import {
  CursusStatusEnum,
  SortDirectionEnum,
  useDeleteExamMutation,
  useExamsLazyQuery,
} from 'generated/graphql';
import { DataTable } from 'primereact/datatable';
import { Panel } from '@erkenningen/ui/layout/panel';
import { toDutchDate } from '@erkenningen/ui/utils';
import { useGrowlContext } from '@erkenningen/ui/components/growl';
import { useConfirm } from '@erkenningen/ui/components/confirm';
import { formatEnum } from '@erkenningen/ui/utils';

import styles from './CourseList.module.css';
import Form from 'components/Form';
import { FormCalendar, FormItem, FormSelect, FormText } from '@erkenningen/ui/components/form';
import { DataTablePFSEvent, DataTableSortOrderType } from 'primereact/datatable';

type IPagination = {
  pageNumber: number;
  pageSize: number;
  first: number;
};

type ISort = {
  field: string;
  direction: DataTableSortOrderType;
};

type IFilter = {
  examCode?: string;
  title?: string;
  from?: number;
  to?: number;
  cursusStatus?: CursusStatusEnum;
};

type IPaginationAndSort = IPagination & ISort & IFilter;

const CourseList = (): JSX.Element => {
  const history = useHistory();
  const { search } = useLocation();
  const { showGrowl } = useGrowlContext();
  const confirm = useConfirm();

  const parseQueryParams = (): IPaginationAndSort => {
    const parsed = qs.parse(search, { parseNumbers: true });
    let pageNumber = 0;
    if (Number.isInteger(parsed.pageNumber)) {
      pageNumber = parsed.pageNumber as number;
    }
    let pageSize = 10;
    if (Number.isInteger(parsed.pageSize)) {
      pageSize = parsed.pageSize as number;
    }
    let field = 'Sessies:Datum';
    if (parsed.field) {
      field = parsed.field as string;
    }
    let direction: DataTableSortOrderType = -1;
    if (parsed.direction) {
      direction = parsed.direction as DataTableSortOrderType;
    }

    let examCode = '';
    if (parsed.examCode) {
      examCode = parsed.examCode as string;
    }

    let title = '';
    if (parsed.title) {
      title = parsed.title as string;
    }

    let from = undefined;
    if (parsed.from) {
      from = parsed.from as number;
    }

    let to = undefined;
    if (parsed.to) {
      to = parsed.to as number;
    }

    let cursusStatus = undefined;
    if (parsed.cursusStatus) {
      cursusStatus = parsed.cursusStatus as CursusStatusEnum;
    }

    return {
      first: pageNumber * pageSize,
      pageNumber,
      pageSize,
      field,
      direction,
      examCode,
      title,
      from,
      to,
      cursusStatus,
    };
  };

  const [pagination, setPagination] = useState<IPaginationAndSort>(parseQueryParams());

  const [getExams, { loading, data, error, refetch }] = useExamsLazyQuery({
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
        examCode: pagination.examCode,
        title: pagination.title,
        from: pagination.from,
        to: pagination.to,
        cursusStatus: pagination.cursusStatus,
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

  const [deleteExam] = useDeleteExamMutation({
    onCompleted() {
      showGrowl({
        severity: 'success',
        summary: 'Examen verwijderd',
        detail: 'Het examen is succesvol verwijderd.',
      });
      if (refetch) {
        refetch();
      }
    },
    onError(e) {
      showGrowl({
        severity: 'error',
        summary: 'Examen niet verwijderd',
        sticky: true,
        detail: `Er is een fout opgetreden bij het verwijderen van het examen: ${e.message}`,
      });
    },
  });

  useEffect(() => {
    getExams();
  }, [pagination.pageNumber, pagination.pageSize, pagination.direction, pagination.field]);

  const setStateAndQueryParam = (updatePagination: IPaginationAndSort) => {
    history.push({
      search: `?pageNumber=${updatePagination.pageNumber}&pageSize=${
        updatePagination.pageSize
      }&field=${updatePagination.field}&direction=${updatePagination.direction}&examCode=${
        updatePagination.examCode
      }&title=${updatePagination.title}&from=${updatePagination.from || ''}&to=${
        updatePagination.to || ''
      }&cursusStatus=${updatePagination.cursusStatus || ''}`,
    });
    setPagination({ ...updatePagination });
  };

  const deleteCourse = (row: any) => {
    confirm({
      variant: 'danger',
      title: 'Examen verwijderen',
      description: `Weet u zeker dat u examen '${row.Titel}' wilt verwijderen?`,
      onOk: () => deleteExam({ variables: { input: { CursusID: row.CursusID } } }),
    });
  };

  if (error) {
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
    <div>
      <Panel title="Examens beheren">
        <div className="form-horizontal">
          <Form
            schema={{
              examCode: [pagination.examCode, yup.string().max(255)],
              title: [pagination.title, yup.string().max(255)],
              from: [pagination.from ? new Date(pagination.from) : null, yup.date().nullable()],
              to: [pagination.to ? new Date(pagination.to) : null, yup.date().nullable()],
              cursusStatus: [
                pagination.cursusStatus ? pagination.cursusStatus : 'alle',
                yup.string().nullable(),
              ],
            }}
            onSubmit={(values: any) => {
              setStateAndQueryParam({
                ...pagination,
                examCode: values.examCode,
                title: values.title,
                from: values.from?.getTime(),
                to: values.to?.getTime(),
                cursusStatus: values.cursusStatus === 'alle' ? null : values.cursusStatus,
              });
            }}
          >
            {() => (
              <>
                <FormText name={'examCode'} label={'Examencode'} formControlClassName="col-sm-4" />
                <FormText name={'title'} label={'Titel'} formControlClassName="col-sm-4" />
                <FormCalendar
                  name={'from'}
                  label={'Datum van'}
                  showButtonBar={true}
                  formControlClassName="col-sm-3 col-md-2"
                />
                <FormCalendar
                  name={'to'}
                  label={'Datum tot/met'}
                  showButtonBar={true}
                  formControlClassName="col-sm-3 col-md-2"
                />
                <FormSelect
                  name={'cursusStatus'}
                  label={'Cursus status'}
                  options={[
                    { value: 'alle', label: 'Alle' },
                    { value: CursusStatusEnum.Voorlopig, label: 'Voorlopig' },
                    { value: CursusStatusEnum.Goedgekeurd, label: 'Goedgekeurd' },
                    { value: CursusStatusEnum.ExamenAangemeld, label: 'Examen aangemeld' },
                    { value: CursusStatusEnum.Betaald, label: 'Betaald' },
                  ]}
                  formControlClassName="col-sm-4"
                />
                <FormItem label={' '}>
                  <Button label={'Zoeken'} icon="pi pi-search" type="submit" />
                </FormItem>
              </>
            )}
          </Form>
        </div>

        <DataTable
          value={data?.Exams?.nodes}
          lazy={true}
          dataKey="CursusCode"
          emptyMessage="Geen examens gevonden. Controleer filter criteria."
          // autoLayout={true}
          responsiveLayout={'stack'}
          loading={loading}
          paginator={true}
          rows={pagination.pageSize || 10}
          rowsPerPageOptions={[10, 25, 50, 100]}
          first={pagination.first}
          onPage={(e: DataTablePFSEvent) => {
            if (e.pageCount === 1) {
              return;
            }

            setStateAndQueryParam({
              ...pagination,
              pageNumber: e.page || 0,
              pageSize: e.rows,
              first: e.first,
            });
          }}
          sortField={pagination.field}
          sortOrder={pagination.direction}
          onSort={(e: DataTablePFSEvent) => {
            setStateAndQueryParam({ ...pagination, field: e.sortField, direction: e.sortOrder });
          }}
          totalRecords={data?.Exams?.totalCount}
          currentPageReportTemplate="{first} tot {last} van {totalRecords}"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        >
          <Column
            bodyClassName={styles.center}
            bodyStyle={{ width: '92px' }}
            body={(row: any) => (
              <>
                <Button
                  label={''}
                  icon="fas fa-info"
                  onClick={() => history.push(`/details/${row.CursusID}`)}
                  style={{ fontSize: '1rem' }}
                  buttonType={'info'}
                />
                <Button
                  label={''}
                  icon="fas fa-edit"
                  onClick={() => history.push(`/wijzig/${row.CursusID}`)}
                  style={{ fontSize: '1rem' }}
                />

                {row.Status !== CursusStatusEnum.Betaald && (
                  <Button
                    label={''}
                    icon="fas fa-trash"
                    onClick={() => deleteCourse(row)}
                    style={{ fontSize: '1rem' }}
                    buttonType={'danger'}
                  />
                )}
              </>
            )}
          />
          <Column
            field="CursusCode"
            header={'Examencode'}
            sortable={true}
            bodyStyle={{ width: '93px' }}
          />
          <Column field="Titel" header={'Titel'} sortable={true} />
          <Column
            field="Datum"
            header={'Datum'}
            sortable={true}
            sortField={'Sessies:Datum'}
            bodyStyle={{ width: '92px' }}
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
            field="Status"
            header={'Status'}
            sortable={true}
            body={(row: any) => formatEnum(row.Status)}
          ></Column>
          <Column
            field="AantalCursusDeelnames"
            sortField={'AantalCursusDeelnames'}
            sortable={true}
            bodyClassName={styles.right}
            header={
              <>
                <Tooltip target=".numParticipants" position={'top'} />
                <i className={'fas fa-users numParticipants'} data-pr-tooltip="Aantal deelnemers" />
              </>
            }
          />
        </DataTable>
      </Panel>
      <div className="mb-1">
        <Link to="/nieuw">
          <Button label={'Nieuw examen plannen'} icon="pi pi-plus" />
        </Link>
      </div>
    </div>
  );
};

export default CourseList;
