import { TitleDescription } from "@/typings";

export default function SectionTitleDescription({
  title,
  subheading,
  description,
}: TitleDescription) {
  return (
    <div className=" space-y-1 text-black-secondary px-4 md:px-6 lg:px-8 dark:text-white-primary">
      <h2 className="md:w-96 py-2 text-3xl md:text-5xl font-bai font-extrabold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
        {title}
      </h2>
      <div className="sm:block text-start w-full lg:w-11/12 space-y-5  ">
        <h3 className="font-bold">{subheading}</h3>
        <p className="text-xs md:text-sm opacity-80">{description}</p>
      </div>
    </div>
  );
}
