import urlFor from "@/lib/urlFor";
import { Post } from "@/typings";
import Image from "next/image";
import CaseStudyThumbnailTitle from "./CaseStudyThumbnailTitle";

type Props = {
  posts: Post[];
};

export default function CaseStudyThumbnail({ posts }: Props) {
  const caseStudies = posts.filter(
    (post) => post.categories[0].title === "Case Study"
  );
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 px-4 md:px-6 lg:px-8 max-w-full m-auto">
        {caseStudies.map((post) => (
          <div
            key={post._id}
            className="group cursor-pointer overflow-hidden rounded-md"
          >
            <div className="relative w-full h-[450px] drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
              <Image
                className="object-cover object-center lg:object-center rounded-md"
                priority
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
              <div className="absolute bottom-0 w-full">
                <CaseStudyThumbnailTitle {...post} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
