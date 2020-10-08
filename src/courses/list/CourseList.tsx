import { Alert } from '@erkenningen/ui/components/alert';
import { Button } from '@erkenningen/ui/components/button';
import { DataTable } from '@erkenningen/ui/components/datatable';
// import './InvoiceDataTable.css';
import { useGrowlContext } from '@erkenningen/ui/components/growl';
import { Spinner } from '@erkenningen/ui/components/spinner';
import { Panel, PanelBody } from '@erkenningen/ui/layout/panel';
import { toDutchDate } from '@erkenningen/ui/utils';
import { useExamsQuery } from 'generated/graphql';
import { Column } from 'primereact/column';
import React, { useEffect, useState } from 'react';

const CourseList: React.FC<{}> = (props) => {
  const [page, setPage] = useState({ page: 0, rows: 10, first: 0 });
  const { showGrowl } = useGrowlContext();
  const [sort, setSort] = useState<{ field: string; direction: number }>({
    field: 'FactuurNummer',
    direction: -1,
  });

  useEffect(() => {
    // reset to first page when prop (aka filters) change
    setPage({ page: 0, rows: page.rows, first: 0 });
  }, [props, page.rows]);

  const { loading, data, error } = useExamsQuery({
    variables: {
      input: {
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

  // const { loading, data, error, networkStatus } = useQuery<
  //   { invoices: PagedResult<IInvoice> },
  //   {
  //     pageSize: number;
  //     pageNumber: number;
  //     sortField: string;
  //     sortDirection: 'ASC' | 'DESC';
  //     filterInvoices?: any;
  //   }
  // >(GET_INVOICES, {
  //   variables: {
  //     pageSize: page.rows,
  //     pageNumber: page.page + 1,
  //     sortField: sort.field,
  //     sortDirection: sort.direction === 1 ? 'ASC' : 'DESC',
  //     filterInvoices: filterInvoices,
  //   },
  //   errorPolicy: 'all',
  //   fetchPolicy: 'network-only',
  //   notifyOnNetworkStatusChange: true,
  // });

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
        value={data.Exams}
        lazy={true}
        dataKey="CursusCode"
        emptyMessage="Geen examens gevonden. Controleer filter criteria."
        responsive
        paginator={true}
        rows={page.rows}
        rowsPerPageOptions={[10, 25, 50, 100]}
        first={page.first}
        onPage={(e: { first: number; rows: number; page: number; pageCount: number }) => {
          setPage({ page: e.page, rows: e.rows, first: e.first });
        }}
        sortField={sort.field}
        sortOrder={sort.direction}
        onSort={(e: { sortField: string; sortOrder: number; multiSortMeta: any }) => {
          setSort({ field: e.sortField, direction: e.sortOrder });
        }}
        // onRowClick={(e: any) => {
        //   history.push(`/wijzig/${e.data.CursusID}`);
        // }}
        totalRecords={0}
        currentPageReportTemplate="{first} tot {last} van {totalRecords}"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      >
        <Column
          body={(row: any) => (
            <>
              <Button label={''} icon="fas fa-info" />
              <Button label={''} icon="fas fa-edit" />
            </>
          )}
        />
        <Column field="CursusCode" header={'Examencode'} />
        <Column field="Titel" header={'Titel'} />
        <Column
          field="Datum"
          header={'Datum'}
          body={(row: any) => toDutchDate(row.Sessies[0]?.Datum)}
        />
        <Column
          field="Locatie"
          header={'Locatie'}
          body={(row: any) =>
            `${row.Sessies[0]?.Locatie?.Naam} | ${
              row.Sessies[0]?.Locatie?.Contactgegevens?.Woonplaats || ''
            }`
          }
        />
        <Column field="AantalDeelnemers" header={'Deelnemers'} />
      </DataTable>
    </Panel>
  );
};

export default CourseList;
