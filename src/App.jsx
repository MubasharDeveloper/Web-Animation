import './assets/css/customStyle.css';
import ScrollResponsiveSection from "./components/ScrollResponsiveSection"
import HoverSection from "./components/HoverSection"
import PortfolioSection from './components/PortfolioSection';
import CreativeSection from './components/CreativeSection';
import BrandSlider from './components/BrandSlider';


function App() {

  return (
    <div className="app">
      {/* <div ref={progressBarRef} className="progress-bar"></div> */}
      <ScrollResponsiveSection />
      <HoverSection />
      <PortfolioSection />
      <CreativeSection />
      <BrandSlider />
    </div>
  )
}

export default App
