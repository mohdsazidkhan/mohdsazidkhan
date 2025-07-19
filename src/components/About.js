// src/components/About.js
import { FaUserTie } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const innerRef = useRef();

  useEffect(() => {
    gsap.fromTo(innerRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: innerRef.current,
          start: "top 80%",
          scrub: true,
        }
      });
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-100 to-indigo-300 dark:from-purple-700 dark:to-indigo-800 transition-colors duration-500">
      <div ref={innerRef} className="sticky top-0 h-screen flex items-center justify-center">
        <div className="text-center px-6 max-w-3xl">
          <FaUserTie className="text-5xl mx-auto mb-6 text-indigo-800 dark:text-yellow-400 animate-bounce" />
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <p className="text-2xl leading-relaxed text-gray-700 dark:text-gray-300">
            I'm <span className="font-semibold text-blue-600 dark:text-yellow-300">Mohd Sazid Khan</span>, a passionate Software Engineer specializing in full-stack development using the MERN stack.
            <br /><br />
            I love transforming complex ideas into engaging, accessible, and user-first interfaces — with a performance-focused approach.
          </p>
        </div>
      </div>
    </section>
  );
}
