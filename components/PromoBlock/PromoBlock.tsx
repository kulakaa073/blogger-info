import { Language } from '@/lib/translations';

interface PromoBlockProps {
  language: Language;
}

const PromoBlock = ({ language }: PromoBlockProps) => {
  return (
    <section>
      <h2>Дізнайся як створити контент, який підкорює аудиторію</h2>
      <p>Матеріали, які мають змогу охопити тисячі людей</p>
      <button>
        Придбати зі знижкою <span>-50%</span>
      </button>
      <div className="blurred-strip">Секрети вірсних відео</div>
    </section>
  );
};

export default PromoBlock;
