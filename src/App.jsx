import './assets/css/customStyle.css';
import ScrollResponsiveSection from "./components/ScrollResponsiveSection"
import HoverSection from "./components/HoverSection"
import SocialSection from './components/SocialSection';
import PortfolioSection from './components/PortfolioSection';
import CreativeSection from './components/CreativeSection';
import SectionSlider from './components/SectionSlider';
import BrandSlider from './components/BrandSlider';


function App() {

  return (
    <div className="app">
      {/* <div ref={progressBarRef} className="progress-bar"></div> */}
      <ScrollResponsiveSection />
      <HoverSection />
      <SocialSection />
      <PortfolioSection />
      <CreativeSection />
      <SectionSlider />
      <BrandSlider />
    </div>
  )
}

export default App
