import React, { useEffect, useState, useRef } from 'react';
import { FaPaintBrush, FaCode, FaMobileAlt, FaChartLine, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const ScrollResponsiveSection = () => {
    const heroSectionRef = useRef(null);
    const scalingImageRef = useRef(null);
    const textLogoRef = useRef(null);
    const heroSubtitleRef = useRef(null);
    const scrollIndicatorRef = useRef(null);
    const progressBarRef = useRef(null);

    const [maxImageWidth, setMaxImageWidth] = useState(0);
    const [maxImageHeight, setMaxImageHeight] = useState(0);
    const [sectionHeight, setSectionHeight] = useState(0);

    useEffect(() => {
        const updateDimensions = () => {
            setMaxImageWidth(window.innerWidth);
            setMaxImageHeight(window.innerHeight);
            setSectionHeight(window.innerHeight);
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        // Initial values
        const margin = 32;
        const minImageWidth = 240;
        const minImageHeight = 160;

        // Scroll thresholds
        const imageScalingThreshold = sectionHeight * 0.8;
        const sectionTransitionThreshold = sectionHeight * 1.2;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollPosition / docHeight) * 100;

            // Update progress bar
            if (progressBarRef.current) {
                progressBarRef.current.style.width = scrollPercent + '%';
            }

            // PHASE 1: Image scaling only (0 to imageScalingThreshold)
            if (scrollPosition < imageScalingThreshold) {
                const scaleProgress = scrollPosition / imageScalingThreshold;

                // Image scaling
                const newWidth = minImageWidth + (maxImageWidth - minImageWidth) * scaleProgress;
                const newHeight = minImageHeight + (maxImageHeight - minImageHeight) * scaleProgress;

                if (scalingImageRef.current) {
                    scalingImageRef.current.style.width = newWidth + 'px';
                    scalingImageRef.current.style.height = newHeight + 'px';

                    // Margin reduction (32px to 0px)
                    const currentMargin = margin - (margin * scaleProgress);
                    scalingImageRef.current.style.right = currentMargin + 'px';
                    scalingImageRef.current.style.bottom = currentMargin + 'px';
                }

                // Text effects
                if (textLogoRef.current) {
                    if (scaleProgress > 0.5) {
                        textLogoRef.current.classList.add('reverse');
                    } else {
                        textLogoRef.current.classList.remove('reverse');
                    }
                }

                // Fade out elements
                if (heroSubtitleRef.current) {
                    heroSubtitleRef.current.style.opacity = 1 - (scaleProgress * 1.5);
                }
                if (scrollIndicatorRef.current) {
                    scrollIndicatorRef.current.style.opacity = 1 - (scaleProgress * 1.5);
                }

                // Keep hero section in place
                if (heroSectionRef.current) {
                    heroSectionRef.current.style.transform = 'translateY(0)';
                }

            }
            // PHASE 2: Image at max, start section transition (imageScalingThreshold to sectionTransitionThreshold)
            else if (scrollPosition < sectionTransitionThreshold) {
                // Set image to full screen
                if (scalingImageRef.current) {
                    scalingImageRef.current.style.width = maxImageWidth + 'px';
                    scalingImageRef.current.style.height = maxImageHeight + 'px';
                    scalingImageRef.current.style.right = '0px';
                    scalingImageRef.current.style.bottom = '0px';
                }

                // Apply reverse styling
                if (textLogoRef.current) {
                    textLogoRef.current.classList.add('reverse');
                }

                // Hide elements
                if (heroSubtitleRef.current) {
                    heroSubtitleRef.current.style.opacity = '0';
                }
                if (scrollIndicatorRef.current) {
                    scrollIndicatorRef.current.style.opacity = '0';
                }

                // Start moving hero section up
                const moveProgress = (scrollPosition - imageScalingThreshold) / (sectionTransitionThreshold - imageScalingThreshold);
                const moveAmount = moveProgress * 100;

                if (heroSectionRef.current) {
                    heroSectionRef.current.style.transform = `translateY(-${moveAmount}vh)`;
                }

            }
            // PHASE 3: Continue section movement (beyond sectionTransitionThreshold)
            else {
                // Maintain full screen image
                if (scalingImageRef.current) {
                    scalingImageRef.current.style.width = maxImageWidth + 'px';
                    scalingImageRef.current.style.height = maxImageHeight + 'px';
                    scalingImageRef.current.style.right = '0px';
                    scalingImageRef.current.style.bottom = '0px';
                }

                // Keep styling
                if (textLogoRef.current) {
                    textLogoRef.current.classList.add('reverse');
                }
                if (heroSubtitleRef.current) {
                    heroSubtitleRef.current.style.opacity = '0';
                }
                if (scrollIndicatorRef.current) {
                    scrollIndicatorRef.current.style.opacity = '0';
                }

                // Continue moving hero section up
                const moveProgress = (scrollPosition - sectionTransitionThreshold) / (sectionHeight * 0.5);
                const additionalMove = Math.min(moveProgress * 50, 50);

                if (heroSectionRef.current) {
                    heroSectionRef.current.style.transform = `translateY(-${100 + additionalMove}vh)`;
                }
            }

            // Handle reverse scrolling
            if (scrollPosition < imageScalingThreshold) {
                // Show elements again
                if (heroSubtitleRef.current) {
                    heroSubtitleRef.current.style.opacity = 1 - (scrollPosition / imageScalingThreshold * 1.5);
                }
                if (scrollIndicatorRef.current) {
                    scrollIndicatorRef.current.style.opacity = 1 - (scrollPosition / imageScalingThreshold * 1.5);
                }

                // Remove reverse styling if needed
                if (textLogoRef.current && scrollPosition / imageScalingThreshold <= 0.5) {
                    textLogoRef.current.classList.remove('reverse');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateDimensions);
        };
    }, [maxImageWidth, maxImageHeight, sectionHeight]);

    const cards = [
        {
            icon: <FaPaintBrush />,
            title: "UI/UX Design",
            description: "Creating intuitive and engaging user experiences that delight your customers and drive business growth."
        },
        {
            icon: <FaCode />,
            title: "Web Development",
            description: "Building responsive, high-performance websites and web applications using the latest technologies."
        },
        {
            icon: <FaMobileAlt />,
            title: "Mobile Apps",
            description: "Developing cross-platform mobile applications that provide seamless experiences across all devices."
        },
        {
            icon: <FaChartLine />,
            title: "Digital Marketing",
            description: "Driving growth through data-driven marketing strategies that increase visibility and conversions."
        }
    ];

    const socialLinks = [
        { icon: <FaTwitter />, href: "#" },
        { icon: <FaInstagram />, href: "#" },
        { icon: <FaLinkedin />, href: "#" },
        { icon: <FaGithub />, href: "#" }
    ];

    return (
        <div className="app">
            {/* <div ref={progressBarRef} className="progress-bar"></div> */}

            <section ref={heroSectionRef} className="hero-section">
                <div className="hero-content">
                    <h1 ref={textLogoRef} className="text-logo">STUDIO</h1>
                    <p ref={heroSubtitleRef} className="hero-subtitle">
                        Scroll to see the image grow and the text logo transform
                    </p>
                </div>

                <div ref={scrollIndicatorRef} className="scroll-indicator">
                    <div className="scroll-text">SCROLL DOWN</div>
                    <div className="scroll-arrow"></div>
                </div>

                <div ref={scalingImageRef} className="scaling-image">
                    <img
                        src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
                        alt="Portrait"
                    />
                </div>
            </section>

            <section className="content-section" style={{ paddingTop: '60vh' }}>
                <div className="text-slide-section text-slide-section-1">
                    <a href="#" className='text-slider-link'>
                        <span className="text-slide-image">
                            <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=" alt="" />
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
                            <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=" alt="" />
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
                            <img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=" alt="" />
                        </span>
                        <span className='text-slide-content'>Websites & Tech Products</span>
                        <span className="text-slide-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
                        </span>
                    </a>
                </div>
            </section>

            <footer>
                <div className="footer-content">
                    <h3>Interactive Scroll Section</h3>
                    <p>Created with React and CSS</p>
                    <div className="social-links">
                        {socialLinks.map((link, index) => (
                            <a key={index} href={link.href}>
                                {link.icon}
                            </a>
                        ))}
                    </div>
                    <p>&copy; 2023 All Rights Reserved</p>
                </div>
            </footer>

        </div>
    );
};

export default ScrollResponsiveSection;