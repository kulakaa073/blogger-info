import Image from 'next/image';
import { Language } from '@/lib/translations';

interface HeroProps {
  language: Language;
}

const Hero = ({ language }: HeroProps) => {
  return (
    <section className="w-full pt-6 ds:pt-16.75 pb-16.5">
      <div className="max-w-mb ds:max-w-ds px-10 ds:px-20 mx-auto flex flex-col items-center ds:grid ds:grid-cols-[644px] ds:grid-rows-auto ds:relative ds:gap-x-10 ds:gap-y-10.5 ds:place-items-start">
        <div className="relative ds:grid-area-left ds:w-161 ds:h-116.5">
          <picture className=" block w-full rounded-bg overflow-hidden">
            <source
              media="(min-width: 1280px)"
              srcSet="/images/hero-desktop@1x.jpg 1x, /images/hero-desktop@2x.jpg 2x"
            />
            <source srcSet="/images/hero-mobile@1x.jpg 1x, /images/hero-mobile@2x.jpg 2x" />
            <Image
              src="/images/hero-mobile@1x.jpg"
              alt="Hero Image"
              width={313}
              height={354}
              className="w-full h-auto object-cover"
              priority
            />
          </picture>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_57.77%,rgba(0,0,0,0.7)_79.8%)] w-78.25 h-88.5 ds:hidden" />
        </div>
        <h1 className="ds:grid-area-hero ds:w-142.5 relative z-1 flex flex-col text-center ds:text-left font-raleway font-extrabold text-heading ds:text-ds-heading leading-15.75 ds:leading-28.25 uppercase -mt-19.75 mb-8 ds:mt-52.5 ds:ml-142.5 ds:mb-0">
          <span className="mb-1 font-bold text-[20.93px] ds:text-8 leading-6.25 ds:leading-9.5 [background-image:var(--gradient-accent)] bg-clip-text text-transparent normal-case">
            Від 0 до 100,000 за 90 днів
          </span>
          Секрети вірусних відео
        </h1>
        <p className="ds:grid-area-right ds:w-99 ds:pt-21 font-raleway text-sm/4 ds:text-lg ds:leading-5.25 text-center ds:text-left mb-11 ds:mb-0">
          Стати відомим лише за 3 місяці без витрат на рекламу! Дізнайтеся ключ
          до створення вірусного контенту та перетворите свої ідеї на мільйонні
          перегляди.
        </p>
        <div className="ds:grid-area-bottom flex flex-col items-center w-full ds:w-133.5">
          <button className="relative flex items-center justify-center font-raleway font-semibold text-sm/5.5 ds:text-[22.11px] ds:leading-[36.8px] bg-white text-black shadow-[4.32px_6.48px_10.8px_4.32px_#A75DF333_inset] h-15 ds:h-18.5 w-full rounded-full mb-2.75 hover:brightness-105 hover:scale-102 transition-all duration-250 ease-in-out">
            Секрети вірусних відео
            <span className="bg-red-2 h-15 ds:h-18.5 w-14.75 ds:w-18.5 flex items-center ds:justify-center absolute right-0 top-0 rounded-full text-white text-xl ds:text-2xl leading-6.5 ds:leading-[36.8px]">
              -50%
            </span>
          </button>
          <p className="font-raleway font-semibold text-xl/5.5 ds:text-2xl ds:leading-[36.8px] text-red-2 flex items-center gap-[9.38px]">
            1000 грн
            <span className="relative text-sm text-gray inline-block px-[1.4px] ds:px-1">
              2000грн
              <span className="absolute left-0 right-0 top-1/2 h-[1px] bg-current -translate-y-1/2"></span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
