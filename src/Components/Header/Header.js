import React from "react";

import styles from "./Header.module.css";

const Header = ({
  mainIsIntersecting,
  projectsIsIntersecting,
  aboutIsIntersecting,
}) => {
  const buttonClickedHandler = () => {
    console.log("BUTTON CLICKED");
  };

  const logoHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projectsHandler = () => {
    window.scrollTo({ top: 900, behavior: "smooth" });
  };

  const aboutHandler = () => {
    window.scrollTo({ top: 1900, behavior: "smooth" });
  };

  return (
    <header className="flex w-full bg-[#202124fd] transition-all fixed z-10">
      <button
        className={`h-20 w-full font-medium tracking-[0.2em] text-left pl-10 text-xs text-[#f1f3f5] duration-200 ease-in-out border-r border-[#353738] hover:bg-[#353738] ${
          mainIsIntersecting && styles.active
        }`}
        onClick={logoHandler}
      >
        JUATLEO
      </button>
      <button
        className={`h-20 w-full font-medium tracking-[0.2em] text-left pl-10 text-xs text-[#f1f3f5] duration-200 ease-in-out border-r border-[#353738] hover:bg-[#353738] ${
          projectsIsIntersecting && !mainIsIntersecting && styles.active
        }`}
        onClick={projectsHandler}
      >
        PROJECTS
      </button>
      <button
        className={`h-20 w-full font-medium tracking-[0.2em] text-left pl-10 text-xs text-[#f1f3f5] duration-200 ease-in-out border-r border-[#353738] hover:bg-[#353738] ${
          aboutIsIntersecting && !projectsIsIntersecting && styles.active
        }`}
        onClick={aboutHandler}
      >
        ABOUT
      </button>
      <button
        className={`h-20 w-full font-medium tracking-[0.2em] text-left pl-10 text-xs text-[#f1f3f5] duration-200 ease-in-out border-r border-[#353738] hover:bg-[#353738]`}
        onClick={buttonClickedHandler}
      >
        CONTACT
      </button>
    </header>
  );
};

export default Header;
