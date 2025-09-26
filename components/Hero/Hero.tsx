import Image from 'next/image';
import { Language } from '@/lib/translations';
import BlurredEllipse from '../ui/BlurredEllipse/BlurredEllipse';

interface HeroProps {
  language: Language;
}

const Hero = ({ language }: HeroProps) => {
  return (
    <section className="w-full pt-6 ds:pt-16.75 pb-16.5">
      <div className="max-w-mb ds:max-w-ds px-10 ds:px-20 mx-auto flex flex-col items-center">
        <div className="relative">
          <picture className=" block w-full rounded-bg overflow-hidden">
            <source
              media="(min-width: 1024px)"
              srcSet="/images/hero-desktop@1x.jpg 1x, /images/hero-desktop@2x.jpg 2x"
            />
            <source srcSet="/images/hero-mobile@1x.jpg 1x, /images/hero-mobile@2x.jpg 2x" />
            <Image
              src="/images/hero-mobile@1x.jpg"
              alt="Hero Image"
              width={313}
              height={354}
              className="w-full h-auto object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_57.77%,rgba(0,0,0,0.7)_79.8%)] w-78.25 h-88.5" />
        </div>
        <h1 className="relative z-1 flex flex-col text-center font-raleway font-extrabold text-heading leading-15.75 uppercase -mt-19.75 mb-8">
          <span className="mb-1 font-bold text-[20.93px] leading-6.25 [background-image:var(--gradient-accent)] bg-clip-text text-transparent normal-case">
            Від 0 до 100,000 за 90 днів
          </span>
          Секрети вірусних відео
        </h1>
        <p className="font-raleway text-sm/4 text-center mb-11">
          Стати відомим лише за 3 місяці без витрат на рекламу! Дізнайтеся ключ
          до створення вірусного контенту та перетворите свої ідеї на мільйонні
          перегляди.
        </p>
        <button className="relative font-raleway font-semibold text-sm/5.5 bg-white text-black shadow-[4.32px_6.48px_10.8px_4.32px_#A75DF333_inset] py-4.75 w-full rounded-full mb-2.75">
          Секрети вірусних відео
          <span className="bg-red-2 h-15 w-14.75 flex items-center justify-center absolute right-0 top-0 rounded-full text-white text-xl leading-6.5">
            -50%
          </span>
        </button>

        <p className="font-raleway font-semibold text-xl/5.5 text-red-2 flex items-center gap-[9.38px]">
          1000 грн
          <span className="line-through text-sm text-gray">2000грн</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
