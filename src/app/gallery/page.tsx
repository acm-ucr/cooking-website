import Gallery from "@/components/Landing/Gallery";

const GalleryPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-[color:var(--color-cooking-brown-light)] p-8">
      <div className="mt-12 flex w-full flex-col items-center justify-center">
        <Gallery />
      </div>
    </main>
  );
};

export default GalleryPage;
