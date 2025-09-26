'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Language } from '@/lib/translations';

const languages: { code: Language; name: string }[] = [
  { code: 'en', name: 'EN' },
  { code: 'uk', name: 'UA' },
];

interface LanguageSelectProps {
  currentLanguage: Language;
}

const LanguageSelect = ({ currentLanguage }: LanguageSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = languages.find((lang) => lang.code === currentLanguage);

  const switchLanguage = (newLang: Language) => {
    const segments = pathname.split('/');
    segments[1] = newLang;
    const newPath = segments.join('/');

    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative rounded-sm p-1.25 hover:inset-ring-2 hover:inset-ring-white transition-all duration-250 ease-in-out">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.25 h-5"
      >
        <span className="font-medium">{currentLang?.name}</span>
        <div
          className={`transition-transform ${isOpen ? 'scale-y-[-1]' : ''}  duration-300 ease-in-out flex items-center justify-center`}
        >
          <svg className="fill-white w-[15.25px] h-[15.25px]">
            <use href="#icon-arrow-down" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-1 bg-primary rounded-lg shadow-lg z-50 min-w-full">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang.code)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-gray-100 hover:text-primary first:rounded-t-lg last:rounded-b-lg transition-colors ${
                  currentLanguage === lang.code
                    ? 'bg-blue-50 text-gray-900'
                    : ''
                }`}
              >
                <span className="font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelect;
