import React from "react";

import Header from "./Components/Header/Header";
import Main from "./Components/Content/Main";
import Projects from "./Components/Content/Projects";
import { useInView } from "react-intersection-observer";
import About from "./Components/Content/About";
import Contact from "./Components/Content/Contact";

function App() {
  const { ref: mainRef, inView: mainIsIntersecting } = useInView();
  const { ref: projectsRef, inView: projectsIsIntersecting } = useInView();
  const { ref: aboutRef, inView: aboutIsIntersecting, entry } = useInView();
  const { ref: contactRef, inView: contactIsIntersecting } = useInView();

  console.log(entry);
  return (
    <>
      <Header
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
