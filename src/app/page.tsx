import { Header } from "@/components/landingPage/Header";
import React from "react";
import { Showcase } from "@/components/landingPage/components/Showcase";
import { HeroSection } from "@/components/landingPage/components/HeroSection";
import { FeatureSection } from "@/components/landingPage/components/FeatureSection";
import { BenefitSection } from "@/components/landingPage/components/BenefitSection";
import { ServiceSection } from "@/components/landingPage/components/ServiceSection";
import { FooterSection } from "@/components/landingPage/components/FooterSection";
import CookiesPolicy from "@/components/landingPage/components/CookiesPolicy";

const LandingPage = async () => {
  return (
    <main className=" relative">
      <Header />
      <Showcase />
      <HeroSection />
      <FeatureSection />
      <BenefitSection />
      <ServiceSection />
      <FooterSection />
      <CookiesPolicy />
    </main>
  );
};

export default LandingPage;
