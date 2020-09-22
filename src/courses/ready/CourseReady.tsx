import React from 'react';

import { Panel } from '@erkenningen/ui/layout/panel';
import { Button } from '@erkenningen/ui/components/button';

import styles from './CourseReady.module.scss';
import { Link } from 'react-router-dom';

const CourseReady: React.FC<{}> = (props) => {
  return (
    <Panel title="Nieuwe bijeenkomst maken en plannen">
      <Link to="/nieuw">
        <Button
          label={'Nog een bijeenkomst maken'}
          icon="pi pi-plus"
          className={styles.firstButton}
        />
      </Link>

      {/* <Link to="/overzicht">
        <Button label={'Naar overzicht'} type="secondary" icon="pi pi-list" />
      </Link>
       */}
    </Panel>
  );
};

export default CourseReady;
