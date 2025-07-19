// src/components/Contact.js
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { y: 60, opacity: 0 },
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
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-pink-200 to-red-300 dark:from-pink-700 dark:to-red-800 transition-colors duration-500 flex items-center"
    >
      <div className="max-w-xl mx-auto text-center w-full">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Let’s Connect
        </h2>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
          Reach out to me anytime on the platforms below 👇
        </p>

        <div className="flex justify-center gap-6 text-3xl">
          <a
            href="https://github.com/mohdsazidkhan"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-gray-800 dark:text-white hover:text-black dark:hover:text-yellow-400 transition" />
          </a>
          <a
            href="https://linkedin.com/in/mohdsazidkhan"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-400 transition" />
          </a>
          <a
            href="mailto:khansazidmohd@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope className="text-red-600 dark:text-yellow-300 hover:text-red-800 dark:hover:text-white transition" />
          </a>
        </div>
      </div>
    </section>
  );
}
