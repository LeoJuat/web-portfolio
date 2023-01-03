import React from "react";
import { useInView } from "react-intersection-observer";

import styles from "./Projects.module.css";

const Projects = ({ projectsRef }) => {
  const { ref: projectRef, inView: projectIsIntersecting } = useInView();
  const { ref: line1Ref, inView: line1IsIntersecting } = useInView();
  const { ref: line2Ref, inView: line2IsIntersecting } = useInView();
  const { ref: projectIntroRef, inView: projectIntroIsIntersecting } =
    useInView();

  return (
    <section
      ref={projectsRef}
      className="justify-center text-[#f1f3f5] w-3/4 mx-auto pb-56 pt-40 h-[100.5vh]"
    >
      <h3
        ref={projectRef}
        className={`text-base text-[#868e96] tracking-[0.2em] pt-5 ${
          projectIsIntersecting && styles.animateProject
        }`}
      >
        PROJECTS
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
      <h2
        ref={projectIntroRef}
        className={`text-4xl w-4/6 font-PT mt-7 ${
          projectIntroIsIntersecting && styles.animateProjectIntro
        }`}
      >
        Take a look at some of my projects.
      </h2>
    </section>
  );
};

export default Projects;
