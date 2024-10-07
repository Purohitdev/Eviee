import React, { useEffect } from 'react';
import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { TiDeviceDesktop } from "react-icons/ti";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Sec2() {

    useEffect(() => {
        const t3 = gsap.timeline({
          scrollTrigger: {
            trigger: ".sec2",
            start: "top 80%",
            end: "bottom 90%",
            scrub: 2,
          }
        });


        t3.from(".top-sec2 h1",{
            y:30,
            opacity:0

        })

        t3.from(".but",{
            x:50,
            opacity:0

        })

        t3.from(".box-det",{
            x:50,
            opacity:0,
            stagger:0.2,

        })
    
    
     
        
    
    
      }, []); 


    return (
        <div className="sec2">
            <div className="top-sec2">
                <h1>Collaborate with brands and agencies <br /> to create impactful results.</h1>
            </div>
            <hr />

            <div className="button-div">
                <div className="but">
                    Service
                </div>
            </div>

            <div className="bottom-sec2">

                <div className="box-det">
                <CgWebsite className='det-icon'/>
                    <h1>UI & UX</h1>
                    <p>Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>
                </div>
                <div className="box-det">
                <TiDeviceDesktop className='det-icon' />
                    <h1>Web dev</h1>
                    <p>Transforming ideas into exceptional web and mobile app experiences.</p>
                </div>
                <div className="box-det">
                <FaDiscord className='det-icon' />
                    <h1>Discord server </h1>
                    <p>Build and grow your Discord server with our community of passionate creators!</p>
                </div>
                <div className="box-det">
                <FaDatabase  className='det-icon'/>
                    <h1>Data analyst</h1>
                    <p>Bringing your vision to life with the latest technology and design trends.</p>
                </div>



            </div>

        </div>
    )
}

export default Sec2