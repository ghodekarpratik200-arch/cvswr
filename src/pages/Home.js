import React from 'react';
import HeroSection from '../compoents/HeroSection';
import ServicesSection from '../compoents/ServicesSection';
import ClientsSection from '../compoents/ClientsSection';
import ServicesCarousel from '../compoents/ServicesCarousel/ServicesCarousel';


function Home() {
  return (
    <>
      <HeroSection/>
      <ServicesCarousel/>
      <ServicesSection/>
      <ClientsSection/>
    </>
  );
}

export default Home;
