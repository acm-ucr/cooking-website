export default function AboutUs() {
  return (
    // section is bg
    <section className="relative flex min-h-screen flex-col items-center bg-[#FAF3E0] p-10 md:flex-row">
      <span className="absolute top-25 right-20 h-20 w-20 border-t-4 border-r-4 border-[#556B2F]"></span>
      <span className="absolute bottom-25 left-[48%] h-20 w-20 border-b-4 border-l-4 border-[#556B2F]"></span>

      <div className="flex flex-1 justify-center">
        <div className="flex aspect-[4/3] w-[90%] items-center justify-center border-2 border-[#808000] bg-amber-700 text-white"></div>
      </div>

      <div className="flex-1 p-8 text-[#556B2F]">
        <h2 className="mb-2 text-3xl font-bold">ABOUT US</h2>
        <h3 className="mb-4 text-xl font-semibold">Welcome to Cooking Club!</h3>
        <p className="mb-6 text-lg leading-relaxed">
          The Cooking Club helps students learn essential cooking skills, from
          basic techniques to creative recipes. We create a fun, supportive
          environment where everyone can level up their kitchen game. Whether
          you're a total beginner or already chef-coded, there's something here
          for you. Join us to explore new cuisines, share meals, and maybe even
          show-off in a friendly cook-off!
        </p>
        <div className="flex">
          <button className="ml-auto rounded-md bg-[#556B2F] px-25 py-4 font-medium text-white transition hover:bg-[#668c19]">
            Join Here
          </button>
        </div>
      </div>
    </section>
  );
}
