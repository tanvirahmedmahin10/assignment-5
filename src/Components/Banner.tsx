import banner from './Images/banner-stack.png';

const Banner = () => {
    return (
       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-4">
  <div className="max-w-xl space-y-4">
    <div>
      <h2 className="text-3xl font-bold leading-tight">
        Build Your Ideal <br />
        <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#a8b1f5] via-[#ba51dd] to-[#8e2de2]">
          Development Stack
        </span>
      </h2>
    </div>
    <p className="text-gray-600">
      Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
    </p>
    <div className="flex gap-4 pt-2">
      <button className="px-6 py-2.5 bg-gradient-to-r from-[#F97316]  to-[#EC4899] cursor-pointer text-white font-semibold rounded-lg transition duration-200">
        Explore Technologies
      </button>
      <button className="px-6 py-2.5 border border-gray-300 font-semibold text-gray-700 rounded-lg cursor-pointer">
  Learn More
</button>
    </div>
  </div>
  <img src={banner} alt="Development Stack Banner" className="w-full max-w-md h-auto object-contain" />
</div>
    );
};

export default Banner;