import { Language } from '@/lib/translations';

interface NavigationProps {
  className?: string;
  language: Language;
}

const Navigation = ({ className, language }: NavigationProps) => {
  return (
    <nav className={className}>
      <ul className="flex items-center gap-7">
        <li>
          <a
            href="#structure"
            className="font-raleway font-medium leading-4.75"
          >
            Структура
          </a>
        </li>
        <li>
          <a href="#about" className="font-raleway font-medium leading-4.75">
            Про мене
          </a>
        </li>
        <li>
          <a href="#pros" className="font-raleway font-medium leading-4.75">
            Плюси
          </a>
        </li>
        <li>
          <a href="#reviews" className="font-raleway font-medium leading-4.75">
            Відгуки
          </a>
        </li>
        <li>
          <a href="#faq" className="font-raleway font-medium leading-4.75">
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
