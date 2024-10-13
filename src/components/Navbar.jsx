import React, { useContext } from "react";
import { ThemeContext } from "./Theme";
import { useTranslation } from "react-i18next";
import vector from "../../images/vector.png";

function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav
      className={`container flex justify-between items-center p-4 shadow-md ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="text-lg font-bold font-sans px-20 cursor-pointer">
        {t("logo")}
      </div>
      <ul className="flex gap-5">
        <a href="#" className="flex items-center gap-4">
          {t("assets")} <img src={vector} alt="" />
        </a>
        <a href="#">{t("creators")}</a>
        <a href="#">{t("careers")}</a>
        <a href="#">{t("goPro")}</a>
      </ul>
      <div className="flex items-center gap-4">
        <input
          className="border border-gray-300 rounded-3xl p-4 mr-20"
          type="text"
          placeholder={t("search")}
        />
        <select
          className="border rounded-lg"
          onChange={(e) => changeLanguage(e.target.value)}
        >
          <option value="uz">uz</option>
          <option value="ru">ru</option>
          <option value="en">en</option>
        </select>
        <button className="mr-10" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
