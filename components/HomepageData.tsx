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
import GradientDivider from "./GradientDivider";
import Link from "next/link";
import CaseStudyThumbnail from "./CaseStudyThumbnail";
import BlogThumbnail from "./BlogThumnail";

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bai sm:hidden p-4 ">
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
      <div className="py-4 md:py-6 lg:py-8 mt-16">
        <SectionHeader
          title={"Projects & Case Studies"}
          subheading={"Checkout out my latest UI/UX case studies."}
          description={
            "Designing from ground-up to building using latest tech-stack. Read my thought process and learnings."
          }
        />
        <CaseStudyThumbnail posts={posts} />
      </div>
      <div className="py-4 md:py-6 lg:py-8 lg:grid grid-cols-2 mt-16">
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
            />
          </div>
        </div>
      </div>
      <div className="py-4 md:py-6 lg:py-8 mt-16">
        <SectionHeader
          title={"Tech Stack I Use"}
          subheading={
            "These following are some of my tech stack I currently use."
          }
          description={
            "For design and rapid prototyping I use Figma, and to built out the apps and site I primarily use Next.js and Tailwind CSS for frontend and BAAS such as Sanity or Contentful as the backend."
          }
        />
        <div className=" px-4 lg:px-48 grid grid-cols-3 justify-items-center  sm:flex items-center justify-evenly gap-5">
          <div className="inline-flex flex-col items-center justify-center">
            <div className="relative w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 overflow-hidden drop-shadow-lg ">
              <Image src={Figma} alt="" fill />
            </div>
            <p className="text-sm mt-1">Figma</p>
          </div>
          <div className="inline-flex flex-col items-center justify-center">
            <div className="relative w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 overflow-hidden drop-shadow-lg ">
              <Image src={Framer} alt="" fill />
            </div>
            <p className="text-sm mt-1">Framer</p>
          </div>
          <div className="inline-flex flex-col items-center justify-center">
            <div className="relative w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 overflow-hidden drop-shadow-lg ">
              <Image src={Nextjs} alt="" fill />
            </div>
            <p className="text-sm mt-1">Next.js</p>
          </div>
          <div className="inline-flex flex-col items-center justify-center">
            <div className="relative w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 overflow-hidden drop-shadow-lg ">
              <Image src={Reactjs} alt="" fill />
            </div>
            <p className="text-sm mt-1">React.js</p>
          </div>
          <div className="inline-flex flex-col items-center justify-center">
            <div className="relative w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 overflow-hidden drop-shadow-lg ">
              <Image src={Supabase} alt="" fill />
            </div>
            <p className="text-sm mt-1">Supabase</p>
          </div>
          <div className="inline-flex flex-col items-center justify-center">
            <div className="relative w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 overflow-hidden drop-shadow-lg ">
              <Image src={Git} alt="" fill />
            </div>
            <p className="text-sm mt-1">Git</p>
          </div>
        </div>
      </div>
      <div className="py-4 md:py-6 lg:py-8 mt-16">
        <SectionHeader
          title={"Blogs"}
          subheading={"Checkout out my latest learnings."}
          description={
            "I've been learning cutting edge technologies like Next.js 13, Sanity backend solutions and other design and development principles, which I've shared below. Give them a read, if may find something useful"
          }
        />
        <BlogThumbnail posts={posts} />
      </div>
      <div className="py-4 md:py-6 lg:py-8 mt-16">
        <SectionHeader
          title={"Contact Me"}
          subheading={"Have a project? Or just wanna chat? Shoot me an email!"}
          description={"You can send me an email, address provided below."}
        />
        <div className="px-4 md:px-6 lg:px-8 font-extrabold text-xl sm:text-2xl w-fit">
          <Link
            className="flex items-center gap-2 hover:underline"
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
    </div>
  );
}
