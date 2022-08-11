import React from "react";

interface Props {
   title: string
   image: string
};
export const CardComponent = (props: Props)=>{
    return (
       <section className="hover:scale-110 transition duration-300 my-2 shadow-lg bg-black">
        <img src={props.image} alt="" className="w-20 mx-auto bg-white"/>
        <h2 className="my-4 text-white">{props.title}</h2>
       </section>
    )
}