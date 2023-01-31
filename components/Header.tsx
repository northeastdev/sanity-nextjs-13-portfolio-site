import Image from "next/image";
import Link from "next/link";
import MenuLogo from "../public/menu-btn.svg";

export default function Header() {
  return (
    <header className="flex items-center sm:items-start justify-between text-black-secondary p-4 md:p-6 lg:p-8">
      <div className="">
        <div className="flex flex-col gap-3">
          <Link href={"/"}>
            <h1 className="text-2xl sm:text-3xl font-bai font-bold">
              Rubial Alom.
            </h1>
          </Link>
          <p className="hidden sm:block sm:text-xs lg:text-sm">
            Based in India with deep interest in UI/UX design & frontend
            engineering.
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <ul className="flex justify-evenly gap-8">
          <Link className=" hover:scale-110 transition-transform" href="/about">
            <li>About</li>
          </Link>
          <Link
            className=" hover:scale-110 transition-transform"
            href="/projects"
          >
            <li>Projects</li>
          </Link>
          <Link className=" hover:scale-110 transition-transform" href="/blog">
            <li>Blog</li>
          </Link>
          <Link
            className=" hover:scale-110 transition-transform"
            href="/contact"
          >
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="md:hidden">
        <Image src={MenuLogo} alt={"menu button"} width={26} height={12} />
      </div>
    </header>
  );
}
