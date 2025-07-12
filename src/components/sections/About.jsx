import { useEffect } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

export default function About() {
  useEffect(() => {
    const scrollToSection = () => {
      const element = document.getElementById("about");
      if (window.location.hash === "#about" && element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth"
        });
      }
    };

    window.addEventListener("hashchange", scrollToSection);
    return () => window.removeEventListener("hashchange", scrollToSection);
  }, []);

  const frontendSkills = ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js"];
  const backendSkills = ["Node.js", "Express.js", "MongoDB"];

  return (
    <section id="about" className="pt-32 pb-32 bg-black min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <RevealOnScroll>
          <div className="glass rounded-xl p-8 border border-white/10 hover:translate-y-1 transition-all text-center">
            <h3 className="text-2xl font-bold mb-8 text-white">🎓 Education</h3>
            <div className="space-y-10">
              <div>
                <p className="text-sm text-gray-400">2023 – 2024</p>
                <h4 className="text-lg font-semibold text-white">Matriculation (Science Group)</h4>
                <p className="text-sm text-gray-400">Karachi Cambridge School</p>
                <p className="text-sm text-gray-400">Board of Secondary Education, Karachi</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">November 2024 – March 2025</p>
                <h4 className="text-lg font-semibold text-white">Diploma in MERN Stack Development</h4>
                <p className="text-sm text-gray-400">UIT University, Karachi</p>
                <p className="text-sm italic text-yellow-400">4-Month Professional Training Program</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">2024 – 2025</p>
                <h4 className="text-lg font-semibold text-white">Intermediate in Computer Science</h4>
                <p className="text-sm text-gray-400">Boys Degree Government College 5L, New Karachi</p>
                <p className="text-sm text-gray-400">Board of Intermediate Education, Karachi</p>
                <p className="text-sm italic text-yellow-400">1st Year Result Awaited</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mt-16 glass rounded-xl p-8 border border-white/10 hover:translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-center">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
