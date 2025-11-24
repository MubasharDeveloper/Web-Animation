import React from 'react'
import float1 from './../assets/images/social-float-image-2.png'
import float2 from './../assets/images/social-float-image.png'

export default function SocialSection() {
  return (
    <section className="social-section">
      <div className="social-container">
        <div className="social-div">
          <a href="#" className="side-link">Insta</a>
          <a href="#" className="side-link">LinkedIn</a>
          <a href="#" className="side-link">Dribble</a>
          <a href="#" className="side-link">Bechance</a>
          <div className="middle-content">
            <h3>The Work </h3>
            <p>Everyone loves</p>
          </div>
        </div>
        <div className="floating-div">
          <img src={float1} alt="" />
          <img src={float2} alt="" />
        </div>
      </div>
    </section>
  )
}
