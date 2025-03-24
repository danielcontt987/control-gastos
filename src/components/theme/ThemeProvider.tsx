import { useEffect, useState } from "react";

export default function ThemeProvider() {
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      aria-label="Toggle dark mode"
      className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 text-black dark:text-white "
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}
