import { Alert } from '@erkenningen/ui/components/alert';
import { Button } from '@erkenningen/ui/components/button';
import {
  FormCalendar,
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
import { FormStaticItem } from 'components/FormStaticItem';
import { addDays, addYears, subYears } from 'date-fns';
import { FormikHelpers, FormikProps } from 'formik';
import {
  ExaminersDocument,
  ExaminersQuery,
  SearchExamVersionsDocument,
  SearchLocationsDocument,
  SearchLocationsQuery,
  useDeleteExamMutation,
  useExamDetailsQuery,
  useSaveExamMutation,
} from 'generated/graphql';
import AddLocation from 'location/AddLocation';
import React, { useContext, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { hasRole, Roles, UserContext } from 'shared/Auth';
import { useConfirm } from 'shared/useConfirm';
import { getTimeDisplay } from 'utils/time';
import * as yup from 'yup';

const CourseEdit: React.FC<{}> = (props) => {
  const [showAddLocationDialog, setShowAddLocationDialog] = useState<boolean>(false);
  const [currentForm, setCurrentForm] = useState<FormikProps<any>>();
  const { clearGrowl, showGrowl } = useGrowlContext();
  const confirm = useConfirm();
  const user = useContext(UserContext);
  const history = useHistory();

  const { id: courseId } = useParams<any>();

  const { loading: examLoading, data: exam } = useExamDetailsQuery({
    fetchPolicy: 'network-only',
    variables: { input: { examId: +courseId } },
    onError() {
      showGrowl({
        severity: 'error',
        summary: 'Examen ophalen',
        sticky: true,
        detail: `Er is een fout opgetreden bij het ophalen van het examen. Controleer uw invoer of neem contact met ons op.`,
      });
    },
  });

  const [saveExam] = useSaveExamMutation({
    onCompleted(data) {
      showGrowl({
        severity: 'success',
        summary: 'Examen gewijzigd',
        detail: 'Het examen is succesvol gewijzigd.',
      });
    },
    onError(e) {
      showGrowl({
        severity: 'error',
        summary: 'Examen niet gewijzigd',
        detail: `Er is een fout opgetreden bij het wijzigen van het examen: ${e.message} Controleer uw invoer of neem contact met ons op.`,
      });
    },
  });

  const [deleteExam] = useDeleteExamMutation({
    onCompleted(data) {
      showGrowl({
        severity: 'success',
        summary: 'Examen verwijderd',
        detail: 'Het examen is succesvol verwijderd.',
      });
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

  const deleteCourse = () => {
    confirm({
      variant: 'danger',
      title: 'Examen verwijderen',
      description: `Weet u zeker dat u examen '${course.Titel}' wilt verwijderen?`,
      onOk: () => deleteExam({ variables: { input: { CursusID: course.CursusID } } }),
    });
  };

  if (examLoading) {
    return (
      <Panel title="Examen wijzigen" className="form-horizontal">
        <Spinner text={'Gegevens laden...'} />
      </Panel>
    );
  }

  if (!courseId || !exam?.ExamDetails?.Cursus) {
    return (
      <Panel title="Examen wijzigen" className="form-horizontal">
        <Alert type="danger">Cursus niet gevonden</Alert>
      </Panel>
    );
  }

  const course = exam?.ExamDetails.Cursus;
  const session = course.Sessies ? course.Sessies[0] : null;

  if (!session) {
    return (
      <Panel title="Examen wijzigen" className="form-horizontal">
        <Alert type="danger">Sessie bij cursus ontbreekt</Alert>
      </Panel>
    );
  }

  return (
    <>
      <Form
        schema={{
          LocatieID: [session.Locatie?.LocatieID, yup.number().required()],
          Titel: [course.Titel, yup.string().max(255).required()],
          Promotietekst: [course.Promotietekst, yup.string().max(5000).required()],
          Prijs: [course.Prijs, yup.number().required().max(1000)],
          MaximumCursisten: [course.MaximumCursisten, yup.number().required()],
          Opmerkingen: [course.Opmerkingen, yup.string().max(1000)],
          Datum: [session.Datum ? new Date(session.Datum) : null, yup.date().required()],
          Begintijd: [
            session?.Begintijd ? getTimeDisplay(session?.Begintijd) : '',
            yup
              .string()
              .matches(
                /^(0[0-9]|1[0-9]|2[0-3])(:|\.)[0-5][0-9]$/g,
                'Tijd moet in uu:mm of uu.mm formaat, bijv. 15:30',
              )
              .required(),
          ],
          Eindtijd: [
            session?.Eindtijd ? getTimeDisplay(session?.Eindtijd) : '',
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
          ExaminatorPersoonID: [session?.ExaminatorPersoon?.PersoonID, yup.number().required()],
          ExamenVersieID: [session?.ExamenVersie?.ExamenVersieID, yup.number().required()],
        }}
        onSubmit={async (values, actions: FormikHelpers<any>) => {
          clearGrowl();

          const result = await saveExam({
            variables: {
              input: {
                CursusID: course.CursusID,
                SessieID: session.SessieID,
                VakID: course.VakID || 0,
                Titel: values.Titel,
                Promotietekst: values.Promotietekst,
                Prijs: parseFloat(values.Prijs),
                MaximumCursisten: parseInt(values.MaximumCursisten),
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
            history.push(`/overzicht`);
          }
        }}
      >
        {(formikProps: FormikProps<any>) => (
          <>
            <Panel title="Examen wijzigen" className="form-horizontal">
              <FormStaticItem label="Vak" labelClassNames={'col-sm-4 col-md-3'}>
                {course.Vak.Titel}
              </FormStaticItem>
              <FormStaticItem label="Geldigheid" labelClassNames={'col-sm-4 col-md-3'}>
                {toDutchDate(course.Vak.MinimumDatum)} t/m {toDutchDate(course.Vak.MaximumDatum)}
              </FormStaticItem>
              <FormText name={'Titel'} label={'Titel *'} />
              <FormText name={'Promotietekst'} label={'Promotietekst *'} isTextArea={true} />
              <FormCurrency
                name={'Prijs'}
                label={'Prijs per deelnemer *'}
                formControlClassName="col-sm-2"
                placeholder={'0,00'}
                max={1000}
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
              <FormText name={'Opmerkingen'} label={'Opmerkingen'} isTextArea={true} />
              <FormCalendar
                name={'Datum'}
                label={'Datum *'}
                formControlClassName="col-sm-3"
                minDate={
                  hasRole(Roles.Rector, user?.Roles)
                    ? subYears(new Date(), 10)
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
                variables={{ ExamenInstellingID: course.Vak.ExamenInstellingID }}
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
                      VakID: course.Vak.VakID || 0,
                      ExamDate: formikProps.values.Datum,
                    },
                  }}
                />
              )}
              <FormItem label={' '}>
                <Button label={'Opslaan'} buttonType="submit" icon="fas fa-check" />
                <Button
                  label={'Verwijderen'}
                  icon="fas fa-trash"
                  onClick={() => deleteCourse()}
                  type={'danger'}
                />
              </FormItem>
            </Panel>
          </>
        )}
      </Form>
      <AddLocation
        onHide={handleAddLocation}
        visible={showAddLocationDialog}
        examenInstellingId={course.Vak.ExamenInstellingID}
      />
      <Link to="/overzicht">Terug naar overzicht</Link>
    </>
  );
};

export default CourseEdit;
