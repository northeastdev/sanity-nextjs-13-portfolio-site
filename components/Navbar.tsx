"use client";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  // { name: "Home", href: "/", current: false },
  { name: "About", href: "#about", current: false },
  { name: "Blog", href: "#blogs", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white-secondary dark:bg-black-secondary">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-4 md:px-6 lg:px-8 w-full bg-white-primary dark:bg-black-secondary z-50 fixed top-0 overflow-hidden">
            <div className="relative flex h-16 items-center justify-between">
              <div className="text-black-secondary dark:text-white-primary text-2xl font-bold font-bai">
                <h1>Rubial Alom.</h1>
              </div>
              <div>
                <div className="sm:hidden">
                  <Disclosure.Button className="rounded-md p-2 text-black-primary dark:text-gray-400 hover:bg-gray-700 hover:text-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="">
                  <div className="hidden sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-slate-200 text-black-secondary"
                              : "text-black-secondary dark:text-white-primary hover:bg-gray-700 hover:text-white",
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
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 border-b border-slate-300 bg-white-primary dark:bg-black-secondary">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-400 hover:bg-gray-700 hover:text-white",
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
  );
}
