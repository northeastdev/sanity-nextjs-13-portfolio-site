import urlFor from "@/lib/urlFor";
import Image from "next/image";
import Link from "next/link";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[380px] lg:h-[430px] md:my-10">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt={value.alt || ""}
            fill
          />
        </div>
      );
    },
  },
  marks: {
    em: ({ children }: any) => <em>{children}</em>,

    link: ({ value, children }: any) => {
      const target = !value.href.startsWith("/") ? "_blank" : undefined;
      return (
        <Link
          className=" text-blue-700 hover:underline underline-offset-1"
          href={value?.href}
          target={target}
          // rel={target === "_blank" && "noindex nofollow"}
        >
          {children}
        </Link>
      );
    },
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: any) => (
      <h1 className="text-3xl md:text-4xl my-8">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-xl md:text-3xl my-6">{children}</h2>
    ),
    h3: ({ children }: any) => <h3 className="text-2xl my-4">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg my-2">{children}</h4>,
    normal: ({ children }: any) => <p className="my-4">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-slate-500 rounded-sm bg-gray-200 p-2 my-10`">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="pl-4 my-10 list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-10 list-decimal space-y-2">{children}</ol>
    ),

    checkmarks: ({ children }: any) => (
      <ol className="m-auto text-lg">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
    checkmarks: ({ children }: any) => <li>✅ {children}</li>,
    number: ({ children }: any) => <li>{children}</li>,
  },
};
