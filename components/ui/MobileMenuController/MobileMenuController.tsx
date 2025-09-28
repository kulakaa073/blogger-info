'use client';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import MobileMenu from '../MobileMenu/MobileMenu';
import { Language } from '@/lib/translations';

interface MobileMenuControllerProps {
  children: React.ReactElement;
  language: Language;
}
const MobileMenuController = ({
  children,
  language,
}: MobileMenuControllerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useLockBodyScroll(isOpen);

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{children}</div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <MobileMenu language={language} onClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default MobileMenuController;
