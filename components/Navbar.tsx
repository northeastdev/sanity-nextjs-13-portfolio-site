"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { id: "about", name: "About", href: "#about" },
  { id: "blog", name: "Blog", href: "#blogs" },
  // { id: "contact", name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <header className="sticky py-5 top-0 z-[1] flex items-center justify-between text-white-primary backdrop-blur-xl rounded-b-2xl">
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
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <XMarkIcon
                  className="block h-6 w-6 dark:text-white-primary text-black-secondary"
                  aria-hidden="true"
                />
              ) : (
                <Bars3Icon
                  className="block h-6 w-6 dark:text-white-primary text-black-secondary"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
          <div
            className={"md:flex" + (navbarOpen ? " flex" : " hidden")}
            id="example-navbar-danger"
          >
            <ul className="text-sm mt-7 md:mt-0 flex flex-col gap-y-6 md:flex-row md:items-center md:gap-x-8">
              {navigation.map((item) => (
                <li className="nav-item text-black-secondary" key={item.id}>
                  <a
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    href={item.href}
                  >
                    <span className="hover:underline hover:underline-offset-3">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
              <button className="border border-gray-300 dark:border-white-primary dark:border-opacity-80 text-black-secondary dark:text-white-primary hover:text-slate-50 hover:bg-slate-900 transition-colors duration-200 rounded-full px-4 py-1">
                <a onClick={() => setNavbarOpen(!navbarOpen)} href="#contact">
                  Contact
                </a>
              </button>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
