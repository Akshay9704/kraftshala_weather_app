import { useState, useEffect } from "react";
import Temp from "./components/Temp";
import Highlights from "./components/highlights";

function App() {
  const [theme, setTheme] = useState('dark');    // State to manage the theme of the app
  const [city, setCity] = useState('Jaipur');    // State to manage the city name
  const [weatherData, setWeatherData] = useState();  // State to manage the weather data

  const apiURL = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&aqi=no`

  useEffect(() => {
    fetch(apiURL)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not get data");
        }
        return res.json();
      })
      .then((data) => {
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city, apiURL]);

  return (
    // MAIN CONTAINER
    <div className={`${theme === 'dark' ? 'bg-[#1F213A]' : 'bg-white'} h-[100vh] flex flex-col lg:flex-row items-center lg:items-start lg:justify-center lg:align-top`}>

      {/* LEFT TEMPERATURE COMPONENT */}
      <div className="mt-0 lg:mt-40 lg:w-1/5 lg:h-1/3">
        {weatherData &&
          <Temp theme={theme} setTheme={setTheme} setCity={setCity}
            stats={{
              city: city,
              temp: weatherData?.current.temp_c,
              condition: weatherData?.current.condition.text,
              isDay: weatherData?.current.is_day,
              location: weatherData?.location.name,
              time: weatherData?.location.localtime,
            }}
          />
        }
      </div>

      {/* RIGHT HIGHLIGHTS COMPONENT */}
      <div className="-mt-5 lg:mt-40 lg:w-1/3 lg:h-1/3 p-10 grid grid-cols-2 gap-6">
        <h1 className={`${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'} text-slate-200 text-2xl col-span-2`}>Today's Highlights</h1>
        {weatherData &&
          <>
            <Highlights theme={theme} setTheme={setTheme}
              stats={{
                windSpeed: weatherData?.current.wind_mph,
                windSpeedUnit: 'mph',
                windDir: weatherData?.current.wind_dir,
                humidity: weatherData?.current.humidity,
                humidityUnit: '%',
                visibility: weatherData?.current.vis_miles,
                visibilityUnit: 'miles',
                airPressure: weatherData?.current.pressure_mb,
                airPressureUnit: 'mb',
              }}
            />
          </>
        }
      </div>

    </div>
  );
}

export default App;
