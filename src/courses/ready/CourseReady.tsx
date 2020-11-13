import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Panel } from '@erkenningen/ui/layout/panel';
import { Button } from '@erkenningen/ui/components/button';
import { FormItem } from '@erkenningen/ui/components/form';
import { useExamVersionDocumentsQuery } from 'generated/graphql';
import { toDutchDate } from '@erkenningen/ui/utils';

import styles from './CourseReady.module.scss';

const CourseReady: React.FC<{}> = (props) => {
  const { examVersionId } = useParams<any>();
  const { data: examVersion } = useExamVersionDocumentsQuery({
    variables: { input: { ExamenVersieID: +examVersionId } },
  });

  return (
    <>
      <Panel title="Nieuw examen maken en plannen">
        <Link to="/nieuw">
          <Button label={'Nog een examen maken'} icon="pi pi-plus" className={styles.firstButton} />
        </Link>

        <Link to="/overzicht">
          <Button label={'Naar overzicht'} type="secondary" icon="pi pi-list" />
        </Link>
      </Panel>
      {examVersion?.ExamVersionDocuments && (
        <Panel title="Papieren examen documenten" className="form-horizontal">
          <p>Hieronder kunt u de examen documenten downloaden door op de link te klikken.</p>

          <FormItem label={'Examen versie'} formControlClassName="form-control-static col-md-9">
            {examVersion?.ExamVersionDocuments?.ExamenVersieCode}
          </FormItem>
          <FormItem label={'Omschrijving '} formControlClassName="form-control-static col-md-9">
            {examVersion?.ExamVersionDocuments?.ExamenOmschrijving}
          </FormItem>
          <FormItem label={'Startdatum'} formControlClassName="form-control-static col-md-9">
            {toDutchDate(examVersion?.ExamVersionDocuments?.StartDatum)}
          </FormItem>
          <FormItem label={'Einddatum'} formControlClassName="form-control-static col-md-9">
            {toDutchDate(examVersion?.ExamVersionDocuments?.EindDatum)}
          </FormItem>
          <FormItem label={'Document(en)'} formControlClassName="form-control-static col-md-9">
            {examVersion?.ExamVersionDocuments.Documenten?.map((doc) => (
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
          </FormItem>
        </Panel>
      )}
    </>
  );
};

export default CourseReady;
