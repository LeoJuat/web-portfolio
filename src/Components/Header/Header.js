import React from "react";

import styles from "./Header.module.css";

const Header = ({
  mainIsIntersecting,
  projectsIsIntersecting,
  aboutIsIntersecting,
  contactIsIntersecting,
}) => {
  const logoHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projectsHandler = () => {
    window.scrollTo({
      top: window.innerWidth > 640 ? 910 : 750,
      behavior: "smooth",
    });
  };

  const aboutHandler = () => {
    window.scrollTo({
      top: window.innerWidth > 640 ? 2710 : 1705,
      behavior: "smooth",
    });
  };

  const contactHandler = () => {
    window.scrollTo({ top: 4000, behavior: "smooth" });
  };

  console.log(window.innerWidth);
  return (
    <header className="flex w-full bg-[#202124fd] transition-all fixed z-10">
      <button
        className={`h-20 w-full font-medium tracking-[0.2em] text-left pl-2 sm:pl-10 text-xs text-[#f1f3f5] duration-200 ease-in-out border-r border-[#353738] hover:bg-[#353738] ${
          mainIsIntersecting && styles.active
        }`}
        onClick={logoHandler}
      >
        <span className="text-[#fcc419] font-Inconsolata text-sm">01.</span>{" "}
        JUATLEO
      </button>
      <button
        className={`h-20 w-full font-medium tracking-[0.2em] text-left pl-2 sm:pl-10 text-xs text-[#f1f3f5] duration-200 ease-in-out border-r border-[#353738] hover:bg-[#353738] ${
          projectsIsIntersecting && !mainIsIntersecting && styles.active
        }`}
        onClick={projectsHandler}
      >
        <span className="text-[#fcc419] font-Inconsolata text-sm">02.</span>{" "}
        PROJECTS
      </button>
      <button
        className={`h-20 w-full font-medium tracking-[0.2em] text-left pl-2 sm:pl-10 text-xs text-[#f1f3f5] duration-200 ease-in-out border-r border-[#353738] hover:bg-[#353738] ${
          aboutIsIntersecting && !projectsIsIntersecting && styles.active
        }`}
        onClick={aboutHandler}
      >
        <span className="text-[#fcc419] font-Inconsolata text-sm">03.</span>{" "}
        ABOUT
      </button>
      <button
        className={`h-20 w-full font-medium tracking-[0.2em] text-left pl-2 sm:pl-10 text-xs text-[#f1f3f5] duration-200 ease-in-out border-r border-[#353738] hover:bg-[#353738] ${
          contactIsIntersecting && !aboutIsIntersecting && styles.active
        }`}
        onClick={contactHandler}
      >
        <span className="text-[#fcc419] font-Inconsolata text-sm">04.</span>{" "}
        CONTACT
      </button>
    </header>
  );
};

export default Header;
