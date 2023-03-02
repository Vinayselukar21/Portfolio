import Lottie from "lottie-react";
import Link from "next/link";
import Image from "next/image";
import contactani from "../../public/Animations/contact-sec-lottie.json";
import locationic from "../../public/icons/location-icon.png";
import instagram from "../../public/icons/instagram.png";
import github from "../../public/icons/github.png";
import twitter from "../../public/icons/twitter.png";
import linkedin from "../../public/icons/linkedin.png";
const ContactMe = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full mb-10 sm:mb-0" id="contact">
        <div className="w-full flex flex-col my-5 sm:my-10">
          <h1 className="text-3xl sm:text-5xl font-black text-gray-300 border-b border-teal pb-5 mb-5">
            Get In Touch.
          </h1>
          <div className="flex flex-col sm:flex-row">
            <div className="w-full sm:w-3/5 flex justify-center sm:m-0">
              <Lottie
                // className="w-3/4 h-3/4 "
                className="w-3/4 2xl:w-1/2"
                animationData={contactani}
                loop={true}
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/5 ">
              <h1 className="text-xl w-full text-gray-400">
                My inbox is always open, <br />
                Whether it is work or just want to say Hi.
              </h1>

              <div className="my-5 flex flex-row items-center">
                <Image
                  height={30}
                  width={30}
                  src={locationic}
                  className="invert mr-2"
                ></Image>
                <p className="text-xl text-gray-300">Nagpur, Maharashtra</p>
              </div>

              <h1 className="text-xl w-full text-gray-400">
                Open to new Opportunities
              </h1>

              <Link
                target={"_blank"}
                href="mailto:vselukar2102@gmail.com"
                className="py-3 px-5  border-2 border-teal rounded w-32 text-center text-teal hover:bg-teal hover:text-back-col my-5"
              >
                Contact
              </Link>

              <div className="flex flex-row">
                <Link
                  target={"_blank"}
                  href="https://github.com/Vinayselukar21"
                >
                  <Image
                    alt="github"
                    className="mr-3 invert transform transition duration-100 hover:scale-110"
                    height={30}
                    width={30}
                    src={github}
                  ></Image>
                </Link>
                <Link
                  target={"_blank"}
                  href="https://www.instagram.com/vinayselukar/"
                >
                  <Image
                    alt="instagram"
                    className="mx-3 invert transform transition duration-100 hover:scale-110"
                    height={30}
                    width={30}
                    src={instagram}
                  ></Image>
                </Link>
                <Link
                  target={"_blank"}
                  href="https://twitter.com/Vinayselukar21"
                >
                  <Image
                    alt="twitter"
                    className="mx-3 invert transform transition duration-100 hover:scale-110"
                    height={30}
                    width={30}
                    src={twitter}
                  ></Image>
                </Link>
                <Link
                  target={"_blank"}
                  href="https://www.linkedin.com/in/vinayselukar/"
                >
                  <Image
                    alt="linkedin"
                    className="mx-3 invert transform transition duration-100 hover:scale-110"
                    height={30}
                    width={30}
                    src={linkedin}
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactMe;
