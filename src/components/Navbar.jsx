import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-black backdrop-blur-lg border-b border-white/10 shadow-lg transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
         
          <a
            href="#home"
            className={`font-mono text-xl font-bold transition-all duration-300 z-50 ${
              menuOpen ? "text-white/40" : "text-white"
            }`}
          >
            Abdal{" "}
            <span
              className={`${
                menuOpen ? "text-blue-500/40" : "text-blue-500"
              }`}
            >
              Ahmed.
            </span>
          </a>

          {/* Hamburger Menu for Mobile */}
          <div
            className="w-7 h-6 relative z-50 flex flex-col justify-between items-center md:hidden cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>

       
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            <a
              href="https://github.com/abdalahmed07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};