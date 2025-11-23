import React from 'react'
import image from './../assets/images/Pills-1.webp';

export default function CreativeSection() {
    return (
        <section className="creative-section">
            <h2 className="title-content">
                We are
                <img src={image} class="pills-image" alt="" />
                Creative thinkers,
                <img src={image} class="pills-image" alt="" />
                Rule Breakers,
                <img src={image} class="pills-image" alt="" />
                Collaburators,
                <img src={image} class="pills-image" alt="" />
                Problem-Solvers
                <img src={image} class="pills-image" alt="" />
                and Boundaryn Pushers
            </h2>
        </section>
    )
}
