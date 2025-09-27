import { Language } from '@/lib/translations';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import Navigation from '../Navigation/Navigation';
import MobileMenuController from '../MobileMenuController/MobileMenuController';
import Link from 'next/link';

interface HeaderProps {
  language: Language;
}

const Header = ({ language }: HeaderProps) => {
  return (
    <header className="w-full mt-12.75 ds:mt-10">
      <div className="max-w-mb ds:max-w-ds px-10 ds:px-20 mx-auto flex items-center justify-between">
        <div>
          <Link
            href="/"
            className="font-sansation font-bold leading-4.5 uppercase ds:text-med ds:leading-5"
          >
            Aleko{' '}
            <span className="[background-image:var(--gradient-main)] bg-clip-text text-transparent">
              Sokurashvili
            </span>
          </Link>
        </div>
        <Navigation className="hidden ds:block" language={language} />
        <LanguageSelect currentLanguage={language} />

        <button className="hidden ds:block [background-image:var(--gradient-main)] py-2.5 w-47.5 text-center text-xs/5 rounded-full hover:brightness-105 hover:scale-102 transition-all duration-250 ease-in-out">
          Придбати зі знижкою
        </button>

        <MobileMenuController language={language}>
          <button className="ds:hidden hover:brightness-105 hover:scale-102 transition-all duration-250 ease-in-out">
            <svg className="w-8.75 h-8.75 fill-white ">
              <use href="#icon-burger-menu" />
            </svg>
          </button>
        </MobileMenuController>
      </div>
    </header>
  );
};

export default Header;
