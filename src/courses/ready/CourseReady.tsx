import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Panel } from '@erkenningen/ui/layout/panel';
import { Button } from '@erkenningen/ui/components/button';
import { FormStaticItem } from '@erkenningen/ui/components/form';
import { useExamVersionDocumentsQuery } from 'generated/graphql';
import { toDutchDate } from '@erkenningen/ui/utils';

import styles from './CourseReady.module.css';

const CourseReady = (): JSX.Element => {
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

          <FormStaticItem label={'Examen versie'}>
            {examVersion?.ExamVersionDocuments?.ExamenVersieCode}
          </FormStaticItem>
          <FormStaticItem label={'Omschrijving '}>
            {examVersion?.ExamVersionDocuments?.ExamenOmschrijving}
          </FormStaticItem>
          <FormStaticItem label={'Startdatum'}>
            {toDutchDate(examVersion?.ExamVersionDocuments?.StartDatum)}
          </FormStaticItem>
          <FormStaticItem label={'Einddatum'}>
            {toDutchDate(examVersion?.ExamVersionDocuments?.EindDatum)}
          </FormStaticItem>
          <FormStaticItem label={'Document(en)'}>
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
          </FormStaticItem>
        </Panel>
      )}
    </>
  );
};

export default CourseReady;
