import { Button } from '@erkenningen/ui/components/button';
import { Dialog } from 'primereact/components/dialog/Dialog';
import React from 'react';

import styles from './ConfirmDialog.module.scss';

export interface ConfirmOptions {
  variant?: 'danger' | 'info';
  title?: string;
  description?: string;
  onOk?: () => void;
  onCancel?: () => void;
}

export const ConfirmDialog: React.FC<ConfirmOptions & { show: boolean }> = (props) => {
  return (
    <Dialog
      header={props.title}
      visible={props.show}
      closable={false}
      modal
      style={{ width: '350px' }}
      footer={
        <div>
          <Button label="No" icon="fas fa-times" onClick={props.onCancel} type={'secondary'} />
          <Button label="Yes" icon="fas fa-check" onClick={props.onOk} autoFocus type={'primary'} />
        </div>
      }
      closeOnEscape={true}
      onHide={() => {}}
    >
      <div className={styles.confirmationContent}>
        <div>
          <i
            className={`fas ${props.variant === 'danger' ? 'fa-exclamation-triangle' : 'fa-info'}`}
          />
        </div>
        <div>{props.description}</div>
      </div>
    </Dialog>
  );
};
