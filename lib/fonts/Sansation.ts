import localFont from 'next/font/local';

export const Sansation = localFont({
  src: [
    {
      path: '../../public/fonts/Sansation-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sansation',
});
