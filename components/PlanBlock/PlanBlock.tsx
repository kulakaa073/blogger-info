import { PlanInfo } from '@/types/planInfo';
import PlanCard from '../PlanCard/PlanCard';
import { Language } from '@/lib/translations';

interface PricingBlockProps {
  language: Language;
}

const PlanBlock = ({ language }: PricingBlockProps) => {
  const mockData: PlanInfo[] = [
    {
      name: 'Базовий',
      currentPrice: 99,
      originalPrice: 139,
      featureList: ['Базовий курс', '38 уроків'],
    },
    {
      name: 'Продвинутий',
      currentPrice: 149,
      originalPrice: 199,
      featureList: [
        'база',
        'Додаткові уроки',
        '48 уроків',
        'чат-ком’юніті для творців контента',
      ],
      badge: 'pro',
      highlight: true,
    },
    {
      name: 'ЭКСПЕРТ',
      currentPrice: 299,
      originalPrice: 500,
      featureList: [
        'Додаткові уроки',
        '48 уроків',
        'чат-ком’юніті для \nтворців контента',
        'Розбір вашої сторінки в форматі відеозвінку',
      ],
      badge: 'Expert',
    },
  ];
  return (
    <section className="w-full pt-16.5 ds:pt-16.75 pb-19">
      <div className="max-w-mb ds:max-w-ds px-10 ds:px-20 mx-auto">
        <h2 className="font-raleway font-bold text-2xl ds:text-5xl leading-7 ds:leading-14 uppercase mb-7 ds:mb-19.75 text-center">
          Тарифи
        </h2>
        <ul className="flex flex-col gap-6.5 ds:flex-row ds:gap-5">
          <li>
            <PlanCard planData={mockData[0]} variant="base" />
          </li>
          <li>
            <PlanCard planData={mockData[1]} variant="bright" />
          </li>
          <li>
            <PlanCard planData={mockData[2]} variant="gradient" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PlanBlock;
