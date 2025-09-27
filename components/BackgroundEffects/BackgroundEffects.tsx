import BlurredEllipse from '../ui/BlurredEllipse/BlurredEllipse';

const BackgroundEffects = () => {
  return (
    <div className="relative -z-20 w-mb ds:w-ds mx-auto">
      {/* Hero section */}
      <BlurredEllipse
        width={184.36}
        height={173.59}
        blur={144.659}
        className="ds:hidden left-[218px] top-[185px] bg-purple mix-blend-multiply opacity-50"
      />
      <BlurredEllipse
        width={184.36}
        height={173.59}
        blur={144.659}
        className="ds:hidden -left-[55px] top-[512px] bg-teal-3 mix-blend-multiply opacity-50"
      />
      <BlurredEllipse
        width={184.36}
        height={173.59}
        blur={144.659}
        className="ds:hidden left-[298px] top-[969.59px] bg-teal-3 mix-blend-multiply opacity-50"
      />

      <BlurredEllipse
        width={368.22}
        height={346.72}
        blur={288.93}
        className="hidden ds:block left-[888px] top-[889px] bg-purple mix-blend-multiply opacity-40"
      />
    </div>
  );
};

export default BackgroundEffects;
