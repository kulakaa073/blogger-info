export const scrollToSection = (sectionId: string, offset: number) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    if (offset) {
      window.scrollBy({ top: -offset, behavior: 'smooth' });
    }
  }
};
