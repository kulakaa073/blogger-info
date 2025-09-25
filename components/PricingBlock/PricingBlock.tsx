import PricingCard from '../PricingCard/PricingCard';
import { Language } from '@/lib/translations';

interface PricingBlockProps {
  language: Language;
}

const PricingBlock = ({ language }: PricingBlockProps) => {
  return (
    <section>
      <h2>Тарифи</h2>
      <ul>
        <li>
          <PricingCard />
        </li>
        <li>
          <PricingCard />
        </li>
        <li>
          <PricingCard />
        </li>
      </ul>
    </section>
  );
};

export default PricingBlock;
