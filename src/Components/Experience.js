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
        <div className="flex flex-col flex-wrap gap-8">
          {experience.map((item) => (
            <div className="w-full sm:w-full md:w-full lg:pl-2 lg:pr-2 border border-teal rounded-xl">
              <div className="m-h-64 p-1 ">
                <div className="p-4 h-auto flex flex-col">
                  <div className="md:flex justify-between">
                    <div className="flex gap-3 items-center">
                      <Image
                        src={item.companyIcon}
                        height={90}
                        width={90}
                        alt="company_logo"
                        className="h-12 w-12"
                      />
                      <div className="my-1">
                        <h5 className="text-white md:text-2xl font-bold leading-none ">
                          {item.companyName}
                        </h5>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-2 items-center text-white text-xs md:text-md font-bold leading-none mt-3 ">
                        <div>{item.type},</div>
                        <div>{item.country}</div>
                        <div className="mx-2 border-4 border-teal rounded-full h-1 w-1 "></div>
                        <div className="text-teal">
                          {item.joining} - {item.leaving}
                        </div>
                      </div>
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
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-white"> &#123;&#125;</span>
                    {item.techStack.map((tech) => (
                      <span className="text-md text-teal font-light">
                        {tech + "  "}
                      </span>
                    ))}
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
