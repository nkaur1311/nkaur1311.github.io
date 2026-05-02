import { useState, useEffect } from "react";
import { PortfolioPage } from "@/pages/portfolio";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SmoothScrollProvider } from "@/components/ui/SmoothScroll";
import { applyThemePalette } from "@/lib/themes";
import { config } from "@/portfolio.config";

function App() {
  const [theme, setTheme] = useState<string>(() => {
    const stored = localStorage.getItem("portfolio-theme");
    if (stored) return stored;
    if (config.defaultTheme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return config.defaultTheme;
  });

  // Apply dark/light class + color palette whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    const isDark = theme === "dark";
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("portfolio-theme", theme);
    applyThemePalette(config.colorPreset, isDark, config.customColors);
  }, [theme]);

  // Also apply on first mount (covers SSR / fast-refresh edge cases)
  useEffect(() => {
    applyThemePalette(
      config.colorPreset,
      theme === "dark",
      config.customColors,
    );
  }, []);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <PortfolioPage theme={theme} onToggleTheme={toggleTheme} />
    </SmoothScrollProvider>
  );
}

export default App;
