'use client';

import { scrollToSection } from '@/lib/utils/scrollToSection';

interface ScrollToSectionProps {
  targetSection: string;
  offset?: number;
  children: React.ReactElement;
}

const ScrollWrap = ({
  targetSection,
  offset = 0,
  children,
}: ScrollToSectionProps) => {
  const handleClick = () => {
    scrollToSection(targetSection, offset);
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default ScrollWrap;
