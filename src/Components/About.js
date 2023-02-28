import React from "react";
import Image from "next/image";
import Link from "next/link";
import {about} from "@/Data"
import instagram from "../../public/icons/instagram.png"
import github from "../../public/icons/github.png"
import twitter from "../../public/icons/twitter.png"
import linkedin from "../../public/icons/linkedin.png"

const About=()=>{
    return<>
    <div className="text-gray-500 flex flex-col h-80vh sm:h-screen pt-10">
        <div className="w-full flex flex-col ">
            <p className="text-sm sm:text-xl mt-5 mb-3 text-teal">Hi, my name is</p>
            <h1 className="text-3xl sm:text-7xl md:text-5xl lg:text-7xl font-black mb-2 sm:mb-3 text-gray-200">{about.name}</h1>
            <h1 className="text-2xl sm:text-7xl md:text-5xl lg:text-7xl font-black mb-2 sm:mb-3 text-gray-400">I build things for the web.</h1>
            <p className="text-lg w-full sm:w-1/2 md:w-3/4 text-gray-400">{about.description}</p>
            <div className="flex flex-row my-5">
                <Link target={"_blank"} href={about.github} ><Image alt="github" className="mr-3 invert transform transition duration-100 hover:scale-110" height={30} width={30} src={github}></Image></Link>
                <Link target={"_blank"} href={about.instagram} ><Image alt="instagram" className="mx-3 invert transform transition duration-100 hover:scale-110" height={30} width={30} src={instagram}></Image></Link>
                <Link target={"_blank"} href={about.twitter} ><Image alt="twitter" className="mx-3 invert transform transition duration-100 hover:scale-110" height={30} width={30} src={twitter}></Image></Link>
                <Link target={"_blank"} href={about.linkedIn} ><Image alt="linkedin" className="mx-3 invert transform transition duration-100 hover:scale-110" height={30} width={30} src={linkedin}></Image></Link>
            </div>
            <div className="my-5">
            <Link target={"_blank"} href={about.resumeLink} className="py-3 px-5 mr-10 border-2 border-teal rounded w-32 text-center text-teal hover:bg-teal hover:text-back-col">Resume</Link>
            <Link target={"_blank"} href={about.mailTo} className="py-3 px-5  border-2 border-teal rounded w-32 text-center text-teal hover:bg-teal hover:text-back-col">Contact</Link>
            </div>
        </div>
    </div>
    </>
}
export default About;