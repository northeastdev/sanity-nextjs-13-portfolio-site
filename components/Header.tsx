import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center sm:items-start justify-between dark:text-white-primary text-black-secondary p-4 md:p-6 lg:p-8">
      <div className="">
        <div className="flex flex-col gap-3">
          <Link href={"/"}>
            <h1 className="text-2xl sm:text-3xl font-bai font-bold dark:text-white-primary">
              Rubial Alom.
            </h1>
          </Link>
          <p className="hidden sm:block sm:text-xs lg:text-sm dark:text-white-primary">
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
      <div className="md:hidden stroke-black-primary dark:stroke-white-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        {/* <Image src={MenuLogo} alt={"menu button"} width={26} height={12} /> */}
      </div>
    </header>
  );
}
