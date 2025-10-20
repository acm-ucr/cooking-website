const PLACEHOLDER_COUNT = 6;

const Gallery = () => {
  return (
    <div className="w-full max-w-5xl">
      <h1 className="text-center text-2xl font-semibold tracking-wide text-[color:var(--color-cooking-green)]">
        GALLERY
      </h1>
      <div className="-cols-1 mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
          <div
            key={index}
            className="aspect-square rounded-xl border-4 border-[color:var(--color-cooking-green)] bg-[color:var(--color-cooking-cream-light)]"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
