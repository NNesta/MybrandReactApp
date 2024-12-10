import React from "react";
import { usePointerPosition } from "../../hooks/usePositionPointer";
interface Props {
  title: string;
  image: string;
  url?: string;
}
const WorkCard = (props: Props) => {
  const { x, y } = usePointerPosition();
  return (
    <a
      href={props.url || "#"}
      target="_blank"
      rel="noreferrer"
      className="relative group w-fit"
    >
      <span className="text-5xl font-bold text-white tracking-wider">
        {props.title}
      </span>

      <section
        style={{
          position: "absolute",
          pointerEvents: "none",
          left: x,
          top: y,
          width: 800,
        }}
        className="shadow-lg shadow-[#040c16]  mx-auto object-contain content-div group-hover:block hidden z-50"
      >
        <img alt={props.title} src={props.image} />
      </section>
    </a>
  );
};
export default WorkCard;
