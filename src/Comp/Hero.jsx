import React, { useEffect } from 'react';
import Navb from '../Navb';
import { PiArrowCircleUpRightDuotone } from "react-icons/pi";
import Sec1 from './Sec1';
import gsap from 'gsap';
import Sec2 from './Sec2';
import Sec3 from './Sec3';

function Hero() {

    useEffect(() => {
        const t1 = gsap.timeline();

        t1.from(".logo , .ann", {
            y: -50,
            opacity: 0, 
            stagger:0.2,
        });


        t1.from(".main-hero .pic-cir ",{
            x:300,
            opacity:0,
            rotate:360,

        })

        t1.from(".main-hero  p ,.main-hero h1 ",{
            x:300,
            opacity:0,
            stagger:0.2,
        })


        t1.from(".button",{
            y:100,
            opacity:0,
        })


    }, []);  

    return (
        <>
            <div className="hero-background hero">
                <div className="hero-gradient"></div>
                <div className="hero-gradient2"></div>
                <Navb />

                <div className="main-hero">
                    <div className="pic-cir">

                    </div>
                    <p>Hi, I am Evie 👋🏻 </p>
                    <h1>Building digital products, web pages, Discord servers, and Fresher xd</h1>

                    <button className="button">
                        <span className="button-content">Let's give it a shot <PiArrowCircleUpRightDuotone className='arrow' /> </span>
                    </button>

                </div>
                <Sec1 />
                <Sec2/>
                <Sec3/>


            </div>
        </>
    );
}

export default Hero;
