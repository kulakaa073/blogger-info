import Hero from '@/components/Hero/Hero';
import PromoBlock from '@/components/PromoBlock/PromoBlock';
import PlanBlock from '@/components/PlanBlock/PlanBlock';
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
      <PlanBlock language={language} />
      <PromoBlock language={language} />
    </>
  );
};

export default Home;
