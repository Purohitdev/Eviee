// import React from 'react'
// import Marquee from "react-fast-marquee";
// import { RiReactjsLine } from "react-icons/ri";
// import { SiNextdotjs } from "react-icons/si";
// import { FaAngular } from "react-icons/fa";
// import { VscVscode } from "react-icons/vsc";
// import { RiJavaLine } from "react-icons/ri";
// import { RiJavascriptFill } from "react-icons/ri";
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { SiTailwindcss } from "react-icons/si";
// import { FaBootstrap } from "react-icons/fa";
// import { FaPython } from "react-icons/fa";
// import { SiEclipseide } from "react-icons/si";
// import { FaDocker } from "react-icons/fa";
// import { FaPhp } from "react-icons/fa";
// import { DiRuby } from "react-icons/di";
// import { SiPostman } from "react-icons/si";
// import { GrMysql } from "react-icons/gr";
// import { IoLogoFigma } from "react-icons/io5";
// import { SiCanva } from "react-icons/si";
// import { DiDjango } from "react-icons/di";
// import gsap from "gsap";
// import { useGSAP } from '@gsap/react';
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);


// function Sec1() {


//   useGSAP(() => {

//     const t2 = gsap.timeline({
//       scrollTrigger: {
//           trigger: ".Sec1",
//           start: "top 50% ",
//           end: "bottom 90%%",
//           scrub: 2,
//           markers:true,
//       }
//   })



//   })


//   return (
//     <div className='sec1'>
//       <div className="marq1">
//         <Marquee direction='right' speed="40">

//           <div className="box-mrq">
//             <RiReactjsLine />
//           </div>
//           <div className="box-mrq">
//           <SiNextdotjs />

//           </div>
//           <div className="box-mrq">
//           <FaAngular />

//           </div>
//           <div className="box-mrq">
//           <VscVscode />
//           </div>
//           <div className="box-mrq">
//           <RiJavaLine />
//           </div>
//           <div className="box-mrq">
//           <RiJavascriptFill />
//           </div>
//           <div className="box-mrq">
//           <FaHtml5 />
//           </div>
//           <div className="box-mrq">
//           <FaCss3Alt />
//           </div>
//           <div className="box-mrq">
//           <SiTailwindcss />
//           </div>
//           <div className="box-mrq">
//           <FaBootstrap />
//           </div>


//         </Marquee>

//       </div>
//       <div className="marq1">

//         <Marquee direction='left' speed="40">


//           <div className="box-mrq">
//           <FaPython />
//           </div>
//           <div className="box-mrq">
//           <SiEclipseide />
//           </div>
//           <div className="box-mrq">
//           <FaDocker />
//           </div>
//           <div className="box-mrq">
//           <FaPhp />
//           </div>
//           <div className="box-mrq">
//           <DiRuby />
//           </div>
//           <div className="box-mrq">
//           <SiPostman />
//           </div>
//           <div className="box-mrq">
//           <GrMysql />
//           </div>
//           <div className="box-mrq">
//           <IoLogoFigma />
//           </div>
//           <div className="box-mrq">
//           <SiCanva />
//           </div>
//           <div className="box-mrq">
//           <DiDjango />
//           </div>

//         </Marquee>

//       </div>

//     </div>
//   )
// }

// export default Sec1


import React, { useEffect } from 'react';
import Marquee from "react-fast-marquee";
import { RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { RiJavaLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiEclipseide } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { IoLogoFigma } from "react-icons/io5";
import { SiCanva } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Sec1() {
  useEffect(() => {
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec1",
        start: "top 80%",
        end: "bottom 90%",
        scrub: 2,
      }
    });


    t2.from(".sec1 ",{
      opacity:0,

    })
    
    


  }, []); 

  return (
    <div className='sec1'>
      <div className="marq1">
        <Marquee direction='right' speed={40}>
          <div className="box-mrq">
            <RiReactjsLine />
          </div>
          <div className="box-mrq">
            <SiNextdotjs />
          </div>
          <div className="box-mrq">
            <FaAngular />
          </div>
          <div className="box-mrq">
            <VscVscode />
          </div>
          <div className="box-mrq">
            <RiJavaLine />
          </div>
          <div className="box-mrq">
            <RiJavascriptFill />
          </div>
          <div className="box-mrq">
            <FaHtml5 />
          </div>
          <div className="box-mrq">
            <FaCss3Alt />
          </div>
          <div className="box-mrq">
            <SiTailwindcss />
          </div>
          <div className="box-mrq">
            <FaBootstrap />
          </div>
        </Marquee>
      </div>
      <div className="marq1">
        <Marquee direction='left' speed={40}>
          <div className="box-mrq">
            <FaPython />
          </div>
          <div className="box-mrq">
            <SiEclipseide />
          </div>
          <div className="box-mrq">
            <FaDocker />
          </div>
          <div className="box-mrq">
            <FaPhp />
          </div>
          <div className="box-mrq">
            <DiRuby />
          </div>
          <div className="box-mrq">
            <SiPostman />
          </div>
          <div className="box-mrq">
            <GrMysql />
          </div>
          <div className="box-mrq">
            <IoLogoFigma />
          </div>
          <div className="box-mrq">
            <SiCanva />
          </div>
          <div className="box-mrq">
            <DiDjango />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Sec1;
