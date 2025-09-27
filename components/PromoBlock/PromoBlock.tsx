import { Language } from '@/lib/translations';
import BlurredEllipse from '../ui/BlurredEllipse/BlurredEllipse';
import Image from 'next/image';
import FormController from '../FormController/FormController';

interface PromoBlockProps {
  language: Language;
}

const PromoBlock = ({ language }: PromoBlockProps) => {
  return (
    <section className="w-full py-[1px] [background:var(--gradient-main)] mb-12 ds:mb-14.75">
      <div className="bg-primary overflow-hidden relative">
        {/* Desktop promo background */}
        <div className="hidden ds:block [background:var(--gradient-promo)] absolute right-0 top-0 h-full w-[47.5%]" />
        <div className="hidden ds:block absolute left-0 top-0 h-full w-[38.98%]">
          <picture>
            <source srcSet="/images/promo-desktop@1x.jpg 1x, /images/promo-desktop@2x.jpg 2x" />
            <Image
              src="/images/promo-desktop@1x.jpg"
              alt="Promo Image"
              fill
              className="object-cover"
              priority
            />
          </picture>
        </div>
        <BlurredEllipse
          width={712}
          height={1486}
          blur={335.2}
          className="left-[22.2vw] -top-[38.9vw] w-[55.6vw] h-[116vw] bg-primary hidden ds:block"
        />
        <div className="relative max-w-mb ds:max-w-ds px-14 ds:px-93.25 mx-auto flex flex-col items-center pt-28.25 ds:pt-15 pb-28.5 ds:pb-16.5">
          <BlurredEllipse
            width={315.7}
            height={282}
            blur={74.3132}
            className="-left-[221px] -top-[203px] [background:var(--gradient-main)] ds:hidden opacity-50"
          />
          <BlurredEllipse
            width={315.7}
            height={282}
            blur={74.3132}
            className="left-[299px] top-[408px] [background:var(--gradient-main)] ds:hidden opacity-50"
          />
          <h2 className="font-raleway font-bold text-xl ds:text-4xl leading-5.75 ds:leading-10.5 text-center uppercase flex flex-col ds:block mb-5 ds:w-111.75">
            Дізнайся як створити контент, який{' '}
            {/*To style gradiented text properly, i'd use svg with a text element, but its overcomplicated for current project and bad for seo*/}
            <span className="[box-decoration-break:clone] [-webkit-box-decoration-break:clone] [background-image:var(--gradient-main)] bg-clip-text text-transparent">
              підкорює аудиторію
            </span>
          </h2>
          <p className="font-raleway text-sm ds:text-2xl leading-4 ds:leading-7 text-center mb-15.5">
            Матеріали, які мають змогу охопити тисячі людей
          </p>
          <FormController>
            <button className="w-67 ds:w-133.5 relative font-raleway font-semibold text-sm ds:text-[22.11px] leading-[19.42px] ds:leading-[36.84px] [background:var(--gradient-secondary)] text-white shadow-[3.88px_5.83px_9.71px_3.88px_#A75DF333_inset] ds:shadow-[7.37px_11.05px_18.42px_7.37px_#A75DF333_inset] py-6 ds:py-[18.5px] pr-17.75 pl-12.25 ds:px-auto rounded-full text-nowrap hover:brightness-105 hover:scale-102 transition-all duration-250 ease-in-out">
              <p className="h-5 ds:h-9.25">Придбати зі знижкою</p>
              <span className="bg-red-2 h-17 w-15.25 ds:h-18.5 ds:w-18.5 flex items-center justify-center absolute right-0 top-0 rounded-full text-white text-xl leading-4.75 ds:text-2xl ds:leading-9.25">
                -50%
              </span>
            </button>
          </FormController>
          <div className="w-[1547.86px] h-[97.19px] hidden [background:var(--gradient-secondary)] -rotate-[35.51deg] absolute left-[383.31px] top-[318.46px] blur-[3.36512px] ds:flex items-center gap-[38.59]">
            <p className="font-sansation text-[34.3016px] w-122.5 leading-9.5 text-white uppercase">
              Секрети вірсних відео
            </p>
            <p className="font-sansation text-[34.3016px] leading-9.5 text-white uppercase">
              Секрети вірсних відео
            </p>
            <p className="font-sansation text-[34.3016px] w-122.5 leading-9.5 text-white uppercase">
              Секрети вірсних відео
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBlock;
