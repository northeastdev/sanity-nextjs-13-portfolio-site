import Image from "next/image";
import StarVector from "../public/star-vector.svg";

export default function GradientDivider() {
  return (
    <div>
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-full h-10 mt-16">
        <div className="bg-white-secondary dark:bg-black-primary dark:text-white-secondary h-10 -skew-y-2 absolute top-0 bottom-0 right-0 left-0 font-bai font-semibold flex items-center justify-around">
          <ul>Design</ul>
          <Image src={StarVector} alt="vector graphics" />
          <ul>Develop</ul>
          <Image src={StarVector} alt="vector graphics" />
          <ul>Iterate</ul>
          <Image src={StarVector} alt="vector graphics" />
          <ul>Repeat</ul>
        </div>
      </div>
    </div>
  );
}
