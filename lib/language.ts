import { Language } from './translations';

export function getLanguageFromParams(params: { lang?: string }): Language {
  const { lang } = params;
  if (lang && ['en', 'uk', 'ru'].includes(lang)) {
    return lang as Language;
  }
  return 'uk';
}
