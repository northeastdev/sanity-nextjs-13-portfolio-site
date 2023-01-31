import { RichTextComponents } from "@/components/RichTextComponents";
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { Post } from "@/typings";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import { cache } from "react";

type Props = {
  params: {
    slug: "string";
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`*[__type == "post"]
  {
    slug
  }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  console.log(slugRoutes);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

export default async function BlogPost({ params: { slug } }: Props) {
  const query = groq`*[_type=="post"&& slug.current==$slug][0]  {
    ..., author->, categories[]->
  }`;
  const clientFetch = cache(client.fetch.bind(client));
  const post: Post = await clientFetch(query, { slug });

  if (!post) return null;

  return (
    <article className="max-w-5xl m-auto">
      <h1 className="font-bai text-3xl lg:font-semibold 2xl:text-5xl px-4 pt-10 md:p-6 lg:px-8 lg:pt-20">
        {post.title}
      </h1>
      <div className="flex items-end gap-2 p-4 md:px-6 lg:px-8">
        <Image
          className=" rounded-full"
          src={urlFor(post.author.image).url()}
          alt="author image"
          width={40}
          height={40}
        />
        <div>
          <p className="">{post.author.name}</p>
          <p className="text-xs">{`Published at ${new Date(
            post._createdAt
          ).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}`}</p>
        </div>
      </div>
      <section className="p-4 md:p-6 lg:px-8 ">
        <PortableText value={post.body} components={RichTextComponents} />
      </section>
    </article>
  );
}
