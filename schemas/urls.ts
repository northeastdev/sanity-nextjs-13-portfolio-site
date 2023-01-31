import { defineField, defineType } from "sanity";

export default defineType({
  name: "urls",
  title: "URLS",
  type: "document",
  fields: [
    defineField({
      name: "live url",
      title: "Live URL",
      type: "string",
    }),
    defineField({
      name: "demo url",
      title: "Demo URL",
      type: "string",
    }),
  ],
});
