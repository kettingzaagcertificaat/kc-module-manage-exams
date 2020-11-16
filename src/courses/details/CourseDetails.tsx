import React from 'react';

import { useGrowlContext } from '@erkenningen/ui/components/growl';
import { Spinner } from '@erkenningen/ui/components/spinner';
import { Panel } from '@erkenningen/ui/layout/panel';

import { useExamDetailsQuery } from 'generated/graphql';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@erkenningen/ui/components/button';
import { Row } from '@erkenningen/ui/layout/row';
import { Col } from '@erkenningen/ui/layout/col';
import { Alert } from '@erkenningen/ui/components/alert';
import { getTimeDisplay } from 'utils/time';
import { toDutchDate } from '@erkenningen/ui/utils';

const FormStaticItem: React.FC<{ label: string }> = (props) => {
  return (
    <div className={''}>
      <label className={'col-sm-4 control-label'}>{props.label}</label>
      <div className={'col-md-8 form-control-static'}>{props.children}</div>
    </div>
  );
};

const CourseDetails: React.FC<{}> = (props) => {
  const { showGrowl } = useGrowlContext();

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

  if (examLoading) {
    return (
      <Panel title="Examen details" className="form-horizontal">
        <Spinner text={'Gegevens laden...'} />
      </Panel>
    );
  }

  if (!courseId || !exam?.ExamDetails?.Cursus) {
    return (
      <Panel title="Examen details" className="form-horizontal">
        <Alert type="danger">Cursus niet gevonden</Alert>
      </Panel>
    );
  }

  const course = exam?.ExamDetails.Cursus;
  const firstSession = course.Sessies ? course.Sessies[0] : null;

  return (
    <>
      <Row>
        <Col size={'col-md-6'}>
          <Panel title="Informatie over het examen" className="form-horizontal">
            <FormStaticItem label="Vakcode">{course.VakID}</FormStaticItem>
            <FormStaticItem label="Cursuscode">{course.CursusID}</FormStaticItem>
            <FormStaticItem label="Examencode">
              {firstSession?.ExamenVersie?.ExamenVersieCode}
            </FormStaticItem>
            <FormStaticItem label="Titel">{course.Titel}</FormStaticItem>
            <FormStaticItem label="Examendatum">{course.CursusID}</FormStaticItem>
            <FormStaticItem label="Promotietekst">{course.Promotietekst}</FormStaticItem>
            <FormStaticItem label="Prijs">{course.Prijs}</FormStaticItem>
          </Panel>
        </Col>
        <Col size={'col-md-6'}>
          <Panel title="Aanbieder van het examen" className="form-horizontal">
            <FormStaticItem label="Aanbieder">{course.Vak.ExamenInstelling?.Naam}</FormStaticItem>
            <FormStaticItem label="Adres">
              {`${course.Vak.ExamenInstelling?.Contactgegevens.Adresregel1} ${course.Vak.ExamenInstelling?.Contactgegevens.Huisnummer}${course.Vak.ExamenInstelling?.Contactgegevens.HuisnummerToevoeging}`}
            </FormStaticItem>
            <FormStaticItem label="Plaats">
              {course.Vak.ExamenInstelling?.Contactgegevens.Woonplaats}
            </FormStaticItem>
            <FormStaticItem label="Contactpersoon">
              {course.Vak.ExamenInstelling?.ContactpersoonExamenInstelling?.length &&
                course.Vak.ExamenInstelling?.ContactpersoonExamenInstelling[0]?.Persoon
                  ?.SortableFullName}
            </FormStaticItem>
            <FormStaticItem label="Telefoon">
              {course.Vak.ExamenInstelling?.Contactgegevens.Telefoon}
            </FormStaticItem>
            <FormStaticItem label="E-mail">
              {course.Vak.ExamenInstelling?.Contactgegevens.Email}
            </FormStaticItem>
          </Panel>
        </Col>
      </Row>
      <Row>
        <Col>
          <Panel title="Examensessies" className="form-horizontal" doNotIncludeBody={true}>
            <div className="table-responsive">
              <table
                className="table table-striped table-responsive"
                cellSpacing={0}
                style={{ borderCollapse: 'collapse' }}
              >
                <tbody>
                  <tr>
                    <th>Datum</th>
                    <th>Begintijd</th>
                    <th>Eindtijd</th>
                    <th>Locatie</th>
                    <th>Examentype</th>
                    <th>Versie</th>
                    <th>Examinator</th>
                    <th>Opmerkingen</th>
                  </tr>
                  {course.Sessies?.map((session, index) => (
                    <tr key={index}>
                      <td>{toDutchDate(session.Datum)}</td>
                      <td>{getTimeDisplay(session.Begintijd)}</td>
                      <td>{getTimeDisplay(session.Eindtijd)}</td>
                      <td>{session.Locatie?.Naam}</td>
                      <td>{session.ExamenVersie?.ExamenType}</td>
                      <td>{session.ExamenVersie?.ExamenOmschrijving}</td>
                      <td>{session.ExaminatorPersoon?.SortableFullName}</td>
                      <td>{session.Opmerkingen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </Col>
      </Row>
      <Row>
        <Col>
          <Panel title="Papieren examen documenten" className="form-horizontal">
            <Col size={'col-md-6'}>
              <FormStaticItem label="Examen versie">
                {firstSession?.ExamenVersie?.ExamenVersieCode}
              </FormStaticItem>
              <FormStaticItem label="Omschrijving">
                {firstSession?.ExamenVersie?.ExamenOmschrijving}
              </FormStaticItem>
              <FormStaticItem label="Startdatum">
                {toDutchDate(firstSession?.ExamenVersie?.StartDatum)}
              </FormStaticItem>
              <FormStaticItem label="Einddatum">
                {toDutchDate(firstSession?.ExamenVersie?.EindDatum)}
              </FormStaticItem>
            </Col>
            <Col size={'col-md-6'}>
              <FormStaticItem label="Document(en)">
                {!firstSession?.ExamenVersie?.Documenten?.length && <>(geen)</>}
                {firstSession?.ExamenVersie?.Documenten?.map((doc) => (
                  <div key={doc.Document.DocumentID}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`${doc.Document.Locatie}${doc.Document.Naam}`}
                    >
                      {doc.Document.Omschrijving}
                    </a>
                  </div>
                ))}
              </FormStaticItem>
            </Col>
          </Panel>
        </Col>
      </Row>
      <Row>
        <Col>
          <Panel title="Deelnemers" className="form-horizontal" doNotIncludeBody={true}>
            <div className="table-responsive">
              <table
                className="table table-striped table-responsive"
                cellSpacing={0}
                style={{ borderCollapse: 'collapse' }}
              >
                <tbody>
                  <tr>
                    <th>ID</th>
                    <th>Naam</th>
                    <th>Status</th>
                  </tr>
                  {course.CursusDeelnames?.map((participation, index) => (
                    <tr key={index}>
                      <td>KC-{participation.Persoon.PersoonID}</td>
                      <td>{participation.Persoon.SortableFullName}</td>
                      <td>{participation.Status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </Col>
      </Row>

      <Link to="/overzicht">
        <Button label={'Terug naar overzicht'} type="secondary" icon="pi pi-list" />
      </Link>
    </>
  );
};

export default CourseDetails;
