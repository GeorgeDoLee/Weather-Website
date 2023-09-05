import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Navbar from "./Navbar";
import Forecast from "./Forecast";
import SevenDayForecast from "./SevenDayForecast";
import weatherIcons from "../assets/weather-icons/icons";
import Settings from "./Settings";
import SearchField from "./SearchField";
import Cities from "./Cities";

function App() {
  const apiKey = "ddcaa1c34d46125ca8d63b5bc99789ad";
  const [city, setCity] = useState('Tbilisi');
  const [settings, setSettings] = useState({
    temp: 'metric',
    time: 24,
    lang: 'en',
  });

  const { data: weather, isPending, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${settings.temp}`);

  return (
    <BrowserRouter>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="w-[1300px] h-[650px] bg-obsidian text-white grid grid-cols-body grid-rows-body gap-x-[50px] justify-items-center items-center relative ">
          <Navbar />
          <SearchField setCity={setCity} />
          <Routes>
            <Route path="/" element={
              <>
                {error && <p className="col-start-2 row-start-2">{error}</p>}
                {!error && <SevenDayForecast weatherIcons={weatherIcons} units={settings.temp} />}
                {!error && <Forecast weather={weather} weatherIcons={weatherIcons} isPending={isPending} settings={settings} />}
              </>
            } />
            <Route path="/settings" element={<Settings settings={settings} setSettings={setSettings} />} />
            <Route path="/cities" element={<Cities settings={settings} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
