import Image from "next/image";
import { aboutMe } from "@/Data";

const AboutMe = () => {
  return (
    <div className="w-full flex flex-col sm:h-screen" id="aboutMe ">
      <h1 className="text-3xl sm:text-5xl text-gray-300 font-black my-5 border-b border-teal pb-5 ">
        About Me.
      </h1>
      <div className="flex flex-col sm:flex-row px-5">
        <div className="w-3/4 sm:w-1/3 md:w-1/2 lg:w-1/3 2xl:w-1/2 ">
          <div className="h-[300px] w-[300px] relative rounded-full bg-teal ">
            <Image
              height={300}
              width={300}
              src={aboutMe.myImage}
              className=" absolute bottom-0 right-6  mx-auto"
            ></Image>
          </div>
        </div>
        <div className="w-full text-center sm:text-left sm:pl-10 flex flex-col my-5 sm:my-10">
          <p className="text-xl w-full sm:w-4/5 mb-3 text-gray-300">
            {aboutMe.description}
          </p>
          <p className="text-xl w-full sm:w-4/5 mb-3 text-gray-300">
            {aboutMe.description2}
          </p>
          <div className="flex flex-row flex-wrap justify-center sm:justify-start">
            {aboutMe.skills.map((skill) => (
              <div>
                <Image
                  alt="html"
                  className="mx-3 my-3 invert transform transition duration-100 hover:scale-110 "
                  height={50}
                  width={50}
                  src={skill.icon}
                ></Image>
                <p className="text-center text-gray-300 text-xs">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
