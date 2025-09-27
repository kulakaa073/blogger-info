import { PlanInfo } from '@/types/planInfo';
import clsx from 'clsx';
import BlurredEllipse from '../ui/BlurredEllipse/BlurredEllipse';

interface PlanCardProps {
  planData: PlanInfo;
  variant?: 'base' | 'bright' | 'gradient';
  className?: string; //just to be safe
}

const PlanCard = ({ planData, variant = 'base', className }: PlanCardProps) => {
  const variants = {
    card: {
      base: 'h-107.5 bg-primary text-white pl-8.25 pr-8 py-8 ds:pt-9 ds:pr-9.25 ds:pl-9 ds:pb-6.5 overflow-hidden',
      bright:
        'h-116.75 bg-white text-primary pl-7.25 pr-7 py-8 ds:pt-6.75 ds:pr-9.25 ds:pl-9 ds:pb-6.5',
      gradient:
        'h-116.5 [background:var(--gradient-secondary)] px-6 pb-8 pt-8.25 ds:pt-6.75 ds:pr-9.25 ds:pl-9 ds:pb-6.5',
    },
    button: {
      base: 'bg-white text-primary',
      bright: 'bg-primary text-white',
      gradient: 'bg-primary text-white',
    },
    price: {
      base: 'h-19.75',
      bright: 'h-20.5',
      gradient: 'h-20.25',
    },
    strikeLine: {
      base: 'pl-1.5 pr-1.25',
      bright: 'px-1.25',
      gradient: 'px-0.75',
    },
  };
  return (
    <div
      className={clsx(
        className,
        variants.card[variant],
        'relative w-full rounded-xbig z-0 shadow-[4px_6px_10px_4px_#A75DF333_inset] ds:w-90 ds:h-116.5',
        planData.highlight && 'mt-5.25 ds:mt-0',
      )}
    >
      {variant === 'base' && (
        <div>
          <BlurredEllipse
            width={184.36}
            height={173.59}
            blur={144.659}
            className="left-[291px] -top-[67px] bg-purple -z-10 opacity-50"
          />
          <BlurredEllipse
            width={184.36}
            height={173.59}
            blur={144.659}
            className="-left-[86px] top-[358px] bg-teal-3 -z-10 opacity-50"
          />
        </div>
      )}
      <div className="uppercase h-full flex flex-col justify-between">
        <div>
          {planData.highlight && (
            <div className="flex items-center justify-center h-10.25 w-42.25 rounded-full absolute left-1/2 top-0 [background:var(--gradient-secondary)] shadow-[0px_4px_16px_1px_#00000040] -translate-y-1/2 -translate-x-1/2 ds:-translate-y-[71.42%]">
              <p className="font-raleway font-bold leading-4.75 text-white">
                Best seller
              </p>
            </div>
          )}
          <div
            className={clsx(
              planData.badge
                ? variant === 'gradient'
                  ? 'mb-7.5 ds:mb-4.5'
                  : 'mb-7.25 ds:mb-4.5'
                : 'mb-8 ds:mb-4.5',
              'flex items-center justify-between',
            )}
          >
            <h3 className="font-raleway font-semibold leading-4.75 ds:text-xl ds:leading-5.75">
              {planData.name}
            </h3>
            {planData.badge && (
              <div
                className={clsx(
                  variant === 'bright'
                    ? 'w-25 h-10.5 ds:w-29.75 bg-primary'
                    : '',
                  variant === 'gradient' ? 'w-29.75 h-10.5 bg-white' : '',
                  'rounded-full flex items-center justify-center',
                )}
              >
                <p className="font-raleway font-bold leading-4.75 [background-image:var(--gradient-secondary)] bg-clip-text text-transparent">
                  {planData.badge}
                </p>
              </div>
            )}
          </div>
          <p
            className={clsx(
              `font-manrope font-bold text-heading-big ds:text-7xl leading-21.75 ds:leading-25.25 mb-7.25 w-full flex justify-between ds:justify-start ds:gap-5.5 items-baseline-last`,
              Math.floor(planData.currentPrice / 100) === 0 &&
                'pr-6.25 ds:pr-0',
              variants.price[variant],
            )}
          >
            {`${planData.currentPrice} $`}
            <span
              className={clsx(
                variants.strikeLine[variant],
                'relative text-xl leading-6.75 inline-block',
              )}
            >
              {`${planData.originalPrice}$`}
              <span className="absolute left-0 right-0 top-1/2 h-[2px] bg-current -translate-y-1/2"></span>
            </span>
          </p>
          <ul className="flex flex-col gap-3.5 list-disc list-inside marker:text-transparent">
            {planData.featureList.map((feature, i) => (
              <li key={`${planData.name}-${feature}-${i}`}>
                {/*What with this line height? 365%? Ask if designer mistake*/}
                <p className="whitespace-pre-line ds:whitespace-normal font-raleway font-semibold leading-4.75 relative pl-6.5 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3.75 before:h-3.75 before:rounded-full before:bg-current">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <button
          className={clsx(
            variants.button[variant],
            'w-full rounded-full h-11.75 flex items-center justify-center font-manrope font-semibold text-sm leading-4.75 ds:text-base ds:leading-5.5 hover:scale-102 transition-all duration-250 ease-in-out',
          )}
        >
          Купити
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
