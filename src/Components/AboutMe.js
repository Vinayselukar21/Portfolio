import Image from "next/image";
import Me from "../../public/Images/me.jpg"
import aboutMe from "@/Data";
const AboutMe = () => {
  return (
    <div className="w-full flex flex-col sm:h-screen" id="aboutMe">
      <h1 className="text-3xl sm:text-5xl text-gray-300 font-black my-5 border-b border-teal pb-5 ">
        About Me.
      </h1>
      <div className="flex flex-col sm:flex-row ">
        <Image height={300} width={300} src={Me} className="w-1/3 rounded"></Image>
        <p className="w-2/3 text-xl text-gray-400 px-10 text-justify">{aboutMe.description}</p>
      </div>
    </div>
  );
};
export default AboutMe;
