import React, { useEffect, useState } from 'react';

import { Link, useHistory, useLocation } from 'react-router-dom';
import * as qs from 'query-string';
import * as yup from 'yup';
import { Column } from 'primereact/column';
import { Tooltip } from 'primereact/tooltip';

import { Alert } from '@erkenningen/ui/components/alert';
import { Button } from '@erkenningen/ui/components/button';
import {
  //  CursusDeelnameStatusEnum,
  SortDirectionEnum,
  useDeleteExamMutation,
  useExamsLazyQuery,
} from 'generated/graphql';
import { DataTable } from '@erkenningen/ui/components/datatable';
import { Panel } from '@erkenningen/ui/layout/panel';
import { toDutchDate } from '@erkenningen/ui/utils';
import { useGrowlContext } from '@erkenningen/ui/components/growl';
import { useConfirm } from '@erkenningen/ui/components/confirm';

import styles from './CourseList.module.scss';
import { FormikProps } from 'formik';
import Form from 'components/Form';
import { FormCalendar, FormItem, FormText } from '@erkenningen/ui/components/form';

type IPagination = {
  pageNumber: number;
  pageSize: number;
  first: number;
};

type ISort = {
  field: string;
  direction: number;
};

type IFilter = {
  examCode?: string;
  title?: string;
  from?: number;
  to?: number;
};

type IPaginationAndSort = IPagination & ISort & IFilter;

const CourseList: React.FC<{}> = (props) => {
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
    let direction = 1;
    if (parsed.direction) {
      direction = parsed.direction as number;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.pageNumber, pagination.pageSize, pagination.direction, pagination.field]);

  const setStateAndQueryParam = (updatePagination: IPaginationAndSort) => {
    history.push({
      search: `?pageNumber=${updatePagination.pageNumber}&pageSize=${
        updatePagination.pageSize
      }&field=${updatePagination.field}&direction=${updatePagination.direction}&examCode=${
        updatePagination.examCode
      }&title=${updatePagination.title}&from=${updatePagination.from || ''}&to=${
        updatePagination.to || ''
      }`,
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
            }}
            onSubmit={(values: any) => {
              setStateAndQueryParam({
                ...pagination,
                examCode: values.examCode,
                title: values.title,
                from: values.from?.getTime(),
                to: values.to?.getTime(),
              });
            }}
          >
            {(formikProps: FormikProps<any>) => (
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
                <FormItem label={' '}>
                  <Button label={'Zoeken'} buttonType="submit" />
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
          autoLayout={true}
          loading={loading}
          paginator={true}
          rows={pagination.pageSize || 10}
          rowsPerPageOptions={[10, 25, 50, 100]}
          first={pagination.first}
          onPage={(e: { first: number; rows: number; page: number; pageCount: number }) => {
            setStateAndQueryParam({
              ...pagination,
              pageNumber: e.page,
              pageSize: e.rows,
              first: e.first,
            });
          }}
          sortField={pagination.field}
          sortOrder={pagination.direction}
          onSort={(e: { sortField: string; sortOrder: number; multiSortMeta: any }) => {
            setStateAndQueryParam({ ...pagination, field: e.sortField, direction: e.sortOrder });
          }}
          totalRecords={data?.Exams?.totalCount}
          currentPageReportTemplate="{first} tot {last} van {totalRecords}"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        >
          <Column
            bodyClassName={styles.center}
            body={(row: any) => (
              <>
                <Button
                  label={''}
                  icon="fas fa-info"
                  onClick={() => history.push(`/details/${row.CursusID}`)}
                  style={{ fontSize: '1rem' }}
                  type={'info'}
                />
                <Button
                  label={''}
                  icon="fas fa-edit"
                  onClick={() => history.push(`/wijzig/${row.CursusID}`)}
                  style={{ fontSize: '1rem' }}
                />

                <Button
                  label={''}
                  icon="fas fa-trash"
                  onClick={() => deleteCourse(row)}
                  style={{ fontSize: '1rem' }}
                  type={'danger'}
                />
              </>
            )}
          />
          <Column field="CursusCode" header={'Examencode'} sortable={true} />
          <Column field="Titel" header={'Titel'} sortable={true} />
          <Column
            field="Datum"
            header={'Datum'}
            sortable={true}
            sortField={'Sessies:Datum'}
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
            field="AantalCursusDeelnames"
            sortField={'AantalCursusDeelnames'}
            sortable={true}
            headerStyle={{ width: '6rem' }}
            bodyClassName={styles.center}
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
