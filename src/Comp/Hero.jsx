import React, { useEffect, useRef } from 'react';
import Navb from '../Navb';
import { PiArrowCircleUpRightDuotone } from "react-icons/pi";
import Sec1 from './Sec1';
import gsap from 'gsap';
import Sec2 from './Sec2';
import Sec3 from './Sec3';
import Sec4 from './Sec4';
import Footer from '../Footer';
import About from './About';

function Hero() {
    const footerRef = useRef(null); // Create a reference for Footer

    useEffect(() => {
        const t1 = gsap.timeline();

        t1.from(".logo , .ann", {
            y: -50,
            opacity: 0,
            stagger: 0.2,
        });

        t1.from(".main-hero .pic-cir", {
            x: 300,
            opacity: 0,
            rotate: 360,
        });

        t1.from(".main-hero p, .main-hero h1", {
            x: 300,
            opacity: 0,
            stagger: 0.2,
        });

        t1.from(".main-hero .button", {
            y: 100,
            opacity: 0,
        });
    }, []);

    const scrollToFooter = () => {
        if (footerRef.current) {
            footerRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start', // Adjust the block position
            });
        }
    };

    return (
        <>
            <div className="hero-background hero" id="Hero">
                <div className="hero-gradient"></div>
                <div className="hero-gradient2"></div>
                <div className="div">
                    <Navb />

                    <div className="main-hero">
                        <div className="pic-cir"></div>
                        <p className='ppppp'>Hi, I am Aryaa 👋🏻</p>
                        {/* <h1>Building digital products, web pages, Discord servers, and Fresher xd</h1> */}
                        <h1>Cricketer, Tech Enthusiast, Web Dev, Data Analyst, Discord Bot Designer  </h1> 

                        <button className="button" onClick={scrollToFooter}>
                            <span className="button-content">Let's give it a shot <PiArrowCircleUpRightDuotone className='arrow' /></span>
                        </button>
                    </div>
                    <Sec1 />
                    <About/>
                    <Sec2 />
                    <Sec3 />
                    <Sec4 />
                </div>

                {/* Add a wrapper to ensure the footer is at the bottom */}
                <div ref={footerRef}>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Hero;
