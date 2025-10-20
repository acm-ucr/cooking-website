import Example from "@/components/example.tsx";
import WhatWeOffer from "@/components/Landing/WhatWeOffer.tsx";
import Gallery from "@/components/Landing/Gallery.tsx";

const Home = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[color:var(--color-cooking-brown-light)] p-8">
      <div className="mt-12 flex w-full flex-col items-center justify-center">
        <Example text1="Adjust" text2="These" text3="Props" />
        <WhatWeOffer />
        <Gallery />
      </div>
    </main>
  );
};

export default Home;
