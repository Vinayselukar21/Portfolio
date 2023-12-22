import myImage from "../public/Images/me.png";
import html from "../public/Images/html.png";
import css from "../public/Images/css.png";
import javascript from "../public/Images/js.png";
import react from "../public/Images/react.png";
import github from "../public/Images/git.png";
import typescript from "../public/Images/typescript.png";
import next from "../public/Images/next.png";
import intelliconnect_logo from "../public/Images/intelliconnect_logo.jpg";
export const about = {
  name: " Vinay Selukar",
  description:
    "A passionate web developer specializing in Frontend development, always looking forward to contribute skills and knowledge and learn along the way.",
  resumeLink:
    "https://drive.google.com/file/d/1PAauRSEI9zx3NAjlTZZ9byNoUeMUvVY4/view?usp=share_link",
  mailTo: "mailto:vselukar2102@gmail.com",
  github: "https://github.com/Vinayselukar21",
  instagram: "https://www.instagram.com/vinayselukar/",
  linkedIn: "https://www.linkedin.com/in/vinayselukar/",
  twitter: "https://twitter.com/Vinayselukar21",
};

export const aboutMe = {
  myImage: myImage,
  description:
    " Hi, i am Vinay Selukar and I enjoy creating things you see on internet. My interest in Web Development started during the pandemic when I had nothing to do so explored React and till date it's been a good companion",
  description2: "Here are a few technologies I’ve been working with recently:",
  skills: [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "Javascript",
      icon: javascript,
    },
    {
      name: "Typescript",
      icon: typescript,
    },
    {
      name: "React.js",
      icon: react,
    },
    {
      name: "Next.js",
      icon: next,
    },
    {
      name: "Github",
      icon: github,
    },
  ],
};

export const skills = {
  description1:
    "A web developer specializing in frontend and making responsive web designs.",
};

export const projects = [
  {
    title: "DeCarbonUs",
    tech: ["Next.js,", "React.js,", "Tailwind"],
    desc: "DeCarbonUs is an App-based solution to help fight climate change by facilitating individuals to reduce and control their carbon footprint.",
    link: "https://decarbonus.co",
  },
  {
    title: "Food Order App",
    tech: ["React.js,", "HTML,", "CSS"],
    desc: "The Food Order App is designed to streamline the process of ordering food online, providing users with an intuitive interface to browse, select, and place orders seamlessly.",
    link: "https://github.com/Vinayselukar21/Food-Order-Web-App",
  },
  {
    title: "NewsiFy",
    tech: ["React.js,", "HTML,", "CSS"],
    desc: "NewsiFy aims to provide a well organized and category divided news feed.",
    link: "https://github.com/Vinayselukar21/NewsApp-React.js",
  },
];

export const experience = [
  {
    companyName: "Intelliconnect Technologies",
    companyIcon: intelliconnect_logo,
    position: "Associate Software Developer",
    techStack: ["Next.js,", "React.js,", "Tailwind"],
    desc: [
      "Used Next.js, React Query, Redux, and Zustand for robust frontend development.",
      "Showcased 20+ Next.js-designed pages emphasizing responsiveness and functionality.",
      "Demonstrated React Query's impact on real-time updates and efficient data handling.",
      "Highlighted Redux/Zustand usage for maintaining scalable and performant state management.",
    ],
  },
];
