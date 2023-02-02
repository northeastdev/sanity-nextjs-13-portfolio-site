import { Post } from "@/typings";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import Figma from "../public/logos/figma-icon.svg";
import Framer from "../public/logos/framer-icon.svg";
import Nextjs from "../public/logos/nextjs-icon.svg";
import Reactjs from "../public/logos/reactjs-icon.svg";
import Nodejs from "../public/logos/nodejs-icon.svg";
import Supabase from "../public/logos/supabase-icon.svg";
import Git from "../public/logos/git-icon.svg";
import Twitter from "../public/logos/twitter-alt.svg";
import Instagram from "../public/logos/instagram.svg";
import LinkedIn from "../public/logos/linkedin-alt.svg";
import Github from "../public/logos/github-alt.svg";
import GradientDivider from "./GradientDivider";
import Link from "next/link";
import CaseStudyThumbnail from "./CaseStudyThumbnail";
import BlogThumbnail from "./BlogThumnail";

type Props = {
  posts: Post[];
};

const logos = [
  { id: "twitter", src: Twitter, href: "https://twitter.com/AlomRubial" },
  {
    id: "instagram",
    src: Instagram,
    href: "https://www.instagram.com/___rubel.alam___/",
  },
  {
    id: "linkedin",
    src: LinkedIn,
    href: "https://www.linkedin.com/in/rubial-alom-0640a3147/",
  },
  { id: "github", src: Github, href: "https://github.com/northeastdev" },
];

export default function BlogList({ posts }: Props) {
  return (
    <div>
      <div className="dark:text-white-primary">
        <h1 className="text-2xl xl:text-3xl font-bai px-4 pt-20 pb-5 md:px-6 lg:px-8 max-w-2xl">
          Based in India with deep interest in{" "}
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-full h-10 text-transparent bg-clip-text">
            UI/UX design
          </span>{" "}
          &{" "}
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-full h-10 text-transparent bg-clip-text">
            frontend engineering.
          </span>
        </h1>
      </div>
      <div className="relative sm:hidden mt-5">
        <GradientDivider />
      </div>
      <div className="py-4 md:py-6 lg:py-8 pt-24 md:pt-28 lg:pt-32">
        <SectionHeader
          title={"Projects & Case Studies"}
          subheading={"Checkout out my latest UI/UX case studies."}
          description={
            "Designing from ground-up to building using latest tech-stack. Read my thought process and learnings."
          }
        />
        <CaseStudyThumbnail posts={posts} />
      </div>
      <div
        id="about"
        className="py-4 md:py-6 lg:py-8 lg:grid grid-cols-2 pt-24 md:pt-28 lg:pt-32"
      >
        <SectionHeader
          title={"About Me"}
          subheading={
            "I'm Rubel, a versatile individual with a passion for adventure and a thirst for knowledge."
          }
          description={
            "With a background in marketing and a love for photography, I am always on the lookout for new experiences and opportunities to expand his horizons. In my free time, you can find him hiking in the mountains"
          }
        />
        <div className="px-4">
          <div className="relative w-full h-80 sm:h-96 md:h-[400px] overflow-hidden drop-shadow-lg ">
            <Image
              className="object-cover rounded-lg"
              src={
                "https://images.unsplash.com/photo-1674056982646-1780098ff715?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDYyfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              }
              alt="about image"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
        </div>
      </div>
      <div className="py-4 md:py-6 lg:py-8 pt-24 md:pt-28 lg:pt-32">
        <SectionHeader
          title={"Tech Stack I Use"}
          subheading={
            "These following are some of my tech stack I currently use."
          }
          description={
            "For design and rapid prototyping I use Figma, and to built out the apps and site I primarily use Next.js and Tailwind CSS for frontend and BAAS such as Sanity or Contentful as the backend."
          }
        />
        <div className=" px-4 py-7 lg:px-48 grid grid-cols-3 justify-items-center  sm:flex items-center justify-evenly gap-6 dark:text-white-primary">
          <div className="inline-flex flex-col items-center justify-center ">
            <div className="  w-9 h-9 md:w-12 md:h-12 lg:w-16 lg:h-16 drop-shadow-lg ">
              <Image src={Figma} alt="" />
            </div>
            <p className="text-sm mt-5 opacity-70">Figma</p>
          </div>
          <div className="inline-flex flex-col items-center justify-center">
            <div className="  w-9 h-9 md:w-12 md:h-12 lg:w-16 lg:h-16 drop-shadow-lg ">
              <Image src={Framer} alt="" />
            </div>
            <p className="text-sm mt-5 opacity-70">Framer</p>
          </div>
          <div className=" inline-flex flex-col items-center justify-center">
            <div className="  w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 drop-shadow-lg ">
              <Image className="" src={Nextjs} alt="" />
            </div>
            <p className="text-sm mt-5 opacity-70">Next.js</p>
          </div>
          <div className="inline-flex flex-col items-center justify-center">
            <div className="  w-9 h-9 md:w-12 md:h-12 lg:w-16 lg:h-16 drop-shadow-lg ">
              <Image src={Reactjs} alt="" />
            </div>
            <p className="text-sm mt-5 opacity-70">React.js</p>
          </div>
          <div className="inline-flex flex-col items-center justify-center">
            <div className="  w-9 h-9 md:w-12 md:h-12 lg:w-16 lg:h-16 drop-shadow-lg ">
              <Image src={Supabase} alt="" />
            </div>
            <p className="text-sm mt-5 opacity-70">Supabase</p>
          </div>
          <div className="inline-flex flex-col items-center justify-center">
            <div className=" w-9 h-9 md:w-12 md:h-12 lg:w-16 lg:h-16 drop-shadow-lg ">
              <Image src={Git} alt="" />
            </div>
            <p className="text-sm mt-5 opacity-70">Git</p>
          </div>
        </div>
      </div>
      <div id="blogs" className="py-4 md:py-6 lg:py-8 pt-24 md:pt-28 lg:pt-32">
        <SectionHeader
          title={"Blogs"}
          subheading={"Checkout out my latest learnings."}
          description={
            "I've been learning cutting edge technologies like Next.js 13, Sanity backend solutions and other design and development principles, which I've shared below. Give them a read, if may find something useful"
          }
        />
        <BlogThumbnail posts={posts} />
      </div>
      <div
        id="contact"
        className="py-4 md:py-6 lg:py-8 pt-24 md:pt-28 lg:pt-32"
      >
        <SectionHeader
          title={"Contact Me"}
          subheading={"Have a project? Or just wanna chat? Shoot me an email!"}
          description={"You can send me an email, address provided below."}
        />
        <div className="px-4 md:px-6 lg:px-8 font-extrabold text-xl sm:text-2xl w-fit dark:text-white-primary ">
          <Link
            className="flex items-center gap-2 hover:scale-110 transition-transform duration-150 ease-in-out"
            href="mailto:rubelalam75@gmail.com"
          >
            <p>rubelalam75@gmail.com</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div
        id="contact"
        className="py-4 md:py-6 lg:py-8 pt-24 md:pt-28 lg:pt-32"
      >
        <SectionHeader
          title={"Follow Me"}
          subheading={"Connect with me on the following socials"}
          description={"I mostly hangout on twitter and instagram!"}
        />
        <div className="px-4 md:px-6 lg:px-8 font-extrabold text-xl sm:text-2xl w-fit dark:text-white-primary">
          <ul className="flex items-center gap-7">
            {logos.map((logo) => (
              <li
                key={logo.id}
                className="hover:scale-110 transition-transform duration-150 ease-in-out"
              >
                <a target="_blank" rel="noopener noreferrer" href={logo.href}>
                  <Image src={logo.src} alt="" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-16 pb-2 px-4 md:px-6 lg:px-8">
          <div className="border border-black-secondary dark:border-white-primary"></div>
          <div className="py-8 flex flex-col gap-10 items-center justify-between">
            <div className="space-y-3 text-center">
              <p className="text-2xl sm:text-3xl font-bai font-bold dark:text-white-primary">
                Rubial Alom.
              </p>
              <p className="dark:text-white-primary font-semibold opacity-70">
                Powered by Next.js, Tailwind CSS & Sanity CMS
              </p>
            </div>
            <div>
              <a href="#home">
                <div className="flex gap-2 dark:text-white-primary">
                  <p className="dark:text-white-primary opacity-60 hover:scale-110 transition-transform ease-out">
                    Back To Top ↑
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
