import React, { useEffect } from 'react';
import { PiHandshakeDuotone } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import Nav from 'react-bootstrap/Nav';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { IoLogoWhatsapp } from "react-icons/io";





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


        t6.from(".inn", {

            y: 100,
            opacity: 0,

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
                            <span className="button-content"> <a href="mailto:aryaaakiran8106@gmail.com" target='_blank' > <p>Email me <IoMdMail /> </p> </a> </span>
                        </button>
                        <button className="button">
                            <span className="button-content"> <a href="https://wa.me/8108674893?text=hy" target='_blank'>  <p>Whatapp  <IoLogoWhatsapp /></p> </a>  </span>
                        </button>

                    </div>


                </div>
                <div className="btm-foot">

                    <h1>@impic.com 🖤</h1>

                    <Nav className="ms-auto">
                        <a href="https://www.linkedin.com/in/arya-shendge-011a11328/" target='_blank' className='nav-link ann try'>Linkedin</a>
                        <Nav.Link className='nav-link'>/</Nav.Link>
                        <a href="https://www.community.impic.tech/" target='_blank' className='nav-link ann try'>Discord</a>
                        <Nav.Link className='nav-link'>/</Nav.Link>
                        <a href="https://github.com/aryaaaaaS" target='_blank' className='nav-link ann try'>Instagram</a>


                    </Nav>



                </div>
            </div>

        </div>
    )
}

export default Footer