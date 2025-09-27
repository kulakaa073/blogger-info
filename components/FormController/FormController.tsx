'use client';
import { useState } from 'react';
import Modal from '../ui/Modal/Modal';
import SubscribeForm from '@/components/SubscribeForm/SubscribeForm';
import { UserInfo } from '@/types/userInfo';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { sendTelegramMessage } from '@/lib/api/telegram';

interface FormControllerProps {
  children: React.ReactElement;
}
const FormController = ({ children }: FormControllerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useLockBodyScroll(isOpen);

  const handleSubmit = async (data: UserInfo) => {
    setIsSubmitting(true);

    try {
      await sendTelegramMessage(data);
      alert('Повідомлення успішно відправлено!');
      setIsOpen(false);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Сталася помилка');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SubscribeForm
          onSubmit={handleSubmit}
          onClose={() => setIsOpen(false)}
          isSubmitting={isSubmitting}
        />
      </Modal>
    </>
  );
};

export default FormController;
