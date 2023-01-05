import { Card } from "@material-tailwind/react";
import { useInView } from "react-intersection-observer";
import styles from "./WebProjectCard.module.css";

export default function WebProjectCard() {
  const { ref: cardRef, inView: cardIsIntersecting } = useInView();

  return (
    <div className={`${cardIsIntersecting && styles.webPortfolio}`}>
      <Card ref={cardRef} className={`pt-12 bg-[#202124] scale-95`}>
        <h2 className="text-[#fcc419] tracking-widest text-xs mt-3">
          Featured Project
        </h2>
        <h1 className="text-[#f1f3f5] tracking-wider text-3xl font-bold mt-2">
          Portfolio website
        </h1>
        <h2 className="text-[#868e96] text-base tracking-wider mb-5">
          React <span className="text-[#fcc419] text-lg">|</span> Tailwind CSS{" "}
          <span className="text-[#fcc419] text-lg">|</span> Firebase{" "}
        </h2>
        <img
          className="h-fit w-full object-cover rounded-lg shadow-lg border border-[#868e96]"
          src={require("../../imgs/website.webp")}
          alt="this portfolio website"
        />
      </Card>
      <div className="flex gap-5 transition-all pl-8 mt-1">
        <a
          href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
          target="_blank"
          rel="noreferrer"
          className="px-2 py-2 rounded-lg shadow-sm bg-[#fcc419] hover:scale-105 duration-200 ease-in-out shadow-[#fcc419] hover:bg-[#dcae22] text-[#f1f3f5]"
        >
          Live website
        </a>
        <a
          href={"https://github.com/LeoJuat/web-portfolio"}
          target="_blank"
          rel="noreferrer"
          className="px-2 py-2 rounded-lg shadow-sm bg-[#fcc419] hover:scale-105 duration-200 ease-in-out shadow-[#fcc419] hover:bg-[#dcae22] text-[#f1f3f5]"
        >
          Source code
        </a>
      </div>
    </div>
  );
}
