import React from "react";
import Image from "next/image";
import Link from "next/link";
import instagram from "../../public/icons/instagram.png"
import github from "../../public/icons/github.png"
import twitter from "../../public/icons/twitter.png"
import linkedin from "../../public/icons/linkedin.png"
import Layout from "./Layout";
const About=()=>{
    return<>
    <Layout>
    <div className="text-gray-500 flex flex-col sm:h-70vh sm:mt-10">
        <div className="w-full flex flex-col ">
            <p className="text-xl mt-5 mb-3 text-teal">Hi, my name is</p>
            <h1 className="text-3xl sm:text-7xl font-black mb-3 text-gray-200">Vinay Selukar.</h1>
            <h1 className="text-3xl sm:text-7xl font-black mb-3 text-gray-400">I build things for the web.</h1>
            <p className="text-xl w-full sm:w-1/2 mb-3 text-gray-500">A passionate web developer specializing in Frontend development, always looking forward to contribute skills and knowledge and learn along the way.</p>
            <div className="flex flex-row">
                <Link target={"_blank"} href="https://github.com/Vinayselukar21"><Image alt="github" className="mr-3 invert transform transition duration-100 hover:scale-110" height={30} width={30} src={github}></Image></Link>
                <Link target={"_blank"} href="https://www.instagram.com/vinayselukar/"><Image alt="instagram" className="mx-3 invert transform transition duration-100 hover:scale-110" height={30} width={30} src={instagram}></Image></Link>
                <Link target={"_blank"} href="https://twitter.com/Vinayselukar21"><Image alt="twitter" className="mx-3 invert transform transition duration-100 hover:scale-110" height={30} width={30} src={twitter}></Image></Link>
                <Link target={"_blank"} href="https://www.linkedin.com/in/vinayselukar/"><Image alt="linkedin" className="mx-3 invert transform transition duration-100 hover:scale-110" height={30} width={30} src={linkedin}></Image></Link>
            </div>
            <div className="my-10">
            <Link target={"_blank"} href="https://drive.google.com/file/d/1PAauRSEI9zx3NAjlTZZ9byNoUeMUvVY4/view?usp=share_link" className="py-3 px-5 mr-10 border-2 border-teal rounded w-32 text-center text-teal hover:bg-teal hover:text-back-col">Resume</Link>
            <Link target={"_blank"} href="mailto:vselukar2102@gmail.com" className="py-3 px-5  border-2 border-teal rounded w-32 text-center text-teal hover:bg-teal hover:text-back-col">Contact</Link>
            </div>
        </div>
    </div>
    </Layout>
    </>
}
export default About;