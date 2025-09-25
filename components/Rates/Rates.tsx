import RatesCard from '../RatesCard/RatesCard';

const Rates = () => {
  return (
    <section>
      <h2>Тарифи</h2>
      <ul>
        <li>
          <RatesCard />
        </li>
        <li>
          <RatesCard />
        </li>
        <li>
          <RatesCard />
        </li>
      </ul>
    </section>
  );
};

export default Rates;
