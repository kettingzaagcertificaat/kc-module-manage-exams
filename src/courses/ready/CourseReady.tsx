import React from 'react';

import { Panel } from '@erkenningen/ui/layout/panel';
import { Button } from '@erkenningen/ui/components/button';

import styles from './CourseReady.module.scss';
import { Link } from 'react-router-dom';

const CourseReady: React.FC<{}> = (props) => {
  return (
    <Panel title="Nieuw examen maken en plannen">
      <Link to="/nieuw">
        <Button label={'Nog een examen maken'} icon="pi pi-plus" className={styles.firstButton} />
      </Link>

      {/* <Link to="/overzicht">
        <Button label={'Naar overzicht'} type="secondary" icon="pi pi-list" />
      </Link>
       */}
    </Panel>
  );
};

export default CourseReady;
