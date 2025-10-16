import Example from "@/components/example";
import WhatWeOffer from "@/components/Landing/WhatWeOffer";

const Home = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Example text1="Adjust" text2="These" text3="Props" />
      <WhatWeOffer />
    </div>
  );
};

export default Home;
