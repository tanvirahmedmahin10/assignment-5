import logo from './Images/logo-text.png'

const Navbar = () => {
    return (
       <nav className="container mx-auto px-4 py-3 flex items-center justify-between sticky top-0 z-50 bg-white shadow-md md:grid grid-cols-1 gap-8">
     
        <img src={logo} alt="Logo" />

      
      <ul className="flex items-center gap-6">
        <li className='text-[#D81B7E]'><a href="#home">Home</a></li>
        <li><a href="#tech">Technologies</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact" >Contact</a></li>
      </ul>

      <div className="flex items-center gap-2">
        <button className="px-3 py-1.5 text-sm font-semibold text-slate-700 cursor-pointer">
    Sign In
  </button>
        <button className="px-4 py-1.5 text-sm font-semibold text-white bg-[#D81B7E] cursor-pointer rounded-full">
    Sign Up
  </button>
      </div>
    </nav>
    );
};

export default Navbar;