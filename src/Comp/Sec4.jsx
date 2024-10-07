import React, { useEffect } from 'react';
import { FaDiscord } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Sec4() {

    useEffect(() => {
        const t5 = gsap.timeline({
            scrollTrigger: {
                trigger: ".sec4",
                start: "top 80%",
                end: "bottom 90%",
                scrub: 2,
            }
        });


        t5.from(".top-sec4 h1", {
            y: 30,
            opacity: 0

        })

        t5.from(".but2", {
            x: 50,
            opacity: 0

        })

        t5.from(".btm1 img", {
            y: 20,
            opacity: 0,
        })


        t5.from(".bottom-sec4 p", {
            y: 20,
            opacity: 0,
            stagger: 0.2,
        })


        t5.from(".bottom-sec4 .button ",{
            y:50,
            opacity:0,

        })

    }, []);



    return (
        <div className="sec4">
            <div className="top-sec4 ">
                <h1>Welcome to my community, Impic, on Discord!  <br />I'm the admin and designer of this server.</h1>
            </div>
            <hr />
            <div className="button-div">
                <div className="but2">
                    Community
                </div>
            </div>
            <div className="btm-sec3">

                <div className="btm1">
                    <h1>It's Our</h1>
                    <img src="https://www.community.impic.tech/assets/impicLogo-LGwSrq_r.png" alt="" />
                    <h1>Community</h1>
                </div>
                <div className="bottom-sec4">

                    <p>Impic Community on Discord is a vibrant and inclusive space for developers, designers, and tech enthusiasts </p>
                    <p> to connect, collaborate, and grow together. Whether you're a seasoned professional or just </p>
                    <p>    starting your coding journey, Impic Community offers a welcoming environment where members </p>
                    <p>   can share ideas, seek advice, participate in fun challenges, and stay updated on the latest </p>
                    <p>  trends in technology. With regular events, coding competitions, and helpful resources, </p>
                    <p>  it's the perfect place to hone your skills and build meaningful connections with like-minded individuals.  </p>
                    <p>   Join us to be part of an engaging and supportive developer community!</p>
                    <div className="bttt">
                        <button className="button">
                            <span className="button-content">Join us on <FaDiscord className='arrow' /> </span>
                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Sec4