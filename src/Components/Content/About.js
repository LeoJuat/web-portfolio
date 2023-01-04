import React from "react";
import { useInView } from "react-intersection-observer";

import styles from "./About.module.css";

const About = ({ aboutRef, aboutIsIntersecting }) => {
  const { ref: line1Ref, inView: line1IsIntersecting } = useInView();
  const { ref: line2Ref, inView: line2IsIntersecting } = useInView();
  return (
    <section className="justify-center text-[#f1f3f5] w-3/4 mx-auto mt-40 pb-56 pt-40 h-[100.5vh]">
      <h3
        ref={aboutRef}
        className={`text-base text-[#868e96] tracking-[0.2em] pt-5 ${
          aboutIsIntersecting && styles.animateAbout
        }`}
      >
        ABOUT ME
      </h3>
      <hr
        ref={line1Ref}
        className={`h-[1px] border-t border-[#fcc419] w-20 mt-1 ${
          line1IsIntersecting && styles.animateLine1
        }`}
      ></hr>
      <hr
        ref={line2Ref}
        className={`h-[1px] border-t border-[#fcc419] w-12 mt-2 ${
          line2IsIntersecting && styles.animateLine2
        }`}
      ></hr>
    </section>
  );
};

export default About;
