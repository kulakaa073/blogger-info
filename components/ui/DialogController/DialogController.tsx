'use client';
import React, { useState, useEffect } from 'react';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import Dialog, { DialogData } from '../Dialog/Dialog';
import Modal from '../Modal/Modal';

interface DialogControllerProps {
  onClose?: () => void;
  isDialogOpen?: boolean;
  dialogData: DialogData;
  children?: React.ReactElement;
}
const DialogController = ({
  dialogData,
  onClose,
  isDialogOpen,
  children,
}: DialogControllerProps) => {
  const [isOpen, setIsOpen] = useState(isDialogOpen || false);

  useEffect(() => {
    if (isDialogOpen !== undefined) {
      setIsOpen(isDialogOpen);
    }
  }, [isDialogOpen]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  useLockBodyScroll(isOpen);

  return (
    <>
      {children && <div onClick={() => setIsOpen(true)}>{children}</div>}
      <Modal isOpen={isOpen} onClose={handleClose} isOwnCloseButton={true}>
        <Dialog onClose={handleClose} dialogData={dialogData} />
      </Modal>
    </>
  );
};

export default DialogController;
