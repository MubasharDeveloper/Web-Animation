import React, { useState, useRef, useEffect } from 'react';

const BrandSlider = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [scrollSpeed, setScrollSpeed] = useState(1);
    const slider1Ref = useRef(null);
    const slider2Ref = useRef(null);

    const brands = [
        'Brandname', 'Brandname', 'Brandname', 'Brandname', 'Brandname',
        'Brandname', 'Brandname', 'Brandname', 'Brandname', 'Brandname'
    ];

    // Handle scroll speed
    useEffect(() => {
        let scrollTimeout;

        const handleScroll = () => {
            // Increase speed when scrolling
            setScrollSpeed(3);

            // Clear previous timeout
            clearTimeout(scrollTimeout);

            // Return to normal speed after scrolling stops
            scrollTimeout = setTimeout(() => {
                setScrollSpeed(1);
            }, 200);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    // Animation loop
    useEffect(() => {
        if (isHovered) return;

        let animationFrame;
        const speed = scrollSpeed * 0.5; // Adjust base speed

        const animate = () => {
            if (slider1Ref.current && slider2Ref.current) {
                // Move slider1 left to right
                slider1Ref.current.style.transform = `translateX(${-slider1Ref.current.offsetLeft + speed}px)`;

                // Move slider2 right to left
                slider2Ref.current.style.transform = `translateX(${slider2Ref.current.offsetLeft - speed}px)`;
            }
            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [isHovered, scrollSpeed]);

    return (
        <div className="slider-container">
            {/* First Slider - Left to Right */}
            <div
                className="slider-track slider-1"
                ref={slider1Ref}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="slider-row">
                    <div className="table-cell header-cell">Indname</div>
                    {brands.map((brand, index) => (
                        <div key={`slider1-${index}`} className="table-cell">
                            {brand}
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {brands.map((brand, index) => (
                        <div key={`slider1-dup-${index}`} className="table-cell">
                            {brand}
                        </div>
                    ))}
                </div>
            </div>

            {/* Second Slider - Right to Left */}
            <div
                className="slider-track slider-2"
                ref={slider2Ref}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="slider-row">
                    {brands.map((brand, index) => (
                        <div key={`slider2-${index}`} className="table-cell">
                            {brand}
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {brands.map((brand, index) => (
                        <div key={`slider2-dup-${index}`} className="table-cell">
                            {brand}
                        </div>
                    ))}
                    <div className="table-cell header-cell">Indname</div>
                </div>
            </div>
        </div>
    );
};

export default BrandSlider;