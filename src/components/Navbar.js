export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-800 sticky top-0 z-50">
      <h1 className="text-xl font-bold">MOHDSAZIDKHAN</h1>
      <button onClick={toggleDarkMode} className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700">
        {darkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}
