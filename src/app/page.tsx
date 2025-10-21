import Example from "@/components/example";
import WhatWeOffer from "@/components/Landing/WhatWeOffer";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Example text1="Adjust" text2="These" text3="Props" />
      <WhatWeOffer />
      <Footer />
    </div>
  );
};

export default Home;
