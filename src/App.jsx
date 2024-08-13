import React, { useEffect, useState } from "react";
import Weather from "./components/Weather";

import WeatherBackgrounds from "./WeatherBackgrounds";
const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    main: {
      temp: "temperature",
      feels_like: "0",
      humidity: "0",
    },
    weather: [
      {
        description: "description",
        main: "load",
      },
    ],
    visibility: 0,
    wind: {
      speed: "0",
    },
  });
  useEffect(() => {
    getLocation();
  }, []);
  //empty dependency array=makes sure function will run only one time when app reloads .
  //useEffects runs at last after whole app component is mounted and  function is also created .

  function getLocation() {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const lat = pos.coords.latitude;
      const long = pos.coords.longitude;
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=95e3cc6f78695ec80cf6a27db13183b8`
        );
        const data = await response.json();

        if (!response.ok) {
          throw "erorrr";
        }
        setError(false);
        setWeather(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    });
  }

  async function fetchWeather(cityName) {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=95e3cc6f78695ec80cf6a27db13183b8`
        );
      const data = await response.json();
      if(!response.ok){
        throw "error"
      }
        setError(false);
      setWeather(data);

    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
    
  }

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${
          WeatherBackgrounds[weather.weather[0].main].pic
        })`,
      }}
    >
      <Weather
        handleCity={fetchWeather}
        data={weather}
        getLocation={getLocation}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};

export default App;
// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=95e3cc6f78695ec80cf6a27db13183b8
