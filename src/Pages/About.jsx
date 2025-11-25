import React from 'react';

export default function About() {
  return (
    <div className="app">
      <section className="about-section">
        <div className="about-container">
          <h1>About Us</h1>
          <p>
            We are a creative studio dedicated to delivering exceptional digital experiences.
            Our team specializes in web animation, interactive design, and stunning visual narratives.
          </p>
          
          <div className="about-grid">
            <div className="about-card">
              <h3>Our Mission</h3>
              <p>
                To transform ideas into captivating digital experiences that inspire, engage, and delight.
              </p>
            </div>
            
            <div className="about-card">
              <h3>Our Vision</h3>
              <p>
                To be a leading creative studio known for pushing the boundaries of web design and animation.
              </p>
            </div>
            
            <div className="about-card">
              <h3>Our Values</h3>
              <p>
                Excellence, creativity, innovation, and client satisfaction drive everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
