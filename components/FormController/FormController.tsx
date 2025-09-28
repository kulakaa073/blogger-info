'use client';
import { useState } from 'react';
import Modal from '../ui/Modal/Modal';
import ContactForm from '@/components/ContactForm/ContactForm';
import { UserInfo } from '@/types/userInfo';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { sendTelegramMessage } from '@/lib/api/telegram';
import DialogController from '../ui/DialogController/DialogController';
import { DialogData } from '../ui/Dialog/Dialog';

interface FormControllerProps {
  children: React.ReactElement;
  planId?: string;
  planName?: string;
}
const FormController = ({
  children,
  planId,
  planName,
}: FormControllerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState<DialogData>({
    title: '',
    description: '',
    buttonText: '',
  });

  useLockBodyScroll(isOpen);

  const handleSubmit = async (data: UserInfo) => {
    setIsSubmitting(true);

    try {
      await sendTelegramMessage(data, planId, planName);
      setDialogData({
        title: 'Заявка відправлена успішно!',
        description: `Наш менеджер скоро з вами зв’яжеться!
          А поки що, доєднуйтеся до нашого чату:`,
        buttonText: 'Добре!',
        externalLink: 'https://t.me/+8bvI3n5gQqQxYTAy',
        externalLinkAnchorText: 'Best Creator Courses',
      });
      setIsOpen(false);
      setIsDialogOpen(true);
    } catch (error) {
      setDialogData({
        title: 'Упс, помилка...',
        description: `${error instanceof Error ? error.message : 'Сталася помилка'} /n Cпробуйте ще раз!`,
        buttonText: 'Зрозуміло',
      });
      setIsDialogOpen(true);
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ContactForm
          onSubmit={handleSubmit}
          onClose={() => setIsOpen(false)}
          isSubmitting={isSubmitting}
        />
      </Modal>
      <DialogController
        isDialogOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        dialogData={dialogData}
      />
    </>
  );
};

export default FormController;
