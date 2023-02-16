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
    <div className="text-gray-500 flex flex-col sm:justify-center sm:flex-row p-5 sm:py-10 sm:px-10 h-90vh">
        <div className="w-full sm:w-2/3 flex flex-col ">
            <p className="text-xl mt-5 mb-3 text-teal">Hi, my name is</p>
            <h1 className="text-3xl sm:text-7xl font-black mb-3 text-gray-700">Vinay Selukar.</h1>
            <h1 className="text-3xl sm:text-7xl font-black mb-3 text-gray-500">I build things for the web.</h1>
            <p className="text-xl w-full sm:w-1/2 mb-3 text-gray-500">A passionate web developer specializing in Frontend development, always looking forward to contribute skills and knowledge and learn along the way.</p>
            <div className="flex flex-row">
                <Link target={"_blank"} href=""><Image alt="github" className="mr-3 transform transition duration-100 hover:scale-110" height={30} width={30} src={github}></Image></Link>
                <Link target={"_blank"} href="https://www.instagram.com/vinayselukar/"><Image alt="instagram" className="mx-3 transform transition duration-100 hover:scale-110" height={30} width={30} src={instagram}></Image></Link>
                <Link target={"_blank"} href=""><Image alt="twitter" className="mx-3 transform transition duration-100 hover:scale-110" height={30} width={30} src={twitter}></Image></Link>
                <Link target={"_blank"} href=""><Image alt="linkedin" className="mx-3 transform transition duration-100 hover:scale-110" height={30} width={30} src={linkedin}></Image></Link>
            </div>
        </div>
        
    </div>
    </Layout>
    </>
}
export default About;