import { Language } from '@/lib/translations';
import clsx from 'clsx';

interface MobileMenuProps {
  className?: string;
  language: Language;
  onClose: () => void;
}

const MobileMenu = ({ className, language, onClose }: MobileMenuProps) => {
  return (
    <nav className={clsx(className, 'bg-primary')}>
      <ul className="flex items-center flex-col gap-12">
        <li>
          <a
            href="#structure"
            onClick={onClose}
            className="font-raleway font-medium leading-4.75 text-3xl"
          >
            Структура
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={onClose}
            className="font-raleway font-medium leading-4.75 text-3xl"
          >
            Про мене
          </a>
        </li>
        <li>
          <a
            href="#pros"
            onClick={onClose}
            className="font-raleway font-medium leading-4.75 text-3xl"
          >
            Плюси
          </a>
        </li>
        <li>
          <a
            href="#reviews"
            onClick={onClose}
            className="font-raleway font-medium leading-4.75 text-3xl"
          >
            Відгуки
          </a>
        </li>
        <li>
          <a
            href="#faq"
            onClick={onClose}
            className="font-raleway font-medium leading-4.75 text-3xl"
          >
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
