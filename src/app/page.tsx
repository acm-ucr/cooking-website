const PLACEHOLDER_COUNT = 6;

import Example from "@components/example";
import WhatWeOffer from "@components/Landing/WhatWeOffer";

const Home = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[color:var(--color-cooking-brown-light)] p-8">
      <div className="w-full max-w-5xl">
        <h1 className="text-center text-2xl font-semibold tracking-wide text-[color:var(--color-cooking-green)]">
          GALLERY
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
            <div
              key={index}
              className="aspect-square rounded-xl border-4 border-[color:var(--color-cooking-green)] bg-[color:var(--color-cooking-cream-light)]"
            />
          ))}
        </div>
      </div>

      <div className="mt-12 flex w-full flex-col items-center justify-center">
        <Example text1="Adjust" text2="These" text3="Props" />
        <WhatWeOffer />
      </div>
    </main>
  );
};

export default Home;
