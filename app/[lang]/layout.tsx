import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/components/Header/Header';
import { Raleway } from 'next/font/google';
import { Manrope } from 'next/font/google';
import { Sansation } from '@/fonts/Sansation';
import { getLanguageFromParams } from '@/lib/language';
import Sprite from '@/components/ui/Sprite/Sprite';
import BackgroundEffects from '@/components/BackgroundEffects/BackgroundEffects';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata: Metadata = {
  title: 'Секрети вирусних відео',
  description: 'Стати відомим лише за 3 місяці без витрат на рекламу!...',
  alternates: {
    canonical: 'https://blogger-info.vercel.app/',
    languages: {
      en: 'https://blogger-info.vercel.app/en',
      uk: 'https://blogger-info.vercel.app/uk',
    },
  },
  openGraph: {
    title: 'Секрети вирусних відео',
    description: 'Стати відомим лише за 3 місяці...',
    url: 'https://blogger-info.vercel.app/',
    siteName: 'Секрети вирусних відео',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 850, alt: 'Promo Image' },
    ],
    locale: 'uk_UA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Секрети вирусних відео',
    description: 'Стати відомим лише за 3 місяці...',
    images: ['/og-image.jpg'],
  },
  other: {
    preload: ['/images/hero-mobile@1x.jpg', '/images/hero-desktop@1x.jpg'],
  },
};

const RootLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) => {
  const resolvedParams = await params;
  const language = getLanguageFromParams(resolvedParams);
  return (
    <html lang={language}>
      <body
        className={`${raleway.variable} ${manrope.variable} ${Sansation.variable} antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden">
          <a href="#main" className="sr-only focus:not-sr-only">
            Перейти до контенту
          </a>
          <Sprite />
          <BackgroundEffects />
          <Header language={language} />
          <main id="main">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
