import { Disclosure } from "@headlessui/react";
import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Pacifico } from "@next/font/google";
import Headroom from "react-headroom";
import Image from "next/image";
import signature from "../../public/Images/signature.png";
import { useRouter } from "next/router";
import { navigation } from "@/Data";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();
  return (
    <Headroom className="fixed w-full">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className=" w-full mx-auto px-2 sm:px-6 lg:px-8 2xl:px-20 py-2 2xl:py-4 bg-col z-100 ">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                    <Image
                      src={signature}
                      height={200}
                      width={300}
                      className="z-20"
                      onClick={() => {
                        router.push("/");
                      }}
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4 h-full items-center">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target={item.target}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-900 hover:text-teal",
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
              <div className="space-y-1 px-2 pt-2 pb-3 text-center border-b border-teal">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-900 hover:text-teal",
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
