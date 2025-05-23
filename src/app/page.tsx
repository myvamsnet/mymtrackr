import React from "react";
import { Showcase } from "@/components/landingPage/Showcase";
import { HeroSection } from "@/components/landingPage/HeroSection";
import { FeatureSection } from "@/components/landingPage/FeatureSection";
import { BenefitSection } from "@/components/landingPage/BenefitSection";
import { ServiceSection } from "@/components/landingPage/ServiceSection";
import { FooterSection } from "@/components/landingPage/FooterSection";
import { LandingFaqs } from "@/components/landingPage/LandingFaqs";

const LandingPage = async () => {
  return (
    <main className=" relative bg-white">
      <Showcase />
      <HeroSection />
      <FeatureSection />
      <BenefitSection />
      <LandingFaqs />
      <ServiceSection />
      <FooterSection />
    </main>
  );
};

export default LandingPage;
