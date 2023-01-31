"use client";

import { usePreview } from "@/lib/sanity.preview";
import BlogList from "./HomepageData";

type Props = {
  query: string;
};

export default function PreviewDocumentsCount({ query }: Props) {
  const posts = usePreview(null, query);
  return <BlogList posts={posts} />;
}
