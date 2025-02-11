import { useEffect, useState } from "react";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={theme}>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed bottom-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 rounded"
      >
        Toggle Theme
      </button>
      {children}
    </div>
  );
}
