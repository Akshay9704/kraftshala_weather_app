import React from "react";
import { FaWind } from "react-icons/fa";
import { BsDroplet } from "react-icons/bs";
import { MdOutlineVisibility } from "react-icons/md";
import { GiWindSlap } from "react-icons/gi";

const Highlights = ({ theme, stats }) => {
  return (
    <>
     {/* WIND SPEED COMPONENT */}
      <div
        className={`${
          theme === "dark"
            ? "bg-slate-600 text-slate-200"
            : "bg-slate-200 text-slate-800"
        } p-2 flex flex-col justify-start items-center text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out`}
      >
        <h1 className="text-md mt-2">Wind Speed</h1>
        <div className="mt-2">
          <span className="text-4xl font-bold">{stats.windSpeed}</span>
          <span className="text-2xl">{stats.windSpeedUnit}</span>
        </div>
        {stats.windDir ? (
          <div className="mt-2 flex">
            <FaWind className="text-xl" />
            <h2 className="ms-2 font-semibold">{stats.windDir}</h2>
          </div>
        ) : null}
      </div>

      {/* HUMIDITY COMPONENT */}
        <div
          className={`${
            theme === "dark"
              ? "bg-slate-600 text-slate-200"
              : "bg-slate-200 text-slate-800"
          } p-2 flex flex-col justify-start items-center text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out`}
        >
          <h1 className="text-md mt-2">Humidity</h1>
          <div className="mt-5 flex items-center">
            <BsDroplet className="text-3xl" />
            <div>
              <span className="ms-2 text-4xl">{stats.humidity}</span>
              <span className="ms-1 text-2xl">{stats.humidityUnit}</span>
            </div>
          </div>
        </div>

      {/* VISIBILITY COMPONENT */}
      <div
        className={`${
          theme === "dark"
            ? "bg-slate-600 text-slate-200"
            : "bg-slate-200 text-slate-800"
        } p-2 flex flex-col justify-start items-center text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out`}
      >
        <h1 className="text-md mt-2">Visibility</h1>
        <div className="mt-2">
          <MdOutlineVisibility className="text-3xl" />
        </div>
        <div className="mt-2">
          <span className="text-4xl font-bold">{stats.visibility}</span>
          <span className="text-2xl">{stats.visibilityUnit}</span>
        </div>
      </div>

      {/* AIR PRESSURE COMPONENT */}
      <div
        className={`${
          theme === "dark"
            ? "bg-slate-600 text-slate-200"
            : "bg-slate-200 text-slate-800"
        } p-2 flex flex-col justify-start items-center text-transform scale-100 hover:scale-110 transition-transform duration-300 ease-in-out`}
      >
        <h1 className="text-md mt-2">Air Pressure</h1>
        <div className="mt-2">
          <GiWindSlap className="text-3xl" />
        </div>
        <div className="mt-2">
          <span className="text-4xl font-bold">{stats.airPressure}</span>
          <span className="text-2xl">{stats.airPressureUnit}</span>
        </div>
      </div>
    </>
  );
};

export default Highlights;
