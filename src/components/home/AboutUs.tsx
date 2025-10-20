export default function AboutUs() {
  return (
    // section is bg
    <section className="bg-cooking-cream-light relative flex min-h-screen flex-col items-center p-10 md:flex-row">
      <span className="border-cooking-green absolute top-25 right-20 h-20 w-20 border-t-4 border-r-4"></span>
      <span className="border-cooking-green absolute bottom-25 left-[48%] h-20 w-20 border-b-4 border-l-4"></span>

      <div className="flex flex-1 justify-center">
        <div className="bg-cooking-brown-dark flex aspect-[4/3] w-[90%] items-center justify-center border-2 text-white"></div>
      </div>

      <div className="flex-1 p-8 text-[#556B2F]">
        <p className="mb-2 text-3xl font-bold">ABOUT US</p>
        <p className="mb-4 text-xl font-semibold">Welcome to Cooking Club!</p>
        <p className="mb-6 text-lg leading-relaxed">
          The Cooking Club helps students learn essential cooking skills, from
          basic techniques to creative recipes. We create a fun, supportive
          environment where everyone can level up their kitchen game. Whether
          you're a total beginner or already chef-coded, there's something here
          for you. Join us to explore new cuisines, share meals, and maybe even
          show-off in a friendly cook-off!
        </p>
        <div className="flex">
          <button className="bg-cooking-green hover:bg-cooking-green ml-auto rounded-md px-25 py-4 font-medium text-white transition">
            Join Here
          </button>
        </div>
      </div>
    </section>
  );
}
