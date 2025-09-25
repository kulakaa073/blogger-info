import { Language } from '@/lib/translations';

interface NavigationProps {
  className?: string;
  language: Language;
}

const Navigation = ({ className, language }: NavigationProps) => {
  return (
    <nav className={className}>
      <ul className="flex items-center gap-7">
        <li>Структура</li>
        <li>Про мене</li>
        <li>Плюси</li>
        <li>Відгуки</li>
        <li>FAQ</li>
      </ul>
    </nav>
  );
};
export default Navigation;
