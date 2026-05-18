export function scrollToSection(sectionId: string, behavior: ScrollBehavior = 'smooth') {
  if (typeof window === 'undefined') {
    return;
  }

  const targetLookup: Record<string, string> = {
    home: 'home',
    about: 'about-title',
    services: 'services-title',
    projects: 'projects-title',
    process: 'process-title',
    testimonials: 'testimonials-title',
    contact: 'contact-title',
  };

  const targetElement =
    document.getElementById(targetLookup[sectionId] ?? sectionId) ??
    document.getElementById(sectionId);

  if (!targetElement) {
    return;
  }

  const navbarElement = document.querySelector('[data-cloudflow-navbar]') as HTMLElement | null;
  const navbarOffset = navbarElement ? navbarElement.getBoundingClientRect().height : 0;
  const targetTop = window.scrollY + targetElement.getBoundingClientRect().top - navbarOffset;

  window.scrollTo({
    top: Math.max(0, targetTop),
    behavior,
  });

  window.history.pushState(null, '', `#${sectionId}`);
}