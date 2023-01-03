import React from "react";
import { useInView } from "react-intersection-observer";

import styles from "./Main.module.css";

const Main = ({ mainRef }) => {
  const { ref: helloRef, inView: helloIsIntersecting } = useInView();
  const { ref: waveRef, inView: waveIsIntersecting } = useInView();
  const { ref: introRef, inView: introIsIntersecting } = useInView();

  return (
    <>
      <section
        ref={mainRef}
        className="flex flex-col justify-center text-[#f1f3f5] w-3/4 mx-auto py-64 h-[100.5vh]"
      >
        <h3
          ref={helloRef}
          className={`text-base text-[#868e96] tracking-[0.2em] ${
            helloIsIntersecting && styles.hello
          }`}
        >
          <span className="text-xl"> ~ </span> HELLO WORLD
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
          className={`text-6xl w-4/6 font-PT mt-7 ${
            introIsIntersecting && styles.intro
          }`}
        >
          My name is Leo Juat, <br /> and I am a <br />
          <span className="text-[#fcc419] underline">Front-End Developer.</span>
        </h1>
        <div className="flex flex-col gap-20 absolute right-5 pt-9 transition-all">
          <button className="rotate-90 font-medium tracking-[0.2em] text-xs text-[#868e96] hover:text-[#f1f3f5] duration-300 ease-in-out">
            LINKEDIN
          </button>
          <button className="rotate-90 font-medium tracking-[0.2em] text-xs text-[#868e96] hover:text-[#f1f3f5] duration-300 ease-in-out">
            GITHUB
          </button>
        </div>
      </section>
    </>
  );
};

export default Main;
