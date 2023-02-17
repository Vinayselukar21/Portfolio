import Layout from "./Layout";
import Link from "next/link";

const projects = [
  {
    title: "DeCarbonUs",
    tech: ["Next.js,", "React.js,", "Tailwind"],
    desc: "DeCarbonUs is an App-based solution to help fight climate change by facilitating individuals to reduce and control their carbon footprint.",
    link: "https://decarbonus.co",
  },
  {
    title: "Food Order App",
    tech: ["React.js,", "HTML,", "CSS"],
    desc: "DeCarbonUs is an App-based solution to help fight climate change by facilitating individuals to reduce and control their carbon footprint.",
    link: "https://github.com/Vinayselukar21/Food-Order-Web-App",
  },
  {
    title: "NewsiFy",
    tech: ["React.js,", "HTML,", "CSS"],
    desc: "NewsiFy aims to provide a well organized and category divided news feed.",
    link: "https://github.com/Vinayselukar21/NewsApp-React.js",
  }
];
const Projects = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col">
        <h1 className="text-3xl sm:text-7xl text-gray-400 font-black my-5">
          Projects
        </h1>
        <div className="flex flex-row flex-wrap">
          {projects.map((item) => (
            <div class="w-1/3 lg:pl-2 lg:pr-2 my-2">
              <div class="bg-gray-600  m-h-64 p-1 transform hover:scale-105  hover:bg-teal transition duration-300">
                {/* <figure class="mb-2">
               <img
                 src="https://srv-cdn.onedio.com/store/bf2cbc886120f284ef46fd92a48f5fb58c62e6a50fbdf8fa796d057dd0ddc242.png"
                 alt=""
                 class="h-64 ml-auto mr-auto"
               />
             </figure> */}
                <div class="p-4 h-72 bg-back-col flex flex-col">
                  <div>
                    <h5 class="text-white text-2xl font-bold leading-none">
                      {item.title}
                    </h5>
                    <div className="my-1">
                      {item.tech.map((tech) => (
                        <span class="text-md text-teal font-light">
                          {tech + "  "}
                        </span>
                      ))}
                    </div>
                    <span class="text-s text-gray-400 leading-none">
                      {item.desc}
                    </span>
                  </div>
                  <div class="flex items-center">
                    <a
                    target={"_blank"}
                      href={item.link}
                      class="rounded bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none py-2 px-5  flex ml-auto transition duration-300 mt-5"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Projects;
