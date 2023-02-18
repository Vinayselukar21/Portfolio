import Image from "next/image";
import Me from "../../public/Images/me.jpg"
const AboutMe = () => {
  return (
    <div className="w-full flex flex-col sm:h-screen">
      <h1 className="text-3xl sm:text-5xl text-gray-300 font-black my-5 border-b border-teal pb-5 ">
        About Me.
      </h1>
      <div className="flex flex-col sm:flex-row ">
        <Image height={300} width={300} src={Me} className="w-1/3 rounded"></Image>
        <p className="w-2/3 text-xl text-gray-400 px-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex maiores, vitae vero adipisci tempora veritatis molestias eius fuga consequatur corrupti, esse eveniet doloribus, neque distinctio non delectus repellendus omnis eos pariatur ad! Porro iure quibusdam adipisci eum magni ipsa minima amet voluptate vitae iusto vel rerum officia, reiciendis at tempore</p>
      </div>
    </div>
  );
};
export default AboutMe;
