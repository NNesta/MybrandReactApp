import React from "react";
interface Props {
   title: string
   image: string
   github: string
   url: string
};
const WorkCard = (props: Props)=>{
    return (
       <section style={{backgroundImage: `url(${props.image})`}} className="shadow-lg shadow-[#040c16] group w-[15rem] h-[15rem] rounded-md flex justify-center items-center mx-auto content-div">
          {/* Hover effect */}
          <div className="opacity-0 group-hover:opacity-100">
          <span className="text-2xl font-bold text-white tracking-wider">
           {props.title}
          </span>
          <div className="pt-8 text-center">
             <a href={props.url}>
                <button className="button">Demo</button>
             </a>
             <a href={props.github}>
                <button className="button">Code</button>
             </a>
             </div>
          </div>
       </section>
    )
}
export default WorkCard;