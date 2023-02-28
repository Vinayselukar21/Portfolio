import Image from "next/image";
import { aboutMe } from "@/Data";

const AboutMe = () => {

  return (
    <div className="w-full flex flex-col sm:h-screen" id="aboutMe ">
      <h1 className="text-3xl sm:text-5xl text-gray-300 font-black my-5 border-b border-teal pb-5 ">
        About Me.
      </h1>
      <div className="flex flex-col sm:flex-row">
        <Image height={300} width={300} src={aboutMe.myImage} className="w-3/4 sm:w-1/3 md:w-1/2 lg:w-1/3 rounded-2xl mx-auto"></Image>
        <p className="sm:w-2/3 text-xl text-gray-400 py-10 sm:px-10">{aboutMe.description}</p>
      </div>
    </div>
  );
};
export default AboutMe;
