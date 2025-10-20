import Link from "next/link";
import Image from "next/image";

import Knife from "@/public/svg/knife.svg";

const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-cooking-brown-light flex w-3/4 flex-col items-center gap-1 p-10">
      <div className="bg-cooking-green w-1/2 p-5 text-left">{props.text1}</div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="bg-cooking-brown-dark w-full p-5 text-left">
          props.text2
        </div>
        <div className="bg-cooking-gray w-full p-5 text-right">
          {props.text2}
        </div>
      </div>
      {/* Hint: Add another box/div here similarly to line 4 */}
      <Link href="/about"> about </Link>
      <Image src={Knife} alt={"Knife"} />
    </div>
  );
};

export default Example;
