import { useEffect } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

export const Projects = () => {
  useEffect(() => {
    const scrollToSection = () => {
      const element = document.getElementById("projects");
      if (window.location.hash === "#projects" && element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
    scrollToSection();
    window.addEventListener("hashchange", scrollToSection);
    return () => window.removeEventListener("hashchange", scrollToSection);
  }, []);

  return (
    <section
      id="projects"
      className="pt-20 pb-32 bg-black flex items-center justify-center min-h-screen"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project 1: To-Do App */}
            <div className="p-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)] transition">
              <h3 className="text-2xl font-bold mb-3">To-Do App</h3>
              <p className="text-gray-400 mb-4">
                A clean and functional React-based To-Do app. Users can add, complete, and delete tasks with Tailwind UI.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwind CSS", "Vite"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://abdalahmed07.github.io/To-do-App/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 2: BMI Calculator */}
            <div className="p-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)] transition">
              <h3 className="text-2xl font-bold mb-3">BMI Calculator</h3>
              <p className="text-gray-400 mb-4">
                A responsive Body Mass Index calculator built using HTML, CSS, and JavaScript. It allows users to calculate BMI with instant feedback and includes a helpful guide.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://abdalahmed07.github.io/BMI-Calculator/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 3: Guess The Number */}
            <div className="p-8 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)] transition">
              <h3 className="text-2xl font-bold mb-3">Guess The Number</h3>
              <p className="text-gray-400 mb-4">
                A simple number guessing game built with HTML, CSS, and JavaScript. User gets to guess a number with real-time feedback.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://abdalahmed07.github.io/Guess-The-Number/"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
