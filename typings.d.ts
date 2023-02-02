import { Image, Slug } from "sanity";
import { Url } from "url";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  URL: URL;
};

interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Category extends Base {
  description: string;
  title: string;
}

interface Image {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface URL {
  codeURL: string;
  demoURL: string;
}

interface Title {
  _type: "string";
  current: string;
}

interface TitleDescription {
  title: string;
  subheading: string;
  description: string;
}

interface Paths {
  path: string[];
}
