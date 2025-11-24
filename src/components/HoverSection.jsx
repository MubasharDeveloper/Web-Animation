import React from 'react'
import SlideShowImage from './../assets/images/SideShowImage.png';
import MarketingImage from './../assets/images/marketing.png';

export default function HoverSection() {
    return (
        <section className="content-section" style={{ paddingTop: '60vh' }}>
            <div className="text-slide-section text-slide-section-1">
                <a href="#" className='text-slider-link'>
                    <span className="text-slide-image">
                        <img src={SlideShowImage} alt="" />
                    </span>
                    <span className='text-slide-content'>Brand & Strategy</span>
                    <span className="text-slide-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                    </span>
                </a>
            </div>
            <div className="text-slide-section text-slide-section-2">
                <a href="#" className='text-slider-link'>
                    <span className="text-slide-image">
                        <img src={MarketingImage} alt="" />
                    </span>
                    <span className='text-slide-content'>Campaigns & Marketing</span>
                    <span className="text-slide-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                    </span>
                </a>
            </div>
            <div className="text-slide-section text-slide-section-3">
                <a href="#" className='text-slider-link'>
                    <span className="text-slide-image">
                        <img src={SlideShowImage} alt="" />
                    </span>
                    <span className='text-slide-content'>Websites & Tech Products</span>
                    <span className="text-slide-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                    </span>
                </a>
            </div>
        </section>
    )
}
