import React from "react";

import Header from "./Components/Header/Header";
import Main from "./Components/Content/Main";
import Projects from "./Components/Content/Projects";
import { useInView } from "react-intersection-observer";
import About from "./Components/Content/About";
import Contact from "./Components/Content/Contact";

function App() {
  const { ref: mainRef, inView: mainIsIntersecting } = useInView();
  const {
    ref: projectsRef,
    inView: projectsIsIntersecting,
    entry: projectsEntry,
  } = useInView();
  const {
    ref: aboutRef,
    inView: aboutIsIntersecting,
    entry: aboutEntry,
  } = useInView();
  const {
    ref: contactRef,
    inView: contactIsIntersecting,
    entry: contactEntry,
  } = useInView();

  return (
    <>
      <Header
        projectsEntry={projectsEntry}
        aboutEntry={aboutEntry}
        contactEntry={contactEntry}
        mainIsIntersecting={mainIsIntersecting}
        projectsIsIntersecting={projectsIsIntersecting}
        aboutIsIntersecting={aboutIsIntersecting}
        contactIsIntersecting={contactIsIntersecting}
      />
      <Main mainRef={mainRef} />
      <Projects projectsRef={projectsRef} />
      <About aboutRef={aboutRef} aboutIsIntersecting={aboutIsIntersecting} />
      <Contact
        contactRef={contactRef}
        contactIsIntersecting={contactIsIntersecting}
      />
    </>
  );
}

export default App;
