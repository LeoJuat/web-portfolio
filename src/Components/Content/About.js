import React from "react";
import { useInView } from "react-intersection-observer";

import styles from "./About.module.css";

const About = ({ aboutRef, aboutIsIntersecting }) => {
  const { ref: line1Ref, inView: line1IsIntersecting } = useInView();
  const { ref: line2Ref, inView: line2IsIntersecting } = useInView();
  const { ref: p1Ref, inView: p1IsIntersecting } = useInView();
  const { ref: p2Ref, inView: p2IsIntersecting } = useInView();
  const { ref: skillsHeaderRef, inView: skillsHeaderIsIntersecting } =
    useInView();
  const { ref: skillsRef, inView: skillsIsIntersecting } = useInView();

  return (
    <>
      <section
        className="justify-center text-[#f1f3f5] w-3/4 mx-auto pt-40 min-h-[100.5vh]"
        ref={aboutRef}
      >
        <h3
          className={`text-base text-[#868e96] tracking-[0.2em] pt-5 ${
            aboutIsIntersecting && styles.animateAbout
          }`}
        >
          <span className="text-[#fcc419] font-Inconsolata text-base">03.</span>{" "}
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
        <p
          ref={p1Ref}
          className={`pb-10 pt-16 leading-8 text-base sm:text-lg w-11/12 mx-auto ${
            p1IsIntersecting && styles.animateP1
          }`}
        >
          I am a{" "}
          <span className="text-[#fcc419] underline decoration-[#fcc419] underline-offset-4">
            Front End Software Engineer
          </span>{" "}
          with a passion for creating visually stunning and user-friendly
          websites and applications. I have a strong background in{" "}
          <span className="text-[#fcc419] underline decoration-[#fcc419] underline-offset-4">
            HTML
          </span>
          ,{" "}
          <span className="text-[#fcc419] underline decoration-[#fcc419] underline-offset-4">
            CSS
          </span>
          , and{" "}
          <span className="text-[#fcc419] underline decoration-[#fcc419] underline-offset-4">
            JavaScript
          </span>
          , and am always looking to expand my skills and knowledge in the
          field. I understand the value of teamwork and am able to contribute my
          ideas and collaborate with others to achieve common goals.
        </p>
        <p
          ref={p2Ref}
          className={`leading-8 text-base sm:text-lg w-11/12 mx-auto ${
            p2IsIntersecting && styles.animateP2
          }`}
        >
          I am{" "}
          <span className="text-[#fcc419] underline decoration-[#fcc419] underline-offset-4">
            always willing to listen to and learn from others in order to
            maximize my own growth and development as a developer
          </span>
          . I am confident in my abilities, but also understand the importance
          of continuous learning and improvement. I am excited to apply my
          skills and experience to new challenges and am eager to find a company
          where I can grow and make a meaningful impact.
        </p>
        <h1
          ref={skillsHeaderRef}
          className={`mt-32 text-[#868e96] text-lg text-center font-medium tracking-[0.2em] ${
            skillsHeaderIsIntersecting && styles.skillHeader
          }`}
        >
          SKILLS
        </h1>
        <div
          ref={skillsRef}
          className={`text-[#f1f3f5] text-lg text-center font-medium tracking-[0.2em] pt-10 ${
            skillsIsIntersecting && styles.skills
          }`}
        >
          HTML/CSS <span className="text-[#fcc419] text-lg">|</span> JAVASCRIPT{" "}
          <span className="text-[#fcc419] text-lg">|</span> REACT{" "}
          <span className="text-[#fcc419] text-lg">|</span> REDUX{" "}
          <span className="text-[#fcc419] text-lg">|</span> TAILWIND CSS{" "}
          <span className="text-[#fcc419] text-lg">|</span> GITHUB
        </div>
      </section>
    </>
  );
};

export default About;
