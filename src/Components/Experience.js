import { experience } from "@/Data";
import Image from "next/image";
import React from "react";

export const Experience = () => {
  return (
    <>
      <div className="w-full flex flex-col mb-20 sm:h-screen" id="experience">
        <h1 className="text-3xl sm:text-5xl text-gray-300 font-black my-5 border-b border-teal pb-5 ">
          Experience
        </h1>
        <div className="flex flex-wrap">
          {experience.map((item) => (
            <div className="w-full sm:w-full md:w-full lg:w-1/2  lg:pl-2 lg:pr-2 my-2 drop-shadow-2xl rounded">
              <div className="bg-gray-800   m-h-64 p-1 transform hover:scale-105 transition duration-300 rounded">
                <div className="p-4 h-auto bg-gray-800 flex flex-col">
                  <div className="flex gap-3 items-center">
                    <Image
                      src={item.companyIcon}
                      height={90}
                      width={90}
                      alt="company_logo"
                    />
                    <div className="my-1">
                      <h5 className="text-white text-2xl font-bold leading-none ">
                        {item.companyName}
                      </h5>
                      {item.techStack.map((tech) => (
                        <span className="text-md text-teal font-light">
                          {tech + "  "}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <ul className="text-s px-5 my-5 text-gray-300 leading-none list-disc">
                      {item.desc.map((desc) => (
                        <li>
                          <p className="my-2 leading-6 ">{desc}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
