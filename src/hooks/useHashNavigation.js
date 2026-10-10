import { useState, useEffect } from 'react';
import { ROUTES } from '../constants/routes';

export function useHashNavigation() {
  const [currentView, setCurrentView] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash === ROUTES.CONTACT) return ROUTES.CONTACT;
    if (hash === ROUTES.ABOUT) return ROUTES.ABOUT;
    if (hash === ROUTES.SERVICES) return ROUTES.SERVICES;
    if (hash === ROUTES.FRANCHISE) return ROUTES.FRANCHISE;
    return ROUTES.HOME;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === ROUTES.CONTACT) {
        setCurrentView(ROUTES.CONTACT);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === ROUTES.ABOUT) {
        setCurrentView(ROUTES.ABOUT);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === ROUTES.SERVICES) {
        setCurrentView(ROUTES.SERVICES);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === ROUTES.FRANCHISE) {
        setCurrentView(ROUTES.FRANCHISE);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === ROUTES.HOME || !hash) {
        setCurrentView(ROUTES.HOME);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view) => {
    setCurrentView(view);
    window.location.hash = `#${view}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    currentView,
    navigateTo,
    navigateToHome: () => navigateTo(ROUTES.HOME),
    navigateToAbout: () => navigateTo(ROUTES.ABOUT),
    navigateToServices: () => navigateTo(ROUTES.SERVICES),
    navigateToContact: () => navigateTo(ROUTES.CONTACT),
    navigateToFranchise: () => navigateTo(ROUTES.FRANCHISE),
  };
}
