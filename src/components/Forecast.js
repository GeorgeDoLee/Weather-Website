import TodaysForecast from "./TodaysForecast";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

const Forecast = ({weatherIcons}) => {
    const [city, setCity] = useState('Ozurgeti');
    const { data: currentWeather, isPending, error } = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ddcaa1c34d46125ca8d63b5bc99789ad&units=metric`);
    
    return (  
        <div className="self-stretch grid grid-rows-2 justify-center items-center  gap-3">
            <div>
                <div className="grid grid-cols-2 grid-rows-2 h-200 pl-30">
                    {currentWeather &&
                        <div className="self-start justify-self-start">
                            <div className="text-6xl">{currentWeather.name}</div>
                            <div className="text-3xl mt-2">{currentWeather.weather[0].main}</div>
                        </div>
                    }
                    
                    
                    
                    <img src={weatherIcons.Sunny}  alt="icon not found" className="row-span-2 self-center justify-self-end h-300 w-300"/>

                   {currentWeather && <div className="text-5xl self-end justify-self-start">{currentWeather.main.temp}°</div>}
                </div>
            </div>
            <TodaysForecast weatherIcons={weatherIcons} />
        </div>
    );
}

export default Forecast;

// °