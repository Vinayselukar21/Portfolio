import Lottie from "lottie-react";
import Image from "next/image";
import Codeanimation from "../../public/Animations/about-sec-lottie.json";
import html from "../../public/Images/html.png";
import css from "../../public/Images/css.png";
import javascript from "../../public/Images/js.png";
import react from "../../public/Images/react.png";
import github from "../../public/Images/git.png";
import { skills } from "@/Data";

const Skills = () => {
  return (
    <>
      <div className="flex flex-col w-full sm:h-screen my-10 ">
      <h1 className="text-3xl sm:text-5xl font-black text-gray-300 border-b border-teal pb-5 mb-5 ">
              What i do.
            </h1>
        <div className="flex flex-col sm:flex-row w-full">
          <div className="w-full sm:w-1/2 flex justify-center sm:m-0">
            <Lottie
              className="w-3/4 2xl:w-1/2"
              animationData={Codeanimation}
              loop={true}
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col my-5 sm:my-10">
            
            <p className="text-xl w-full sm:w-4/5 mb-3 text-gray-400">
              {skills.description}
            </p>
            <div className="flex flex-row flex-wrap justify-center sm:justify-start">
              <div>
                <Image
                  alt="html"
                  className="mx-3 my-3 invert transform transition duration-100 hover:scale-110 "
                  height={50}
                  width={50}
                  src={html}
                ></Image>
                <p className="text-center text-gray-400 text-xs">html</p>
              </div>
              <div>
                <Image
                  alt="css"
                  className="mx-3 my-3 invert transform transition duration-100 hover:scale-110"
                  height={50}
                  width={50}
                  src={css}
                ></Image>
                <p className="text-center text-gray-400 text-xs">css</p>
              </div>
              <div>
                <Image
                  alt="javascript"
                  className="mx-3 my-3 invert transform transition duration-100 hover:scale-110"
                  height={50}
                  width={50}
                  src={javascript}
                ></Image>
                <p className="text-center text-gray-400 text-xs">javascript</p>
              </div>
              <div>
                <Image
                  alt="react"
                  className="mx-3 my-3 invert transform transition duration-100 hover:scale-110"
                  height={50}
                  width={50}
                  src={react}
                ></Image>
                <p className="text-center text-gray-400 text-xs">react</p>
              </div>
              <div>
                <Image
                  alt="github"
                  className="mx-3 my-3 invert transform transition duration-100 hover:scale-110"
                  height={50}
                  width={50}
                  src={github}
                ></Image>
                <p className="text-center text-gray-400 text-xs">github</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
