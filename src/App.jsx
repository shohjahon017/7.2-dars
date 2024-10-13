import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { ThemeContext } from "./components/Theme";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`container mx-auto ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
