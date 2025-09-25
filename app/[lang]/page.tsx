import Hero from '@/components/Hero/Hero';
import PromoBlock from '@/components/PromoBlock/PromoBlock';
import PricingBlock from '@/components/PricingBlock/PricingBlock';
import { getLanguageFromParams } from '@/lib/language';

interface HomeProps {
  params: {
    lang: string;
  };
}

const Home = async ({ params }: HomeProps) => {
  const resolvedParams = await params;
  const language = getLanguageFromParams(resolvedParams);
  return (
    <>
      <Hero language={language} />
      <PricingBlock language={language} />
      <PromoBlock language={language} />
    </>
  );
};

export default Home;
