import { projects } from "@/Data";
import { File, Folder, Github, Link2, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <div className="w-full flex flex-col mb-20" id="projects">
        <h1 className="text-3xl sm:text-5xl text-gray-300 font-black my-5 border-b border-teal pb-5 ">
          Some Noteworthey Projects.
        </h1>

        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((item) => (
            <div className="border border-teal rounded">
              <div className="">
                <div className="p-4 h-auto flex flex-col">
                  <div className="flex justify-between">
                    <h5 className="text-white text-2xl font-bold leading-none">
                      {item.title}
                    </h5>
                    <div className="flex flex-row items-center">
                      <Link href={item?.repoLink} target="_blank">
                        <Github size={20} className="invert mr-2" />
                      </Link>
                      <Link href={item?.link} target="_blank">
                        {item?.link !== "" && (
                          <LinkIcon size={20} className="invert mr-2" />
                        )}
                      </Link>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="mb-3">
                      <span className="text-sm text-gray-300 leading-none">
                        {item.desc}
                      </span>
                    </div>
                    <div>
                      <span className="text-white"> &#123;&#125;</span>{" "}
                      {item.tech.map((tech) => (
                        <span className="text-md text-teal font-light">
                          {tech + "  "}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full my-5 flex justify-center">
          <Link
            target={"_blank"}
            href="https://github.com/Vinayselukar21"
            className="py-3 px-5  border-2 border-teal rounded  text-center text-teal hover:bg-teal hover:text-gray-900"
          >
            Checkout GitHub for more...
          </Link>
        </div>
      </div>
    </>
  );
};
export default Projects;
