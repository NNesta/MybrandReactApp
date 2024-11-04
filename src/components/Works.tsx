import React from "react";
import WorkCard from "./cards/WorkCard";

const works = [
  {
    title: "Barefoot nomad",
    image: "/assets/barefoot.png",
    url: "https://cod-fe.vercel.app/",
    github: "https://github.com/atlp-rwanda/cod-fe",
  },
  {
    title: "Flashcard",
    image: "/assets/flashcard.png",
    url: "https://flashcard-project-fe.vercel.app/",
    github: "https://github.com/NNesta/flashcard-project-fe",
  },
  {
    title: "My brand project",
    image: "/assets/brand1.png",
    url: "https://inspiring-ride-2a0be8.netlify.app/",
    github: "https://github.com/NNesta/Nestor-brand",
  },
  {
    title: "My brand project",
    image: "/assets/portifolio.png",
    url: "https://portifolio-nnesta.vercel.app/",
    github: "https://github.com/NNesta/MybrandReactApp",
  },
  {
    title: "FreshFood Mobile app",
    image: "/assets/freshfood.png",
    url: "https://expo.dev/@ngabonziza/FreshFoodRestaurant?serviceType=classic&distribution=expo-go",
    github: "https://github.com/NNesta/FreshFoodRestaurant",
  },
];

const Works = () => {
  return (
    <div className="bg-[#375074]">
      <div
        id="works"
        className="w-full container mx-auto py-16  text-gray-200 flex justify-center items-center p-4"
      >
        <div className="w-full h-fit max-w-[1000px] flex flex-col items-center justify-center mx-auto">
          <h1 className="pt-16 border-b-4 border-teal-600">Work done before</h1>
          <div className="grid w-full gap-4 py-8 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {works.map(
              (
                work: {
                  title: string;
                  image: string;
                  url: string;
                  github: string;
                },
                index: number
              ) => (
                <WorkCard
                  key={index}
                  title={work.title}
                  image={work.image}
                  url={work.url}
                  github={work.github}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
