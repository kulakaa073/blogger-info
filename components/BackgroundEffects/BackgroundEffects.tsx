import BlurredEllipse from '../ui/BlurredEllipse/BlurredEllipse';

const BackgroundEffects = () => {
  return (
    <div className="relative -z-10 w-mb mx-auto">
      {/* Hero section */}
      <BlurredEllipse
        width={184.36}
        height={173.59}
        blur={289.32}
        className="left-[218px] top-[185px] bg-purple mix-blend-multiply opacity-80"
      />
      <BlurredEllipse
        width={184.36}
        height={173.59}
        blur={289.32}
        className="-left-[55px] top-[512px] bg-teal-3 mix-blend-multiply opacity-80"
      />
      <BlurredEllipse
        width={184.36}
        height={173.59}
        blur={144.659}
        className="left-[298px] top-[969.59px] bg-teal-3 mix-blend-multiply opacity-80"
      />
    </div>
  );
};

export default BackgroundEffects;
