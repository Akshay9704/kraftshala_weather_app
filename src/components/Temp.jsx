import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { MdSunny } from "react-icons/md";
import { MdNightlight } from "react-icons/md";
import { GoSun } from "react-icons/go";
import { FiMoon } from "react-icons/fi";

const Temp = ({ theme, setTheme, setCity, stats }) => {
  //   Handle the search input
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  //   Handle the theme change
  const handleThemeChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-col items-center lg:flex-row lg:justify-between">
        <input
          onChange={handleCityChange} // Handle the search input
          defaultValue="Jaipur"
          type="text"
          placeholder="Enter your city name"
          className={`${
            theme === "dark"
              ? "bg-slate-600 text-slate-200"
              : "bg-slate-200 text-slate-800"
          } border border-slate-500 placeholder-slate-400 text-md w-60 p-2 focus:outline-none focus:border-slate-400`}
        />
        <div className="flex gap-4 m-4">
          <SlLocationPin
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } text-2xl cursor-pointer text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out`}
          />
          {theme === "light" ? (
            <MdNightlight
              onClick={handleThemeChange}
              className="text-black text-2xl cursor-pointer text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          ) : (
            <MdSunny
              onClick={handleThemeChange}
              className="text-white text-2xl cursor-pointer text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          )}
        </div>
      </div>
      <div className="flex justify-center mt-4 lg:mt-8">
        {stats.isDay !== 0 ? (
          <GoSun className="text-yellow-500 text-5xl text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out" />
        ) : (
          <FiMoon
            className={`${
              theme === "dark" ? "text-slate-200" : "text-slate-600"
            } text-5xl text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out`}
          />
        )}
      </div>
      <div className="flex justify-center mt-5">
        <h1
          className={`text-6xl font-semibold ${
            theme === "dark" ? "text-white" : "text-slate-800"
          }`}
        >
          {stats.temp}&deg;C
        </h1>
      </div>
      <div className="flex justify-center items-center text-slate-300 mt-8 text-[25px]">
        <h1
          className={`${
            theme === "dark" ? "text-slate-300" : "text-slate-500"
          }`}
        >
          {stats.condition}
        </h1>
      </div>
      <div className="flex justify-center items-center text-slate-400 mt-5 text-[15px]">
        <h1>Date: {stats.time} | {stats.location} </h1>
      </div>
    </>
  );
};

export default Temp;
