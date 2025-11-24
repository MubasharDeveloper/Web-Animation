import React, { useEffect, useState, useRef } from 'react';
import SlideShowImage from './../assets/images/SideShowImage.png';
import ClayStock from './../assets/images/Claystock.png';
import logo from './../assets/images/logo.png'

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


    return (
        <section ref={heroSectionRef} className="hero-section">
            <div className="hero-content">
                <img ref={textLogoRef} className="text-logo" src={ClayStock} />
                <img src={logo} alt="" className='icon-logo' />
            </div>

            <div ref={scalingImageRef} className="scaling-image">
                <img
                    src={SlideShowImage}
                    alt="Portrait"
                />
            </div>

            <div className="left-bottom-card">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9915 53.4217L26.8401 47.07L27.1717 28.7585C27.1739 28.7581 27.1761 28.7577 27.1784 28.7572L36.7105 44.445L40.6017 49.5364L42.7627 47.8848L45.0892 46.1061L41.1979 41.0148L28.522 27.8712C28.529 27.8612 28.5361 27.8511 28.543 27.8409L46.3219 32.1804L52.6736 33.0291L53.0338 30.3334L53.4216 27.4302L47.07 26.5816L28.8934 26.2523C28.8888 26.2245 28.8838 26.1968 28.8781 26.1693L44.4451 16.7106L49.5365 12.8194L47.8853 10.6589L46.1069 8.33147L41.0155 12.2227L27.9745 24.7998C27.9422 24.7774 27.9094 24.756 27.8759 24.7353L32.1804 7.09956L33.029 0.747909L30.3332 0.387729L27.4302 5.58152e-06L26.5815 6.35165L26.2535 24.4608C26.2145 24.4694 26.1756 24.479 26.1373 24.4897L16.7112 8.97649L12.82 3.88515L10.659 5.53671L8.33256 7.31548L12.2238 12.4068L24.836 25.4843C24.8212 25.5091 24.8068 25.5344 24.7929 25.5599L7.09967 21.2413L0.74802 20.3927L0.387893 23.0881L2.2481e-06 25.9913L6.35165 26.84L24.6009 27.1705C24.6044 27.184 24.6081 27.1974 24.612 27.2107L8.97652 36.711L3.88517 40.6022L5.53646 42.7628L7.31469 45.0903L12.4061 41.1991L25.5871 28.487C25.5892 28.4883 25.5914 28.4896 25.5935 28.4909L21.2413 46.322L20.3926 52.6736L23.0882 53.0338L25.9915 53.4217Z" fill="#733CF3" />
                    </svg>
                </div>
                <h3 className="bottom-card-title">
                    We craft world-class strategy, design,
                </h3>
                <p className="bottom-card-content">
                    and technology to build ambitious brands that captivate and inspire globally. Behold the power of brands
                </p>
            </div>

            <div className="bottom-navigation">
                <span>Strategy</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.96429 0H6.03571V5.37911L2.23211 1.5755L1.57551 2.23211L5.37911 6.03571H0V6.96429H5.37911L1.57551 10.7679L2.23211 11.4245L6.03571 7.62086V13H6.96429V7.62086L10.7679 11.4245L11.4245 10.7679L7.62086 6.96429H13V6.03571H7.62086L11.4245 2.2321L10.7679 1.5755L6.96429 5.37911V0Z" fill="#FFA800" />
                </svg>
                <span>Design</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.96429 0H6.03571V5.37911L2.23211 1.5755L1.57551 2.23211L5.37911 6.03571H0V6.96429H5.37911L1.57551 10.7679L2.23211 11.4245L6.03571 7.62086V13H6.96429V7.62086L10.7679 11.4245L11.4245 10.7679L7.62086 6.96429H13V6.03571H7.62086L11.4245 2.2321L10.7679 1.5755L6.96429 5.37911V0Z" fill="#FFA800" />
                </svg>
                <span>Technology</span>
            </div>
        </section>
    );
};

export default ScrollResponsiveSection;