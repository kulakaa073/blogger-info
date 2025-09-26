interface BlurredEllipseProps {
  width: number;
  height: number;
  blur: number;
  className?: string;
}

const BlurredEllipse = ({
  width,
  height,
  blur,
  className = '',
}: BlurredEllipseProps) => {
  return (
    <div
      className={`absolute rounded-full  ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        filter: `blur(${blur}px)`,
      }}
    />
  );
};

export default BlurredEllipse;
