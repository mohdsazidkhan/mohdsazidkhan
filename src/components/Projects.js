// src/components/Projects.js
import { FaProjectDiagram } from 'react-icons/fa';

const projects = [
  {
    title: "SUBG QUIZ",
    description: "A fun, level-based quiz platform for all age groups. Built with MERN stack.",
    link: "#"
  },
  {
    title: "AI Video Generator",
    description: "An app that converts text to stunning AI-generated 3D stories.",
    link: "#"
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen py-20 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <div className="text-center mb-12">
        <FaProjectDiagram className="text-5xl mx-auto mb-4 text-gray-800 dark:text-white" />
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Projects</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition hover:scale-105 duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-yellow-300">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 my-2">{project.description}</p>
            <a href={project.link} className="text-blue-500 dark:text-yellow-400 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}
