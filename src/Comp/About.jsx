import React, { useEffect } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function About() {

    useEffect(() => {

        const t5 = gsap.timeline({
            scrollTrigger: {
              trigger: ".about",
              start: "top 80%",
              end: "bottom 90%",
              scrub: 2,
            }

          });


          t5.from(".about h1",{
            y:30,
            opacity:0

          })


          t5.from(".but4",{
            x:50,
            opacity:0

        })


        t5.from(".btm-about p",{
            y:50,
            opacity:0,
            stagger:0.2,

        })
    })
    return (
        <div className="about" id="about">
            <div className="top-about">
                <h1>Get to know me: A blend of creativity, passion, and  <br />a love for crafting seamless digital experiences!</h1>
            </div>
            <hr />
            <div className="button-div">
                <div className="but4">
                    About me
                </div>
            </div>
            <div className="btm-about">
                <p>I'm a passionate and driven computer engineering student currently pursuing my diploma. With a solid  </p>
                 <p>   foundation in data analysis and a year of hands-on experience as a Data Analyst intern at FlyIT Infotech. </p>
                  <p>   Beyond data, I am an intermediate-level front-end developer. I'm always eager to collaborate on innovative </p>
                    <p>  projects and am constantly seeking opportunities to learn and grow in the tech field. Let’s connect and </p>
                     <p>  create something amazing together!</p>

            </div>

        </div>
    )
}

export default About