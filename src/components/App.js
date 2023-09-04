import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Navbar from "./Navbar";
import Forecast from "./Forecast";
import SevenDayForecast from "./SevenDayForecast";
import weatherIcons from "../assets/weather-icons/icons";
import Settings from "./Settings";

function App() {
  const apiKey = "ddcaa1c34d46125ca8d63b5bc99789ad";
  const [city, setCity] = useState('Tbilisi');
  const [settings, setSettings] = useState({
    temp: 'metric',
    time: '24',
    lang: 'en',
  });

  const { data: weather, isPending, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${settings.temp}`);

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      setCity(event.target.value);
      event.target.value = '';
    }
  };

  return (
    <BrowserRouter>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-1300 h-650 bg-obsidian text-white grid grid-cols-body grid-rows-body gap-x-50 justify-items-center items-center relative">
          <Navbar />
          <input
            type="text"
            placeholder="Search for cities"
            className="self-start border-0 bg-light-obsidian h-50 w-600 rounded-2xl p-4 outline-none bg-opacity-50"
            onKeyUp={handleEnterPress}
          />
          <Routes>
            <Route path="/" element={
              <>
                {error && <p className="col-start-2 row-start-2">{error}</p>}
                {!error && <SevenDayForecast weatherIcons={weatherIcons} units={settings.units} />}
                {!error && <Forecast weather={weather} weatherIcons={weatherIcons} isPending={isPending} units={settings.units} />}
              </>
            } />
            <Route path="/settings" element={<Settings setSettings={setSettings} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
