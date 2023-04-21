import Image from "next/image";
import StarVector from "../public/star-vector.svg";

export default function GradientDivider() {
  return (
    <div>
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-full h-10 mt-16">
        <div className="bg-black-primary dark:bg-white-primary dark:text-black-secondary h-10 -skew-y-2 absolute top-0 bottom-0 right-0 left-0 font-bai font-semibold text-white-primary flex items-center justify-around">
          <ul>Design</ul>
          <Image src={StarVector} alt="" />
          <ul>Develop</ul>
          <Image src={StarVector} alt="" />
          <ul>Iterate</ul>
          <Image src={StarVector} alt="" />
          <ul>Repeat</ul>
        </div>
      </div>
    </div>
  );
}
