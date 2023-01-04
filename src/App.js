import React from "react";

import Header from "./Components/Header/Header";
import Main from "./Components/Content/Main";
import Projects from "./Components/Content/Projects";
import { useInView } from "react-intersection-observer";
import About from "./Components/Content/About";

function App() {
  const { ref: mainRef, inView: mainIsIntersecting } = useInView();
  const { ref: projectsRef, inView: projectsIsIntersecting } = useInView();
  const { ref: aboutRef, inView: aboutIsIntersecting } = useInView();

  return (
    <>
      <Header
        mainIsIntersecting={mainIsIntersecting}
        projectsIsIntersecting={projectsIsIntersecting}
        aboutIsIntersecting={aboutIsIntersecting}
      />
      <Main mainRef={mainRef} />
      <Projects projectsRef={projectsRef} />
      <About aboutRef={aboutRef} aboutIsIntersecting={aboutIsIntersecting} />
    </>
  );
}

export default App;
