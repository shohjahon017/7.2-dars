import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import location from "../../images/location.svg";
import arrow from "../../images/arrow.png";
import iphone from "../../images/iphone.png";
import { ThemeContext } from "./Theme";

function Hero() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`container max-w-7xl h-[900px] mx-auto rounded-3xl mt-6 mb-5 ${
        theme === "dark" ? "bg-gray-700" : "bg-blue-200"
      }`}
    >
      <div className="flex gap-[100px] mr-10">
        <div className="pl-[200px] pt-[180px]">
          <h4 className="text-gray-400 font-sans font-bold mb-[19px]">
            {t("security")}
          </h4>
          <h1 className="text-blue-950 font-black text-[45px] max-w-[540px] mb-5">
            {t("title")}
          </h1>
          <div className="w-[574px] h-[1px] bg-gray-300 mb-[17px]"></div>
          <div className="flex items-center gap-8 mb-[70px]">
            <img src={location} alt="" />
            <p className="max-w-[460px] text-blue-950 font-sans text-xl">
              {t("p")}
            </p>
          </div>
          <h2 className="text-black text-[40px] font-extrabold mb-3">
            {t("join")}
          </h2>
          <p className="text-blue-950 font-medium text-xl mb-[33px]">
            {t("beFirst")}
          </p>
          <input
            className="border border-gray-300 rounded-3xl p-4"
            type="text"
            placeholder={t("email")}
          />
        </div>
        <div className="pt-[200px]">
          <img src={iphone} alt="" />
          <img className="ml-56 pt-12" src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
