import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { HomePage, AboutPage, ServicesPage, ContactPage, FranchisePage } from './pages';
import { useHashNavigation } from './hooks/useHashNavigation';
import { ROUTES } from './constants/routes';

export default function App() {
  const {
    currentView,
    navigateToHome,
    navigateToAbout,
    navigateToServices,
    navigateToContact,
    navigateToFranchise
  } = useHashNavigation();

  return (
    <div className="relative min-h-screen bg-white">
      {/* Main Layout with Global Navbar & Footer */}
      <div className="relative z-[1]">
        <Navbar
          onNavigateContact={navigateToContact}
          onNavigateAbout={navigateToAbout}
          onNavigateServices={navigateToServices}
          onNavigateFranchise={navigateToFranchise}
          onNavigateHome={navigateToHome}
          activePage={currentView}
        />
        <main>
          {currentView === ROUTES.CONTACT ? (
            <ContactPage onNavigateHome={navigateToHome} />
          ) : currentView === ROUTES.ABOUT ? (
            <AboutPage
              onNavigateHome={navigateToHome}
              onNavigateContact={navigateToContact}
            />
          ) : currentView === ROUTES.SERVICES ? (
            <ServicesPage
              onNavigateHome={navigateToHome}
              onNavigateContact={navigateToContact}
            />
          ) : currentView === ROUTES.FRANCHISE ? (
            <FranchisePage
              onNavigateHome={navigateToHome}
              onNavigateContact={navigateToContact}
            />
          ) : (
            <HomePage
              onNavigateHome={navigateToHome}
              onNavigateContact={navigateToContact}
              onNavigateServices={navigateToServices}
              onNavigateAbout={navigateToAbout}
            />
          )}
        </main>
        <Footer
          onNavigateContact={navigateToContact}
          onNavigateAbout={navigateToAbout}
          onNavigateServices={navigateToServices}
          onNavigateFranchise={navigateToFranchise}
          onNavigateHome={navigateToHome}
        />
      </div>
    </div>
  );
}
