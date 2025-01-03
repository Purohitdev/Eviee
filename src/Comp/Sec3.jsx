import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import p1 from "../assets/pokie.png";
import p2 from "../assets/word.png";
import p3 from "../assets/net.png";
import p4 from "../assets/arya.png";
import p5 from "../assets/crud.png"
import p6 from "../assets/watch.png"
import p7 from "../assets/mahima.png"
import gsap from "gsap";
import { PiProjectorScreenChartDuotone } from "react-icons/pi";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Sec3() {

  useEffect(() => {
    const t4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec3",
        start: "top 80%",
        end: "bottom 90%",
        scrub: 2,
      }
    });


    t4.from(".top-sec3 h1", {
      y: 30,
      opacity: 0

    })

    t4.from(".but1", {
      x: 50,
      opacity: 0

    })

    t4.from(".pro-box", {
      x: 50,
      opacity: 0,
      stagger: 0.2,

    })

  }, []);

  return (
    <div className="sec3" id='Project'>
      <div className="top-sec3">
        <h1>Dive into my creations: A showcase  of  innovation , <br /> design, and code mastery!</h1>
      </div>
      <hr />
      <div className="button-div">
        <div className="but1">
          Projects <PiProjectorScreenChartDuotone />
        </div>
      </div>
      <div className="bottom-sec3">

        <Container>
          <Row>
            <Col lg={6}>
              <div className="pro-box">
                <a href="https://pokidex-drab.vercel.app/" target='_blank'>
                  <div className="in-box">
                    <img src={p1} alt="" srcset="" />



                  </div>
                  <div className="img-det">
                    <h1>1 // Pokidex</h1>
                    <p>~ html-css</p>

                  </div>

                </a>

              </div>
            </Col>
            <Col lg={6}>
              <div className="pro-box">
                <a href="https://typingame-sage.vercel.app/" target='_blank'>
                  <div className="in-box">
                    <img src={p2} alt="" srcset="" />

                  </div>
                  <div className="img-det">
                    <h1>2 // typing game</h1>
                    <p>~ html-css</p>



                  </div>
                </a>

              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="pro-box">
                <a href="https://netflix-homepage-sepia.vercel.app/" target='_blank'>
                  <div className="in-box">
                    <img src={p3} alt="" srcset="" />

                  </div>
                  <div className="img-det">
                    <h1>3 // Netflix</h1>
                    <p>~ html-css</p>




                  </div>
                </a>

              </div>
            </Col>
            <Col lg={6}>
              <div className="pro-box">
                <a href="https://arya.impic.tech/" target='_blank'>
                  <div className="in-box">
                    <img src={p4} alt="" srcset="" />

                  </div>
                  <div className="img-det">
                    <h1>4 // Potfolio</h1>
                    <p>~ html-css</p>



                  </div>
                </a>

              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="pro-box">
                <a href="https://crud-two-rho.vercel.app/" target='_blank'>
                  <div className="in-box">
                    <img src={p5} alt="" srcset="" />

                  </div>
                  <div className="img-det">
                    <h1>5 // CRUD App</h1>
                    <p>~ html-css</p>



                  </div>
                </a>

              </div>
            </Col>
            <Col lg={6}>
              <div className="pro-box">
                <a href="https://watchify-lake.vercel.app/" target='_blank'>
                  <div className="in-box">
                    <img src={p6} alt="" srcset="" />

                  </div>
                  <div className="img-det">
                    <h1>6 // Watchify</h1>
                    <p>~ html-css</p>



                  </div>
                </a>

              </div>
            </Col>
            </Row>
            <Row>
            <Col lg={6}>
              <div className="pro-box">
                <a href="https://mahima.framer.media/" target='_blank'>
                  <div className="in-box">
                    <img src={p7} alt="" srcset="" />

                  </div>
                  <div className="img-det">
                    <h1>8 // Mahima</h1>
                    <p>~ Framer</p>



                  </div>
                </a>

              </div>
            </Col>

          </Row>

        </Container>


      </div>


    </div>
  )
}

export default Sec3