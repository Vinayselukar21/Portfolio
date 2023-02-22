import { Disclosure} from "@headlessui/react";
import React from "react";
import { Bars3Icon,  XMarkIcon } from "@heroicons/react/24/outline";

import { Pacifico } from "@next/font/google";
import Headroom from "react-headroom";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const navigation = [
  { name: "About Me",target:"", href: "#aboutMe", current: false },
  { name: "Projects",target:"", href: "#projects", current: false },
  { name: "Resume", target:"_blank", href:"https://drive.google.com/file/d/1PAauRSEI9zx3NAjlTZZ9byNoUeMUvVY4/view?usp=share_link", current: false },
  { name: "Contact", target:"", href: "#contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const text = "< VS />";
  return (
    <Headroom>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="mx-auto px-2 sm:px-6 lg:px-8  w-full py-2 bg-back-col z-30">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                  <div className="flex flex-shrink-0 items-center">
                    <a href="/">
                      {" "}
                      <p className="text-3xl text-teal">
                        <i className={pacifico.className}>{text}</i>
                      </p>{" "}
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target={item.target}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-teal",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </Headroom>
  );
}
