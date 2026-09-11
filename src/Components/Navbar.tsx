import logo from './Images/logo-text.png'

const Navbar = () => {
    return (
       <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
     
        <img src={logo} alt="Logo" />

      
      <ul className="flex items-center gap-6">
        <li><a href="#home">Home</a></li>
        <li><a href="#tech">Technologies</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact" >Contact</a></li>
      </ul>

      <div className="flex items-center gap-2">
        <button className="btn btn-sm">SignIn</button>
        <button className="btn btn-secondary btn-sm">SignUp</button>
      </div>
    </nav>
    );
};

export default Navbar;