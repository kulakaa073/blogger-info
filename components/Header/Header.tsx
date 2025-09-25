import { Language } from '@/lib/translations';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import Navigation from '../Navigation/Navigation';

interface HeaderProps {
  language: Language;
}

const Header = ({ language }: HeaderProps) => {
  return (
    <header className="w-full mb:mt-12.75 ds:mt-10">
      <div className="mb:max-w-mb ds:max-w-ds mb:px-10 ds:px-20 mx-auto flex items-center justify-between">
        <div>
          <p className="font-sansation font-bold leading-4.5 uppercase">
            Aleko{' '}
            <span className="[background-image:var(--gradient-main)] bg-clip-text text-transparent rounded-xl">
              Sokurashvili
            </span>
          </p>
        </div>
        <Navigation className="mb:hidden ds:block" language={language} />
        <LanguageSelect currentLanguage={language} />
        <button className="mb:hidden ds:block [background-image:var(--gradient-main)] py-2.5 w-47.5 text-center text-xs/5 rounded-4xl">
          Придбати зі знижкою
        </button>
        <button className="ds:hidden">
          <svg className="w-8.75 h-8.75 fill-white">
            <use href="#icon-burger-menu" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
