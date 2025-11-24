import React from 'react'
import image from './../assets/images/Pills-1.webp';

export default function CreativeSection() {
    return (
        <section className="creative-section">
            <h2 className="title-content">
                We are
                <div className="creative-image">
                    <img src={image} class="pills-image" alt="" />
                </div>
                Creative thinkers,
                <div className="creative-image">
                    <img src={image} class="pills-image" alt="" />
                </div>
                Rule Breakers,
                <div className="creative-image">
                    <img src={image} class="pills-image" alt="" />
                </div>
                Collaburators,
                <div className="creative-image">
                    <img src={image} class="pills-image" alt="" />
                </div>
                Problem-Solvers
                <div className="creative-image">
                    <img src={image} class="pills-image" alt="" />
                </div>
                and Boundaryn Pushers
            </h2>
        </section>
    )
}
