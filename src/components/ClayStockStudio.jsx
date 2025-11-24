import React from 'react'
import logo from './../assets/images/logo.png';
import studio from './../assets/images/studio.jpg';

export default function ClayStockStudio() {
  return (
    <section className="clay-stock-studio-section">
      <div className="studio-content">
        <h3>
          Claystock is a studio that values clarity, craft, and close <br />
          <span>
          collaboration. We partner with brands to develop strategy, design creative, deliver tech, and build campaigns with an shaidhwavering focus on quality.
          </span>
        </h3>
        <img src={studio} alt="" />
      </div>
      <div className="studio-img">
        <img src={logo} alt="Studio Logo" />
      </div>
    </section>
  )
}
