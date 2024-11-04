import { SkillsCard } from "./SkillsCard";

const skillSet = [
  { title: "node js", image: "assets/nodejs.png" },
  { title: "typescript", image: "assets/ts-logo-128.png" },
  { title: "React JS", image: "assets/react.png" },
  { title: "Nest JS", image: "assets/nestjs.png" },
  { title: "Next JS", image: "assets/nextjs2.png" },
  { title: "react native", image: "assets/react.png" },
  { title: "css", image: "assets/css.png" },
  { image: "assets/tailwindcss.svg", title: "Tailwind css" },
  { image: "assets/graphql.png", title: "Graphql" },
  { image: "assets/rest-api.png", title: "rest api" },
  { image: "assets/GitHub-Mark-Light-120px-plus.png", title: "Github" },
  { image: "assets/Docker_logo_PNG15.png", title: "docker" },
  { image: "assets/postgresql.png", title: "postgresql" },
  { image: "assets/mongodb.png", title: "mongo db" },
  { image: "assets/python.png", title: "python" },
  { image: "assets/Java_logo_PNG9.png", title: "java" },
];

const Skills = () => {
  return (
    <div className="bg-[#0a192f]">
      <div
        id="skills"
        className="w-full container mx-auto  text-gray-300 flex justify-center items-center py-16"
      >
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full">
          <div className="text-center">
            <p className="pt-16 text-4xl font-bold border-b-4 border-teal-500">
              Experience
            </p>
          </div>
          <div className="grid w-full grid-cols-2 gap-4 py-8 text-center sm:grid-cols-3 lg:grid-cols-4">
            {skillSet.map(
              (name: { image: string; title: string }, index: number) => (
                <SkillsCard key={index} image={name.image} title={name.title} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
