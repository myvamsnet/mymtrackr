import { Header } from '@/components/landingPage/Header';
import { Showcase } from '@/components/landingPage/Showcase';
import { Banner } from '@/components/landingPage/Banner';
import MainLayout from '@/components/layout/MainLayout';
import React from 'react';

const LandingPage = async () => {
  return (
    <>
      <Header />
      <Showcase />
      <Banner />
    </>
  );
};

export default LandingPage;
