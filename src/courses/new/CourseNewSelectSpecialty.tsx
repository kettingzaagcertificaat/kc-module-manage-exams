import { FormSelect } from '@erkenningen/ui/components/form';
import { useGrowlContext } from '@erkenningen/ui/components/growl';
import { Spinner } from '@erkenningen/ui/components/spinner';
import { Panel } from '@erkenningen/ui/layout/panel';
import { toDutchDate } from '@erkenningen/ui/utils';
import Form from 'components/Form';
import FormSelectGql from 'components/FormSelectGql';
import { FormikProps } from 'formik';
import { SpecialtiesDocument, useSearchOrganizersQuery } from 'generated/graphql';
import React, { useContext, useState } from 'react';
import { hasRole, Roles, UserContext } from 'shared/Auth';
import * as yup from 'yup';
import CourseNewDetails from './CourseNewDetails';

const CourseNewSelectSpecialty: React.FC<{}> = () => {
  const { showGrowl } = useGrowlContext();
  const user = useContext(UserContext);
  const { loading: organizersLoading, data: organizers } = useSearchOrganizersQuery({
    onError() {
      showGrowl({
        severity: 'error',
        summary: 'Kennisaanbieders ophalen',
        life: 5000,
        detail: `Er is een fout opgetreden bij het ophalen van de kennisaanbieders. Controleer uw invoer of neem contact op met Bureau Erkenningen`,
      });
    },
  });
  const [specialtyId, setSpecialtyId] = useState<number | undefined>(undefined);

  if (organizersLoading) {
    return <Spinner text={'Gegevens laden...'} />;
  }

  if (!organizers) {
    return null;
  }

  return (
    <>
      <Form
        schema={{
          ExamenInstellingID: [null, yup.number().required()],
          VakID: [null, yup.number().required()],
        }}
        onSubmit={async (values: any, actions: any) => {
          actions.setSubmitting(false);
        }}
      >
        {(formikProps: FormikProps<any>) => (
          <>
            <Panel title="Nieuw examen maken en plannen">
              {hasRole(Roles.Rector, user?.Roles) && (
                <FormSelect
                  labelClassNames="col-sm-12 text-left"
                  placeholder={'Selecteer een exameninstelling'}
                  name={'ExamenInstellingID'}
                  label={'Kies de exameninstelling waarvoor u een nieuw examen wilt maken'}
                  filter={true}
                  options={
                    organizers.SearchOrganizers?.map((item: any) => ({
                      label: item.Text,
                      value: item.Value,
                    })) || []
                  }
                  onChange={(e) => {
                    formikProps.setFieldValue('VakID', undefined);
                    setSpecialtyId(undefined);
                  }}
                />
              )}
              {(formikProps.values.ExamenInstellingID || !hasRole(Roles.Rector, user?.Roles)) && (
                <FormSelectGql
                  labelClassNames="col-sm-12 text-left"
                  placeholder={'Selecteer een examenvak'}
                  name={'VakID'}
                  label={'Kies het examenvak waarop u het nieuwe examen wilt baseren::'}
                  filter={true}
                  gqlQuery={SpecialtiesDocument}
                  emptyMessage={
                    'Er zijn nog geen vakken beschikbaar. Kopieer eerst een sjabloon vak en pas deze vervolgens aan.'
                  }
                  mapResult={(data: any) =>
                    data.Specialties.map((item: any) => ({
                      label: `${item.VakID} | geldig tot: ${toDutchDate(
                        new Date(item.MaximumDatum),
                      )} | ${item.Titel} | ${item.Competenties[0]?.Code || ''} | ${
                        item.Themas[0]?.Code || ''
                      }`,
                      value: item.VakID,
                    }))
                  }
                  variables={{
                    examenInstellingId:
                      +formikProps.values.ExamenInstellingID ||
                      +(
                        (organizers.SearchOrganizers?.length &&
                          organizers.SearchOrganizers[0].Value) ||
                        0
                      ),
                  }}
                  onChange={(e) => setSpecialtyId(+e.value)}
                  value={specialtyId}
                />
              )}
            </Panel>
          </>
        )}
      </Form>
      {specialtyId && <CourseNewDetails specialtyId={specialtyId}></CourseNewDetails>}
    </>
  );
};

export default CourseNewSelectSpecialty;
