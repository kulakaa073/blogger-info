import { Language } from '@/lib/translations';

interface NavigationProps {
  className?: string;
  language: Language;
}

const Navigation = ({ className, language }: NavigationProps) => {
  // Currently does nothing, will work with more content
  return (
    <nav className={className} aria-label="Основна навігація">
      <ul className="flex items-center gap-7">
        <li>
          <a
            href="#structure"
            className="font-raleway font-medium leading-4.75 hover:text-shadow-2xs hover:text-shadow-white"
          >
            Структура
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="font-raleway font-medium leading-4.75 hover:text-shadow-2xs hover:text-shadow-white"
          >
            Про мене
          </a>
        </li>
        <li>
          <a
            href="#pros"
            className="font-raleway font-medium leading-4.75 hover:text-shadow-2xs hover:text-shadow-white"
          >
            Плюси
          </a>
        </li>
        <li>
          <a
            href="#reviews"
            className="font-raleway font-medium leading-4.75 hover:text-shadow-2xs hover:text-shadow-white"
          >
            Відгуки
          </a>
        </li>
        <li>
          <a
            href="#faq"
            className="font-raleway font-medium leading-4.75 hover:text-shadow-2xs hover:text-shadow-white"
          >
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
