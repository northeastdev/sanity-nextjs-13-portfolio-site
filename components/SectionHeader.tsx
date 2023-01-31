import { TitleDescription } from "@/typings";
import SectionTitleDescription from "./SectionTitleDescription";

export default function SectionHeader({
  title,
  subheading,
  description,
}: TitleDescription) {
  return (
    <div className="max-w-full mx-auto mb-8">
      <div className="space-y-5 md:space-y-4">
        <SectionTitleDescription
          title={title}
          subheading={subheading}
          description={description}
        />
      </div>
    </div>
  );
}
