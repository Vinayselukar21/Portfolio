import { Navbar } from "flowbite-react";
import Image from "next/image";
import Layout from "./Layout";

const Hello = () => {
  return (
    <Layout>
      <Navbar
        fluid={true}
        rounded={false}
        className="py-5"
        >
        <Navbar.Brand href="https://flowbite.com/" >
            {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
            /> */}
            {/* <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-500">
            Vinay Selukar
            </span> */}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link
            href="/navbars"
            // active={true}
            className="text-center"
            >
            Skills
            </Navbar.Link>
            <Navbar.Link href="/navbars" className="text-center">
            Projects
            </Navbar.Link>
            <Navbar.Link href="/navbars" className="text-center">
            Services
            </Navbar.Link>
            <Navbar.Link href="/navbars" className="text-center">
            Resume
            </Navbar.Link>
            <Navbar.Link href="/navbars" className="text-center">
            Contact
            </Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
    </Layout>
  );
};
export default Hello;
