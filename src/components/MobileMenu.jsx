export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`
        fixed top-0 left-0 w-full h-screen z-30
        flex flex-col items-center justify-center
        bg-[rgba(10,10,10,0.9)] backdrop-blur-lg
        transition-all duration-500 ease-in-out
        transform ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}
      `}
    >
      <nav className="flex flex-col items-center space-y-6 mt-10 text-white text-xl">
        <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Contact</a>
        <a
          href="https://github.com/abdalahmed07"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="hover:text-blue-400"
        >
          GitHub
        </a>
      </nav>
    </div>
  );
};