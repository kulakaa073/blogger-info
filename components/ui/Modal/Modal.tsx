'use client';

import BlurredEllipse from '../BlurredEllipse/BlurredEllipse';
import { createPortal } from 'react-dom';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useLockBodyScroll(isOpen);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full"
    >
      <BlurredEllipse
        width={184.36}
        height={173.59}
        blur={144.659}
        className="ds:hidden left-[310px] top-[637px] bg-purple opacity-50 z-52"
      />
      <BlurredEllipse
        width={184.36}
        height={173.59}
        blur={144.659}
        className="ds:hidden -left-[131px] top-[221px] bg-teal-3 opacity-50 z-52"
      />
      <BlurredEllipse
        width={368.22}
        height={346.72}
        blur={288.933}
        className="hidden ds:block left-[140px] top-[711px] bg-purple opacity-50 z-52"
      />
      <BlurredEllipse
        width={368.22}
        height={346.72}
        blur={288.933}
        className="hidden ds:block left-[522px] top-[750px] bg-teal-3 opacity-50 z-52"
      />
      <div
        className="absolute inset-0 bg-primary ds:bg-black/50"
        aria-hidden="true"
      />
      <button
        type="button"
        onClick={() => onClose()}
        className="ds:hidden absolute top-8 right-[22.99px] rounded-full hover:bg-white/20 transition-all ease-in-out duration-250 z-54"
      >
        <svg className="w-8 h-8 fill-white ">
          <use href="#icon-close" />
        </svg>
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        className="z-53"
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
