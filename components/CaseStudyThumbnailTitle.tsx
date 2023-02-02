import { Post } from "@/typings";
import Link from "next/link";

export default function CaseStudyThumbnailTitle({
  title,
  description,
  slug,
  URL,
}: Post) {
  return (
    <div className=" opacity-95 bg-neutral-800 text-sm py-5 px-5 space-y-4 rounded-md text-white">
      <h3 className=" text-lg font-bold">{title}</h3>
      <p className="line-clamp-2 opacity-70">{description}</p>
      <div className="flex items-center gap-4">
        {/* Case study link */}
        <div className="text-sm hover:underline w-fit">
          <Link href={`blog/${slug.current}`}>
            <div className="text-white flex items-center gap-1">
              <p>Case Study</p>
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
            </div>
          </Link>
        </div>

        <div className="text-sm hover:underline w-fit">
          <Link href={`${URL.demoURL}`}>
            <div className="text-white flex items-center gap-1">
              <p>Live</p>
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
            </div>
          </Link>
        </div>
        <div className="text-sm hover:underline w-fit">
          <Link href={`${URL.codeURL}`}>
            <div className="text-white flex items-center gap-1">
              <p>Code</p>
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
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
