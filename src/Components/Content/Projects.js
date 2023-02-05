import React from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../Content/ProjectCard";
import WebProjectCard from "../Content/WebProjectCard";
import styles from "./Projects.module.css";
import SocialMediaProject from "./SocialMediaProject";

const Projects = ({ projectsRef }) => {
  const { ref: projectRef, inView: projectIsIntersecting } = useInView();
  const { ref: line1Ref, inView: line1IsIntersecting } = useInView();
  const { ref: line2Ref, inView: line2IsIntersecting } = useInView();

  return (
    <section
      ref={projectsRef}
      className="justify-center text-[#f1f3f5] w-3/4 mx-auto pt-40 h-full"
    >
      <h3
        ref={projectRef}
        className={`text-base text-[#868e96] tracking-[0.2em] pt-5 ${
          projectIsIntersecting && styles.animateProject
        }`}
      >
        <span className="text-[#fcc419] font-Inconsolata text-base">02.</span>{" "}
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
      <ProjectCard />
      <SocialMediaProject />
      <WebProjectCard />
    </section>
  );
};

export default Projects;
