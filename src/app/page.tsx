import { Header } from '@/components/landingPage/Header';
import { Banner } from '@/components/landingPage/Banner';
import React from 'react';
import { Showcase } from '@/components/landingPage/components/Showcase';
import { HeroSection } from '@/components/landingPage/components/HeroSection';
import { FeatureSection } from '@/components/landingPage/components/FeatureSection';
import { BenefitSection } from '@/components/landingPage/components/BenefitSection';
import { ServiceSection } from '@/components/landingPage/components/ServiceSection';
import { FooterSection } from '@/components/landingPage/components/FooterSection';

const LandingPage = async () => {
  return (
    <>
      <Showcase />
      <HeroSection />
      <FeatureSection />
      <BenefitSection />
      <ServiceSection />
      <FooterSection />
    </>
  );
};

export default LandingPage;
