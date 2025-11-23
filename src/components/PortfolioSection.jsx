import React from 'react';
import ArrowButton from './sub-component/ArrowButton';

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <span className="portfolio-title">
            Portfolio
            <span className="portfolio-badge branding">Branding</span>
            <span className="portfolio-badge web">Websites</span>
            <span className="portfolio-badge marketing">Compaigns & Marketing</span>
        </span>
        <span className="contennt-portfolio">ready to start your next project with us?</span>
        <ArrowButton varient={'primary'} text={'See All Projects'} type={'button'} classes={'mt-4'} />
      </div>
    </section>
  );
};

export default PortfolioSection;