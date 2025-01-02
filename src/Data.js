import myImage from "../public/Images/me.png";
import html from "../public/Images/html.png";
import css from "../public/Images/css.png";
import javascript from "../public/Images/js.png";
import react from "../public/Images/react.png";
import github from "../public/Images/git.png";
import typescript from "../public/Images/typescript.png";
import node from "../public/Images/nodejs.png";
import express from "../public/Images/expressjs.png";
import next from "../public/Images/next.png";
import intelliconnect_logo from "../public/Images/intelliconnect_logo.jpg";

const resumeLink =
  "https://drive.google.com/file/d/1-Jfp4LNK9Qq-TiW9kzl5cODakfF1TA7J/view?usp=sharing";

export const navigation = [
  { name: "About Me", target: "", href: "/#aboutMe", current: false },
  { name: "Experience", target: "", href: "/#experience", current: false },
  { name: "Projects", target: "", href: "/#projects", current: false },
  {
    name: "Resume",
    target: "_blank",
    href: resumeLink,
    current: false,
  },
  { name: "Contact", target: "", href: "/#contact", current: false },
];

export const about = {
  name: " Vinay Selukar",
  description:
    "Frontend developer with full-stack aspirations, eager to contribute skills and knowledge and learn along the way.",
  resumeLink: resumeLink,
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
      name: "React.js",
      icon: react,
    },
    {
      name: "Next.js",
      icon: next,
    },
    {
      name: "Node.js",
      icon: node,
    },
    {
      name: "Express.js",
      icon: express,
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
    title: "Vomegle",
    tech: ["React.js,","Tailwind,","WebRTC,","Nodejs,","Socket.io,", "Typescript"],
    desc: "Developed Vomegle, a video chat app clone of Omegle, using WebRTC with a signaling server built in Node.js, Express, and Socket.io. Implemented in TypeScript, hosting the frontend on Vercel and backend on Render for seamless performance.",
    link: "https://vomegle.vercel.app/",
    repoLink: "https://github.com/Vinayselukar21/vomegle",
  },
  {
    title: "Typist",
    tech: ["Next.js,", "Tailwind"],
    desc: "Typist offers users a platform to enhance their typing speed and accuracy through interactive exercises. Track your progress, improve your skills, and master the art of typing effortlessly.",
    link: "https://typist-t.vercel.app/",
    repoLink: "https://github.com/Vinayselukar21/Typist",
  }
];

export const experience = [
  {
    companyName: "Intelliconnect Technologies",
    companyIcon: intelliconnect_logo,
    position: "Associate Software Developer",
    techStack: ["Next.js,", "React.js,", "Tailwind"],
    country: "India",
    type: "Remote",
    joining: "March 2023",
    leaving: "Present",
    desc: [
      "I played a key role in enhancing four major projects: an admin tool, order-taking system, ERP, and profit tracker.",
      "Crafted over 20 sleek and functional pages using Next.js, prioritizing seamless responsiveness across devices.",
      "Leveraged React Query to deliver dynamic, real-time updates and streamline data management effectively.",
      "Highlighted Redux/Zustand usage for maintaining scalable and performant state management.",
    ],
  },
];
