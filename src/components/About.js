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
          <h2 className="text-2xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <p className="text-lg md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300">
            I’m a seasoned Front-End Developer with a strong foundation in HTML, CSS, JavaScript, and expertise in React, Next.js, Tailwind CSS, Bootstrap, Ant Design, Chakra UI, and Syncfusion UI. My backend knowledge includes Node.js, Express.js, MongoDB, MySQL, and PHP — making me well-equipped to build full-stack solutions with a design-first approach.
          </p>
        </div>
      </div>
    </section>
  );
}
