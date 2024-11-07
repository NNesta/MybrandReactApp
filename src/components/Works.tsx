import WorkCard from "./cards/WorkCard";
import { works } from "../utils/data";

const Works = () => {
  return (
    <div className="bg-[#375074]">
      <div id="works" className="w-full py-16  text-gray-200 container mx-auto">
        <div className="w-full h-fit flex flex-col mx-auto">
          <h1 className="pt-16 border-b-4 border-teal-600 self-center">
            SAMPLE PROJECTS
          </h1>
          <div className="flex flex-col gap-6 py-8 px-24">
            {works.map((work, index) => (
              <WorkCard
                key={index}
                title={work.title}
                image={work.image}
                url={work?.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
