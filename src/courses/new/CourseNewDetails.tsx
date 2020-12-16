import { Alert } from '@erkenningen/ui/components/alert';
import { Button } from '@erkenningen/ui/components/button';
import {
  FormCalendar,
  FormCheckbox,
  FormCurrency,
  FormItem,
  FormNumber,
  FormText,
} from '@erkenningen/ui/components/form';
import { useGrowlContext } from '@erkenningen/ui/components/growl';
import { Spinner } from '@erkenningen/ui/components/spinner';
import { Panel } from '@erkenningen/ui/layout/panel';
import { toDutchDate } from '@erkenningen/ui/utils';
import Form from 'components/Form';
import FormSelectGql from 'components/FormSelectGql';
import { addDays, addYears, subDays } from 'date-fns';
import { FormikHelpers, FormikProps } from 'formik';
import {
  ExaminersDocument,
  ExaminersQuery,
  SearchExamVersionsDocument,
  SearchLocationsDocument,
  SearchLocationsQuery,
  useSaveExamMutation,
  useSpecialtyQuery,
} from 'generated/graphql';
import AddLocation from 'location/AddLocation';
import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { hasRole, Roles, UserContext } from 'shared/Auth';
import * as yup from 'yup';

const CourseNewDetails: React.FC<{ specialtyId?: number }> = (props) => {
  const [showAddLocationDialog, setShowAddLocationDialog] = useState<boolean>(false);
  const [currentForm, setCurrentForm] = useState<FormikProps<any>>();
  const { clearGrowl, showGrowl } = useGrowlContext();
  const user = useContext(UserContext);
  const history = useHistory();

  const { id: courseId } = useParams<any>();

  const { loading: specialtyLoading, data: specialty } = useSpecialtyQuery({
    variables: { vakId: props.specialtyId || -1 },
    onError() {
      showGrowl({
        severity: 'error',
        summary: 'Examenvakken ophalen',
        sticky: true,
        detail: `Er is een fout opgetreden bij het ophalen van de examenvakken. Controleer uw invoer of neem contact met ons op.`,
      });
    },
  });

  const [saveExam] = useSaveExamMutation({
    onCompleted(data) {
      showGrowl({
        severity: 'success',
        summary: 'Examen aangemaakt',
        detail: 'Het examen is succesvol aangemaakt.',
      });
    },
    onError(e) {
      showGrowl({
        severity: 'error',
        summary: 'Examen niet aangemaakt',
        sticky: true,
        detail: `Er is een fout opgetreden bij het aanmaken van het examen: ${e.message} Controleer uw invoer of neem contact met ons op.`,
      });
    },
  });

  if (!props.specialtyId && !courseId) {
    return <Alert type="danger">Er is geen vak of examen gekozen</Alert>;
  }

  const onNewLocationClick = (formikProps: FormikProps<any>) => {
    setCurrentForm(formikProps);
    setShowAddLocationDialog(true);
  };

  const handleAddLocation = (LocatieID?: number) => {
    if (currentForm && LocatieID) {
      currentForm.setFieldValue('LocatieID', LocatieID);
    }
    setShowAddLocationDialog(false);
  };

  if (specialtyLoading) {
    return <Spinner text={'Gegevens laden...'} />;
  }

  if (!specialty?.Specialty) {
    return null;
  }

  return (
    <>
      <Form
        schema={{
          LocatieID: [null, yup.number().required()],
          Titel: [specialty.Specialty.Titel, yup.string().max(255).required()],
          Promotietekst: [specialty.Specialty.Promotietekst, yup.string().max(5000).required()],
          Prijs: [specialty.Specialty.Kosten, yup.number().required()],
          IsBesloten: [false, yup.boolean().required()],
          MaximumCursisten: [specialty.Specialty.MaximumCursisten, yup.number().required()],
          Opmerkingen: ['', yup.string().max(1000)],
          Datum: [null, yup.date().required()],
          Begintijd: [
            null,
            yup
              .string()
              .matches(
                /^(0[0-9]|1[0-9]|2[0-3])(:|\.)[0-5][0-9]$/g,
                'Tijd moet in uu:mm of uu.mm formaat, bijv. 15:30',
              )
              .required(),
          ],
          Eindtijd: [
            null,
            yup
              .string()
              .matches(
                /^(0[0-9]|1[0-9]|2[0-3])(:|\.)[0-5][0-9]$/g,
                'Tijd moet in uu:mm of uu.mm formaat, bijv. 15:30',
              )
              .required()
              .test('greaterThan', 'Eindtijd moet na begintijd liggen', function (v) {
                return !v || this.resolve(yup.ref('Begintijd')) < v;
              }),
          ],
          ExaminatorPersoonID: [null, yup.number().required()],
          ExamenVersieID: [null, yup.number().required()],
        }}
        onSubmit={async (values, actions: FormikHelpers<any>) => {
          if (!specialty.Specialty) {
            return;
          }

          clearGrowl();

          const result = await saveExam({
            variables: {
              input: {
                VakID: specialty.Specialty.VakID,
                Titel: values.Titel,
                Promotietekst: values.Promotietekst,
                Prijs: parseFloat(values.Prijs),
                MaximumCursisten: parseInt(values.MaximumCursisten),
                IsBesloten: values.IsBesloten,
                Opmerkingen: values.Opmerkingen,
                Datum: values.Datum,
                Begintijd: new Date('01-01-2000 ' + values.Begintijd.replace('.', ':')),
                Eindtijd: new Date('01-01-2000 ' + values.Eindtijd.replace('.', ':')),
                LocatieID: parseInt(values.LocatieID),
                ExaminatorPersoonID: values.ExaminatorPersoonID,
                ExamenVersieID: values.ExamenVersieID,
              },
            },
          });

          if (result.data?.saveExam?.CursusID) {
            history.push(`/gereed/${values.ExamenVersieID}`);
          }
        }}
      >
        {(formikProps: FormikProps<any>) => (
          <>
            <Panel title="Examen" className="form-horizontal">
              <p>
                Examenvak geldig van {toDutchDate(specialty.Specialty?.MinimumDatum)} t/m{' '}
                {toDutchDate(specialty.Specialty?.MaximumDatum)}
              </p>
              <FormText name={'Titel'} label={'Titel *'} />
              <FormText name={'Promotietekst'} label={'Promotietekst *'} isTextArea={true} />
              <FormCurrency
                name={'Prijs'}
                label={'Prijs per deelnemer *'}
                formControlClassName="col-sm-2"
                placeholder={'0,00'}
              />
              <FormNumber
                name={'MaximumCursisten'}
                label={'Max. aantal deelnemers *'}
                formControlClassName="col-sm-2"
                placeholder={'1'}
                useGrouping={false}
                min={1}
                max={9999}
              />
              <FormCheckbox name={'IsBesloten'} label={'Besloten'} />
              <FormText name={'Opmerkingen'} label={'Opmerkingen'} isTextArea={true} />
              <FormCalendar
                name={'Datum'}
                label={'Datum *'}
                formControlClassName="col-sm-3"
                minDate={
                  hasRole(Roles.Rector, user?.Roles)
                    ? subDays(new Date(), 100)
                    : addDays(new Date(), 7)
                }
                maxDate={addYears(new Date(), 50)}
              />
              <FormText
                name={'Begintijd'}
                label={'Begintijd *'}
                placeholder="uu:mm"
                formControlClassName="col-sm-3"
                keyfilter="(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]"
              />
              <FormText
                name={'Eindtijd'}
                label={'Eindtijd *'}
                placeholder="uu:mm"
                formControlClassName="col-sm-3"
                keyfilter="(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]"
              />
              <FormSelectGql
                name={'LocatieID'}
                label={'Locatie *'}
                placeholder={'Selecteer een locatie'}
                formControlClassName="col-sm-5"
                filter={true}
                mapResult={(data: SearchLocationsQuery) => {
                  return (
                    data.SearchLocations?.map((location) => ({
                      label: `${location.Naam} | ${location.Contactgegevens.Woonplaats}`,
                      value: location.LocatieID,
                    })) || []
                  );
                }}
                gqlQuery={SearchLocationsDocument}
                variables={{ ExamenInstellingID: specialty.Specialty?.ExamenInstellingID }}
              >
                <Button
                  className="mr-2"
                  label="Nieuwe locatie aanmaken"
                  type="link"
                  onClick={() => onNewLocationClick(formikProps)}
                />
              </FormSelectGql>
              <FormSelectGql
                name={'ExaminatorPersoonID'}
                label={'Examinator *'}
                placeholder={'Selecteer een examinator'}
                formControlClassName="col-sm-5"
                filter={true}
                mapResult={(data: ExaminersQuery) => {
                  return (
                    data.Examinatoren?.map((examiner) => ({
                      label: `${examiner.SortableFullName} | ${
                        examiner.Contactgegevens?.Woonplaats || ''
                      }`,
                      value: examiner.PersoonID,
                    })) || []
                  );
                }}
                gqlQuery={ExaminersDocument}
              />
              {formikProps.values.Datum && (
                <FormSelectGql
                  name={'ExamenVersieID'}
                  label={'Examen versie *'}
                  placeholder={'Selecteer een examenversie'}
                  formControlClassName="col-sm-5"
                  filter={true}
                  gqlQuery={SearchExamVersionsDocument}
                  variables={{
                    input: {
                      VakID: specialty.Specialty?.VakID || 0,
                      ExamDate: formikProps.values.Datum,
                    },
                  }}
                />
              )}
              <FormItem label={' '}>
                <Button label={'Opslaan'} buttonType="submit" icon="pi pi-check" />
              </FormItem>
            </Panel>
          </>
        )}
      </Form>
      <AddLocation
        onHide={handleAddLocation}
        visible={showAddLocationDialog}
        examenInstellingId={specialty?.Specialty.ExamenInstellingID}
      />
    </>
  );
};

export default CourseNewDetails;
