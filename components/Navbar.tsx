"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const navigation = [
  { id: "about", name: "About", href: "#about" },
  { id: "blog", name: "Blog", href: "#blogs" },
  // { id: "contact", name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header
        key="homepage"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        className="sticky py-5 top-0 z-[1] flex items-center justify-between text-white-primary backdrop-blur-xl 2xl:rounded-2xl"
      >
        <nav className="px-4 md:px-6 lg:px-8 flex flex-wrap  items-center justify-between w-full">
          <div className="w-full md:w-1/2 relative flex justify-between items-center lg:w-auto lg:static md:justify-start">
            <Link href="/">
              <span className="font-bai text-xl hover:cursor-pointer font-bold leading-relaxed inline-block text-black-secondary dark:text-white-primary">
                Rubial Alom
              </span>
            </Link>
            <button
              aria-label="menu button"
              className="text-slate-700 cursor-pointer text-xl leading-none pl-2 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon
                  className="block h-6 w-6 dark:text-white-primary text-black-secondary"
                  aria-hidden="true"
                />
              ) : (
                <div>
                  <Bars3Icon
                    className="block h-6 w-6 dark:text-white-primary text-black-secondary"
                    aria-hidden="true"
                  />
                </div>
              )}
            </button>
          </div>
          <div
            className={"md:flex" + (isOpen ? " flex" : " hidden")}
            id="example-navbar-danger"
          >
            <ul className="text-sm mt-7 md:mt-0 flex flex-col gap-y-6 md:flex-row md:items-center md:gap-x-8">
              {navigation.map((item) => (
                <li
                  className="nav-item text-black-secondary dark:text-white-primary hover:scale-110 transition-transform duration-150 ease-in-out"
                  key={item.id}
                >
                  <a onClick={() => setIsOpen(!isOpen)} href={item.href}>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
              <button className="border border-gray-300 dark:border-white-primary dark:border-opacity-80 text-black-secondary dark:text-white-primary hover:text-slate-50 hover:bg-gray-800 transition-colors duration-200 rounded-full px-4 py-1">
                <a onClick={() => setIsOpen(!isOpen)} href="#contact">
                  Contact
                </a>
              </button>
            </ul>
          </div>
        </nav>
      </motion.header>
    </>
  );
}
