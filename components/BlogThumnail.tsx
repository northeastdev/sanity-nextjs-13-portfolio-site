import urlFor from "@/lib/urlFor";
import { Post } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import BlogThumbnailTitle from "./BlogThumnailTitle";

type Props = {
  posts: Post[];
};

export default function CaseStudyThumbnail({ posts }: Props) {
  const blogs = posts.filter((post) => post.categories[0].title === "Blogs");
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:px-6 lg:px-8 max-w-full m-auto">
        {blogs.map((post) => (
          <div key={post._id} className="group overflow-hidden rounded-md">
            <div className="drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
              <Link
                href={`blog/${post.slug.current}`}
                className="cursor-pointer"
              >
                <div className="relative w-full h-[450px]">
                  <Image
                    className="object-cover object-center lg:object-center rounded-md"
                    src={urlFor(post.mainImage).url()}
                    alt={post.author.name}
                    fill
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
                </div>
              </Link>
              <div className="absolute bottom-0 w-full">
                <BlogThumbnailTitle {...post} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
