// src/components/Intro.js
import { Typewriter } from 'react-simple-typewriter';
import { FaCode } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-200 via-red-300 to-pink-400 dark:from-[#1a2a6c] dark:via-[#b21f1f] dark:to-[#fdbb2d] text-center transition-colors duration-500 px-4">
      <FaCode className="text-5xl mb-4 text-black dark:text-white animate-pulse" />
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-black dark:text-white">
        Hi, I'm <span className="text-blue-600 dark:text-yellow-300">MOHDSAZIDKHAN</span>
      </h1>

      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-300">
        <Typewriter
          words={[
            'Software Engineer 💻',
            'Frontend Expert 🚀',
            'Full Stack Developer 🔧',
            'React + Tailwind Lover 💙'
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>
    </section>
  );
}
