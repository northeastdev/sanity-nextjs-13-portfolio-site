import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { cache } from "react";
import PreviewSuspense from "@/components/PreviewSuspense";
import PreviewBlogList from "@/components/PreviewBlogList";
import HomepageData from "@/components/HomepageData";
import Navbar from "@/components/Navbar";
import PageWrapper from "./page-wrapper";

export const revalidate = 60;

export default async function Home() {
  const query = groq`*[_type=='post'] | order(_createdAt desc){..., author->, categories[]->}`;
  const clientFetch = cache(client.fetch.bind(client));

  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-lg text-center animate-pulse">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await clientFetch(query);
  return (
    <>
      <Navbar />
      <PageWrapper>
        <main className="">
          <HomepageData posts={posts} />
        </main>
      </PageWrapper>
    </>
  );
}
