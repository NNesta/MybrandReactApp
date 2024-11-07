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
          width: 400,
        }}
        className="shadow-lg shadow-[#040c16]  mx-auto object-contain content-div group-hover:block hidden z-50"
      >
        <img alt={props.title} src={props.image} />
        {/* Hover effect */}
        <div>
          {/* <div className="pt-8 text-center z-10">
          <a href={props.url}>
            <button className="button">Demo</button>
          </a>
          <a href={props.github}>
            <button className="button">Code</button>
          </a>
        </div> */}
        </div>
      </section>
    </a>
  );
};
export default WorkCard;
