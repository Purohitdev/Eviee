import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import gsap from 'gsap';
import { PiProjectorScreenChartDuotone } from 'react-icons/pi';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Import images
import pokie from '../assets/pokie.png';
import word from '../assets/word.png';
import net from '../assets/net.png';
import arya from '../assets/arya.png';
import crud from '../assets/crud.png';
import watch from '../assets/watch.png';
import mahima from '../assets/mahima.png';
import cal from "../assets/arch.png"

// Project data array
const projects = [
  { id: 1, name: 'Pokidex', link: 'https://pokidex-drab.vercel.app/', img: pokie, tech: 'HTML-CSS' },
  { id: 2, name: 'Typing Game', link: 'https://typingame-sage.vercel.app/', img: word, tech: 'HTML-CSS' },
  { id: 3, name: 'Netflix', link: 'https://netflix-homepage-sepia.vercel.app/', img: net, tech: 'HTML-CSS' },
  { id: 4, name: 'Portfolio', link: 'https://arya.impic.tech/', img: arya, tech: 'HTML-CSS' },
  { id: 5, name: 'CRUD App', link: 'https://crud-two-rho.vercel.app/', img: crud, tech: 'HTML-CSS' },
  { id: 6, name: 'Watchify', link: 'https://watchify-lake.vercel.app/', img: watch, tech: 'HTML-CSS' },
  { id: 7, name: 'Mahima', link: 'https://mahima.framer.media/', img: mahima, tech: 'Framer' },
  { id: 8, name: 'alimonycalculator', link: 'https://alimonycalculator.vercel.app/', img: cal, tech: 'HTML-CSS' },

];

function Sec3() {
  useEffect(() => {
    const t4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.sec3',
        start: 'top 80%',
        end: 'bottom 90%',
        scrub: 2,
      },
    });

    t4.from('.top-sec3 h1', { y: 30, opacity: 0 });
    t4.from('.but1', { x: 50, opacity: 0 });
    t4.from('.pro-box', { x: 50, opacity: 0, stagger: 0.2 });
  }, []);

  return (
    <div className="sec3" id="Project">
      <div className="top-sec3">
        <h1>
          Dive into my creations: A showcase of innovation, <br /> design, and code mastery!
        </h1>
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
            {projects.map((project) => (
              <Col xs={12} md={6} key={project.id} className="col">
                {/* xs={12} -> 1 col in mobile, md={6} -> 2 cols in desktop */}
                <div className="pro-box">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <div className="in-box">
                      <img src={project.img} alt={project.name} />
                    </div>
                    <div className="img-det">
                      <h1>{project.id} // {project.name}</h1>
                      <p>~ {project.tech}</p>
                    </div>
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Sec3;
