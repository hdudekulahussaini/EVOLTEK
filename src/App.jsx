import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChargingHubsSection from './components/ChargingHubsSection';
import HighwayExperienceSection from './components/HighwayExperienceSection';
import InvestmentModelsSection from './components/InvestmentModelsSection';
import FranchiseOpportunitySection from './components/FranchiseOpportunitySection';
import BookingToLaunchSection from './components/BookingToLaunchSection';
import AppShowcaseSection from './components/AppShowcaseSection';
import ReadyToPowerSection from './components/ReadyToPowerSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white" style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Main Layout */}
      <div className="relative z-[1]" style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <ChargingHubsSection />
          <HighwayExperienceSection />
          <InvestmentModelsSection />
          <FranchiseOpportunitySection />
          <BookingToLaunchSection />
          <AppShowcaseSection />
          <ReadyToPowerSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
