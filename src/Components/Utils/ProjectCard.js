import { Card } from "@material-tailwind/react";
import { useInView } from "react-intersection-observer";
import Slides from "./Slides";
import styles from "./ProjectCard.module.css";

export default function ProjectCard() {
  const { ref: cardRef, inView: cardIsIntersecting } = useInView();
  console.log(cardIsIntersecting);
  return (
    <div className={`${cardIsIntersecting && styles.card}`}>
      <Card ref={cardRef} className={`pt-16 bg-[#202124]`}>
        <Slides cardIsIntersecting={cardIsIntersecting} />
      </Card>
      <div className="flex gap-5 mt-5 transition-all">
        <a
          href={"https://trackr-production.web.app/"}
          target="_blank"
          rel="noreferrer"
          className="px-2 py-2 rounded-lg shadow-sm bg-blue-500 hover:scale-105 duration-200 ease-in-out shadow-blue-500 hover:bg-blue-400 text-[#f1f3f5]"
        >
          Live website
        </a>
        <a
          href={"https://github.com/LeoJuat/TRACKr-reactjs"}
          target="_blank"
          rel="noreferrer"
          className="px-2 py-2 rounded-lg shadow-sm bg-blue-500 hover:scale-105 duration-200 ease-in-out shadow-blue-500 hover:bg-blue-400 text-[#f1f3f5]"
        >
          Source code
        </a>
      </div>
    </div>
  );
}
