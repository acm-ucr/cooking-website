import Image from "next/image";
import knife from "@/public/knife.svg";
import fork from "@/public/fork.svg";
import spatula from "@/public/spatula.svg";
import spoon from "@/public/Spoon.svg";

const WhatWeOffer = () => {
  return (
    <div>
      <div className="bg-cooking-green flex w-full flex-col items-start">
        <p className="p-8 text-4xl font-bold text-white"> WHAT WE OFFER </p>

        <div className="relative mt-0 ml-0">
          <Image src={knife} alt="knife" />
          <p className="text-cooking-brown-dark font-cooking-main absolute inset-23 top-7 flex items-center text-2xl font-bold">
            Cooking Skills
          </p>
        </div>

        <div className="relative mt-5 ml-60">
          <Image src={spoon} alt="spoon" />
          <p className="text-cooking-brown-dark font-cooking-main absolute inset-40 top-18 flex items-center text-2xl font-bold">
            Events
          </p>
        </div>

        <div className="relative mt-5 ml-120">
          <Image src={fork} alt="fork" />
          <p className="text-cooking-brown-dark font-cooking-main absolute inset-32 top-16 flex items-center text-2xl font-bold">
            Connections
          </p>
        </div>

        <div className="relative mt-5 ml-180">
          <Image src={spatula} alt="spatula" />
          <p className="text-cooking-brown-dark font-cooking-main absolute inset-30 top-24 flex items-center text-2xl font-bold">
            Mentorship
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
