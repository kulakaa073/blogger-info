'use client';
import { useSubmitForm } from '@/hooks/useSubmitForm';
import { useState } from 'react';
import Modal from '../ui/Modal/Modal';
import SubscribeForm from '@/components/SubscribeForm/SubscribeForm';
import { UserInfo } from '@/types/userInfo';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

interface FormControllerProps {
  children: React.ReactElement;
}
const FormController = ({ children }: FormControllerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const submitForm = useSubmitForm();

  useLockBodyScroll(isOpen);

  const handleSubmit = (data: UserInfo) => {
    try {
      console.log(data);
      //await submitForm.mutateAsync(data);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
      // Handle error
    }
  };

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SubscribeForm
          onSubmit={handleSubmit}
          onClose={() => setIsOpen(false)}
        />
      </Modal>
    </>
  );
};

export default FormController;
