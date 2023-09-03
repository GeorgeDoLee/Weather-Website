import TodaysForecast from "./TodaysForecast";
import useFetch from "../hooks/useFetch";
import { useState } from "react";

const Forecast = ({weather, weatherIcons}) => {

    return (  
        <div className="self-stretch grid grid-rows-2 justify-center items-center  gap-3">
            <div className="self-end">
                <div className="grid grid-cols-2 grid-rows-2 h-250 pl-30">
                    <div className="self-start justify-self-start">
                        <div className="text-6xl">{weather.name}</div>
                        <div className="text-3xl mt-2">{weather.weather[0].main}</div>
                    </div>
                    
                    <img src={weatherIcons[weather.weather[0].icon]}  alt="icon not found" className="row-span-2 self-center justify-self-end h-320 w-320"/>

                   <div className="text-5xl self-end justify-self-start">{weather.main.temp}°</div>
                </div>
            </div>
            <TodaysForecast weatherIcons={weatherIcons} />
        </div>
    );
}

export default Forecast;

// °