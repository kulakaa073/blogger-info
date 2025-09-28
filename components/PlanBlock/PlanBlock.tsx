import PlanCard from '../PlanCard/PlanCard';
import { Language } from '@/lib/translations';
import { datoCMSApi } from '@/lib/api/datocms';

interface PricingBlockProps {
  language: Language;
}

const PlanBlock = async ({ language }: PricingBlockProps) => {
  const plans = await datoCMSApi.getAllPlans();
  {
    /*Future feature: add functionality for smooth scrolling for more than 3 plans, except will have to make it client component, but its fine*/
  }
  return (
    <section id="plans" className="w-full pt-16.5 ds:pt-16.75 pb-19">
      <div className="max-w-mb ds:max-w-ds px-10 ds:px-20 mx-auto">
        <h2 className="font-raleway font-bold text-2xl ds:text-5xl leading-7 ds:leading-14 uppercase mb-7 ds:mb-19.75 text-center">
          Тарифи
        </h2>
        <ul className="flex flex-col gap-6.5 ds:flex-row ds:gap-5">
          {plans.map((plan) => (
            <li key={plan.id}>
              <PlanCard planData={plan} variant={plan.cardVariant} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PlanBlock;
