import { Moon, Sun } from 'lucide-react';
import { useEffect, useLayoutEffect, useState } from 'react'

const ThemeToggle = () => {
    const [theme, setTheme] = useState<string | null>(null);

    // Set Initial Theme on Component Mount
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

        setTheme(initialTheme);
    }, []);

    // Toggle Theme Function
    function toggleTheme() {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <button className="p-2 rounded-lg bg-neutral-800 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-800 cursor-pointer" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}

export default ThemeToggle