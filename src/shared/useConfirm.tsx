import * as React from 'react';

import { ConfirmDialog, ConfirmOptions } from '../components/ConfirmDialog';

const ConfirmationServiceContext = React.createContext<(options: ConfirmOptions) => void>(() => {});

export const useConfirm = () => React.useContext(ConfirmationServiceContext);

export const ConfirmationServiceProvider = ({ children }: any) => {
  const [confirmationState, setConfirmationState] = React.useState<ConfirmOptions>({});
  const [show, setShow] = React.useState<boolean>(false);

  return (
    <>
      <ConfirmationServiceContext.Provider
        value={(confirmationState) => {
          setShow(true);
          setConfirmationState({
            ...confirmationState,
            onOk: () => {
              setShow(false);
              confirmationState.onOk && confirmationState.onOk();
            },
            onCancel: () => {
              setShow(false);
              confirmationState.onCancel && confirmationState.onCancel();
            },
          });
        }}
        children={children}
      />

      <ConfirmDialog show={show} {...confirmationState} />
    </>
  );
};
