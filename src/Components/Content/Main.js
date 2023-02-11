import React from "react";
import { useInView } from "react-intersection-observer";

import styles from "./Main.module.css";

const Main = ({ mainRef }) => {
  const { ref: helloRef, inView: helloIsIntersecting } = useInView();
  const { ref: waveRef, inView: waveIsIntersecting } = useInView();
  const { ref: introRef, inView: introIsIntersecting } = useInView();
  const { ref: linksRef, inView: linksIsIntersecting } = useInView();

  return (
    <>
      <section
        ref={mainRef}
        className="flex flex-col justify-center text-[#f1f3f5] w-3/4 mx-auto py-64 h-[100.5vh]"
      >
        <h3
          ref={helloRef}
          className={`text-xs sm:text-base text-[#868e96] tracking-[0.2em] ${
            helloIsIntersecting && styles.hello
          }`}
        >
          <span className="text-[#fcc419] font-Inconsolata text-xs sm:text-base">
            01.
          </span>{" "}
          HELLO WORLD
          <span
            ref={waveRef}
            className={`text-base text-[#868e96] pl-2 inline-block ${
              waveIsIntersecting && styles.wave
            }`}
          >
            👋
          </span>
        </h3>

        <h1
          ref={introRef}
          className={`sm:text-6xl w-4/6 font-PT mt-7 text-4xl ${
            introIsIntersecting && styles.intro
          }`}
        >
          My name is Leo Juat, <br /> and I am a <br />
          <span className="text-[#fcc419] underline">Front-End Developer.</span>
        </h1>
        <div
          ref={linksRef}
          className={`absolute flex flex-col gap-20 right-5 pt-7 transition-all ${
            linksIsIntersecting && styles.links
          }`}
        >
          <a
            href={
              "https://drive.google.com/file/d/1Sj9AqCPn143l5Iys1gehYlJSsazwGLvm/view?usp=sharing"
            }
            target="_blank"
            rel="noreferrer"
            className="-rotate-90 font-medium tracking-[0.2em] text-xs -mb-3 text-[#868e96] hover:text-[#f1f3f5] duration-300 ease-in-out hover:scale-110 underline underline-offset-8 decoration-[#fcc419]"
          >
            RESUME
          </a>
          <a
            href={"https://github.com/LeoJuat"}
            target="_blank"
            rel="noreferrer"
            className="-rotate-90 font-medium tracking-[0.2em] text-xs text-[#868e96] hover:text-[#f1f3f5] duration-300 ease-in-out hover:scale-110 underline underline-offset-8 decoration-[#fcc419]"
          >
            GITHUB
          </a>
          <a
            href={"https://www.linkedin.com/in/leo-juat/"}
            target="_blank"
            rel="noreferrer"
            className="-rotate-90 font-medium tracking-[0.2em] text-xs text-[#868e96] hover:text-[#f1f3f5] duration-300 ease-in-out hover:scale-110 underline underline-offset-8 decoration-[#fcc419]"
          >
            LINKEDIN
          </a>
        </div>
      </section>
    </>
  );
};

export default Main;
