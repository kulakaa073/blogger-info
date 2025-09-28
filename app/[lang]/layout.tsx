import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/components/Header/Header';
import { Raleway } from 'next/font/google';
import { Manrope } from 'next/font/google';
import { Sansation } from '@/lib/fonts/Sansation';
import { getLanguageFromParams } from '@/lib/language';
import Sprite from '@/components/ui/Sprite/Sprite';
import BackgroundEffects from '@/components/BackgroundEffects/BackgroundEffects';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const language = getLanguageFromParams(resolvedParams);
  const baseUrl = 'https://blogger-info.vercel.app';
  const currentPath = language === 'uk' ? '' : `/${language}`;
  const currentUrl = `${baseUrl}${currentPath}`;

  return {
    title: 'Секрети вирусних відео',
    description: 'Стати відомим лише за 3 місяці без витрат на рекламу!...',
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl, // Dynamic canonical
      languages: {
        en: `${baseUrl}/en`,
        uk: baseUrl, // Root for Ukrainian
      },
    },
    openGraph: {
      title: 'Секрети вирусних відео',
      description: 'Стати відомим лише за 3 місяці...',
      url: currentUrl,
      siteName: 'Секрети вирусних відео',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 850,
          alt: 'Promo Image',
        },
      ],
      locale: language === 'uk' ? 'uk_UA' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Секрети вирусних відео',
      description: 'Стати відомим лише за 3 місяці...',
      images: [`${baseUrl}/og-image.jpg`],
    },
  };
}

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
