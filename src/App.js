import React from "react";

import Header from "./Components/Header/Header";
import Main from "./Components/Content/Main";
import Projects from "./Components/Content/Projects";
import { useInView } from "react-intersection-observer";

function App() {
  const {
    ref: mainRef,
    inView: mainIsIntersecting,
    entry: mainEntry,
  } = useInView();
  const {
    ref: projectsRef,
    inView: projectsIsIntersecting,
    entry: projectsEntry,
  } = useInView();
  console.log(mainIsIntersecting);
  console.log("main", mainEntry);
  console.log("proj", projectsIsIntersecting);
  console.log("proj", projectsEntry);

  return (
    <React.Fragment>
      <Header
        mainIsIntersecting={mainIsIntersecting}
        projectsIsIntersecting={projectsIsIntersecting}
      />
      <Main mainRef={mainRef} />
      <Projects projectsRef={projectsRef} />
    </React.Fragment>
  );
}

export default App;
