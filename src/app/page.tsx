const PLACEHOLDER_COUNT = 6;

const Home = () => {
  return (
    <main className="min-h-screen w-full bg-[color:var(--color-cooking-brown-light)] flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <h1 className="text-center text-2xl font-semibold tracking-wide text-[color:var(--color-cooking-green)]">
          GALLERY
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
            <div
              key={index}
              className="aspect-square rounded-sm border-4 border-[color:var(--color-cooking-green)] bg-[color:var(--color-cooking-cream-light)]"
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
