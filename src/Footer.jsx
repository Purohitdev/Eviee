import React, { useEffect } from 'react';
import { PiHandshakeDuotone } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import Nav from 'react-bootstrap/Nav';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




function Footer() {

    useEffect(() => {
        const t6 = gsap.timeline({
            scrollTrigger: {
                trigger: ".footer",
                start: "top 80%",
                end: "bottom 90%",
                scrub: 2,
            }
        });


        t6.from(".inn",{

            y:100,
            opacity:0,

        })


    



    }, []);






    return (
        <div className="footer">
            <div className="inn">
            <div className="top-foot">
                <div className="cir-ft">
                    <PiHandshakeDuotone className='hand' />
                </div>

            </div>
            <div className="mid-foot">
                <h1 className='lll'>Tell me about your next  <br />  project</h1>
            <div className="butttt">
            <button className="button">
                    <span className="button-content"> <p>Email me <HiOutlineMail /></p>  </span>
                </button>
                <button className="button">
                    <span className="button-content"> <p>Whatapp </p>  </span>
                </button>
               
            </div>


            </div>
            <div className="btm-foot">

                <h1>@impic.com 🖤</h1>

                <Nav className="ms-auto">
                        <a href="" target='_blank' className='nav-link ann'>Linkedin</a>
                        <Nav.Link className='nav-link'>/</Nav.Link>
                        <a href="" target='_blank'className='nav-link ann'>Discord</a>
                        <Nav.Link className='nav-link'>/</Nav.Link>
                        <a href="" target='_blank'  className='nav-link ann'>Instagram</a>


                    </Nav>



            </div>
            </div>

        </div>
    )
}

export default Footer