import React from 'react';
import Hero from '../../components/Hero';
import ChargingHubsSection from '../../components/ChargingHubsSection';
import HighwayExperienceSection from '../../components/HighwayExperienceSection';
import InvestmentModelsSection from '../../components/InvestmentModelsSection';
import FranchiseOpportunitySection from '../../components/FranchiseOpportunitySection';
import BookingToLaunchSection from '../../components/BookingToLaunchSection';
import AppShowcaseSection from '../../components/AppShowcaseSection';
import ReadyToPowerSection from '../../components/ReadyToPowerSection';

export default function HomePage({ onNavigateContact, onNavigateServices, onNavigateAbout }) {
  return (
    <div className="home-page-root">
      <Hero onNavigateContact={onNavigateContact} onNavigateServices={onNavigateServices} />
      <ChargingHubsSection />
      <HighwayExperienceSection />
      <InvestmentModelsSection />
      <FranchiseOpportunitySection onNavigateContact={onNavigateContact} />
      <BookingToLaunchSection />
      <AppShowcaseSection />
      <ReadyToPowerSection onNavigateContact={onNavigateContact} />
    </div>
  );
}
