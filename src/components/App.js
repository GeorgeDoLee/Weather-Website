import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Navbar from "./Navbar";
import Forecast from "./Forecast";
import SevenDayForecast from "./SevenDayForecast";
import weatherIcons from "../assets/icons";

function App() {
  const apiKey = "ddcaa1c34d46125ca8d63b5bc99789ad";
  const [city, setCity] = useState('Tbilisi');
  const [units, setUnits] = useState('metric');
  const { data: weather, isPending, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`);

  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      setCity(event.target.value);
      event.target.value = '';
    }
  };
  
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1300 h-9/12 bg-obsidian text-white grid grid-cols-body grid-rows-body gap-x-50 justify-items-center items-center">
          <Navbar />
          <input 
            type="text" 
            placeholder="Search for cities" 
            className="self-start border-0 bg-light-obsidian h-50 w-600 rounded-2xl p-4 outline-none"
            onKeyUp={handleEnterPress}
          />
          {isPending && <p>Loading...</p>}
          {error && <p className="col-start-2 row-start-2">{error}</p>}
          {weather && <SevenDayForecast weatherIcons={weatherIcons} />}
          {weather && <Forecast weather={weather} weatherIcons={weatherIcons} />}
      </div>
    </div>
  );
}

export default App;
