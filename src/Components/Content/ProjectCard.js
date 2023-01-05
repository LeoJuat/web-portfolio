import { Card } from "@material-tailwind/react";
import { useInView } from "react-intersection-observer";
import Slides from "./Slides";
import styles from "./ProjectCard.module.css";

export default function ProjectCard() {
  const { ref: cardRef, inView: cardIsIntersecting } = useInView();

  return (
    <div className={`${cardIsIntersecting && styles.card}`}>
      <Card
        ref={cardRef}
        className={`pt-10 bg-transparent shadow-none scale-95`}
      >
        <h2 className="text-[#fcc419] tracking-widest text-xs mt-3">
          Featured Project
        </h2>
        <h1 className="text-[#f1f3f5] tracking-wider text-3xl font-bold mt-2">
          TRACKr
        </h1>
        <h2 className="text-[#868e96] text-base tracking-wider mb-5">
          React <span className="text-[#fcc419] text-lg">|</span> Tailwind CSS{" "}
          <span className="text-[#fcc419] text-lg">|</span> Material UI{" "}
          <span className="text-[#fcc419] text-lg">|</span> Firebase{" "}
          <span className="text-[#fcc419] text-lg">|</span> API{" "}
        </h2>
        <Slides cardIsIntersecting={cardIsIntersecting} />
      </Card>
      <div className={`flex gap-5 transition-all pl-8`}>
        <a
          href={"https://trackr-production.web.app/"}
          target="_blank"
          rel="noreferrer"
          className="px-2 py-2 rounded-lg shadow-sm bg-[#fcc419] hover:scale-105 duration-200 ease-in-out shadow-[#fcc419] hover:bg-[#dcae22] text-[#f1f3f5] font-semibold"
        >
          Live website
        </a>
        <a
          href={"https://github.com/LeoJuat/TRACKr-reactjs"}
          target="_blank"
          rel="noreferrer"
          className="px-2 py-2 rounded-lg shadow-sm bg-[#fcc419] hover:scale-105 duration-200 ease-in-out shadow-[#fcc419] hover:bg-[#dcae22] text-[#f1f3f5] font-semibold"
        >
          Source code
        </a>
      </div>
    </div>
  );
}
