import React from 'react';
import { HelpHeader } from './components/Header';

import { Faq } from './components/Faq';
import { BlogsCarousel } from './components/BlogsCarousel';
import ProtectedLayout from '../_components/layout/ProtectedLayout';

const Help = () => {
  return (
    <ProtectedLayout>
      <HelpHeader />
      <BlogsCarousel />
      <Faq />
    </ProtectedLayout>
  );
};

export default Help;
