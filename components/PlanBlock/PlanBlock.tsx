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
        'чат-ком’юніті для творців контента',
        'Розбір вашої сторінки в форматі відеозвінку',
      ],
      badge: 'Expert',
    },
  ];
  return (
    <section>
      <h2>Тарифи</h2>
      <ul>
        <li>
          <PlanCard planData={mockData[0]} />
        </li>
        <li>
          <PlanCard planData={mockData[1]} />
        </li>
        <li>
          <PlanCard planData={mockData[2]} />
        </li>
      </ul>
    </section>
  );
};

export default PlanBlock;
