import Image from 'next/image';
import { Language } from '@/lib/translations';

interface HeroProps {
  language: Language;
}

const Hero = ({ language }: HeroProps) => {
  return (
    <section>
      <div>
        <Image
          src="/path/to/image.jpg"
          alt="Hero Image"
          width={313}
          height={354}
        />
      </div>
      <p>
        Стати відомим лише за 3 місяці без витрат на рекламу! Дізнайтеся ключ до
        створення вірусного контенту та перетворите свої ідеї на мільйонні
        перегляди.
      </p>
      <h2>Від 0 до 100,000 за 90 днів</h2>
      <h1>Секрети вірусних відео</h1>
      <button>
        Секрети вірусних відео <span>-50%</span>
      </button>
      <div>
        <p>
          1000 грн <span>2000грн</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
