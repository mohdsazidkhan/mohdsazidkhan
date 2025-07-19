// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-center py-6 transition-colors duration-300">
      <p className="text-gray-800 dark:text-gray-300">
        &copy; {new Date().getFullYear()} Mohd Sazid Khan. All rights reserved.
      </p>
    </footer>
  );
}
