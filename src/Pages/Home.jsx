import React from 'react'
import Navigation from '../components/Navigation';
import ScrollResponsiveSection from "./../components/ScrollResponsiveSection"
import HoverSection from "./../components/HoverSection"
import SocialSection from './../components/SocialSection';
import PortfolioSection from './../components/PortfolioSection';
import CreativeSection from './../components/CreativeSection';
import SectionSlider from './../components/SectionSlider';
import BrandSlider from './../components/BrandSlider';
import ClayStockStudio from './../components/ClayStockStudio';

export default function Home() {
  return (
    <div className="app">
      <Navigation theme={'dark-nav'} />
      <ScrollResponsiveSection />
      <HoverSection />
      <SocialSection />
      <PortfolioSection />
      <CreativeSection />
      <SectionSlider />
      <BrandSlider />
      <ClayStockStudio />
    </div>
  )
}
