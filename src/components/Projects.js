// src/components/Projects.js
import { useEffect, useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "SUBG Quiz",
    link: "https://subgquiz.com",
    desc: "A quiz platform with levels, subscription models, and manual result control.",
  },
  {
    name: "Kuexa",
    link: "https://kuexa.com",
    desc: "A modern platform for salon booking and management solutions.",
  },
  {
    name: "AppNEA",
    link: "https://www.app-nea.com",
    desc: "Healthcare and therapy assistance platform for sleep apnea patients.",
  },
  {
    name: "ShipFinex",
    link: "https://www.shipfinex.com",
    desc: "Decentralized maritime investment platform powered by Web3.",
  },
];


export default function Projects() {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={ref}
      className="h-screen px-6 py-20 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900 dark:to-indigo-800 transition-colors duration-500 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-2 md:gap-6">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-900 p-2 md:p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between hover:scale-[1.01]"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.desc}
                </p>
              </div>
              <span className="text-blue-600 dark:text-yellow-300 flex items-center gap-1 text-sm font-medium mt-auto">
                Visit Site <FaExternalLinkAlt />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
