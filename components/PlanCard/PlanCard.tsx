import { PlanInfo } from '@/types/planInfo';

interface PlanCardProps {
  planData: PlanInfo;
  variant?: string;
  className?: string; //just to be safe
}

const PlanCard = ({ planData, variant, className }: PlanCardProps) => {
  return (
    <div>
      {planData.highlight && <p>Best seller</p>}
      <h3>{planData.name}</h3>
      {planData.badge && <p>{planData.badge}</p>}
      <p>
        {`${planData.currentPrice} $`}
        <span>{`${planData.originalPrice}$`}</span>
      </p>
      <ul>
        {planData.featureList.map((feature, i) => (
          <li key={`${planData.name}-${feature}-${i}`}>{feature}</li>
        ))}
      </ul>
      <button>Купити</button>
    </div>
  );
};

export default PlanCard;
