import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LenisScroll from './LenisScroll';
import Intro from './components/Intro';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-all duration-300">
      <LenisScroll />
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
