import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'uk'];
const defaultLocale = 'uk';

function getLocale(request: NextRequest): string {
  const locale =
    request.cookies.get('NEXT_LOCALE')?.value ||
    request.headers.get('Accept-Language')?.split(',')[0]?.split('-')[0] ||
    defaultLocale;
  return locales.includes(locale) ? locale : defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    const response = NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url),
    );
    response.cookies.set('NEXT_LOCALE', locale, { maxAge: 31536000 });
    return response;
  }

  const locale = pathname.split('/')[1];
  const response = NextResponse.next();
  response.cookies.set('NEXT_LOCALE', locale, { maxAge: 31536000 });
  return response;
}

export const config = {
  matcher: [
    '/((?!_next|images|api|telegram|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)',
  ],
};
