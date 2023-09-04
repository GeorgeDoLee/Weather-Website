import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import LoadingSevenDayForeast from "./loading-components/LoadingSevenDayForecast";

const SevenDayForecast = ({weatherIcons, units}) => {
    const { data: daily, isPending, error } = useFetch('http://localhost:8000/sevenDayForecast');
    const [animationIndex, setAnimationIndex] = useState(null);
    
    useEffect(() => {
        if(daily && daily.length > 0){
            let animationIndex = 0;
    
            const animationInterval = setInterval(() => {
                if (animationIndex < daily.length) {
                    setAnimationIndex(animationIndex);
                    animationIndex++;
                } else {
                    setAnimationIndex(null);
                    clearInterval(animationInterval);
                }
            }, 100); 
        
            return () => clearInterval(animationInterval);
        }
    }, [daily]);

    return (
        <div className="self-stretch row-span-2 bg-light-obsidian w-400 grid grid-rows-forecast p-20 rounded-xl bg-opacity-50">
            <h1>7-Day Forecast</h1>

            {isPending && <LoadingSevenDayForeast />}
            {error && <p>{error}</p> }
            <div className="justify-self-center self-start grid grid-rows-8">
                {daily && daily.map((day, index) => (
                    <div key={index} className={`self-center justify-self-center grid grid-cols-3 items-center w-350 h-75 border-b-2 last:border-b-0 mt-2 pb-2 duration-300 hover:scale-105 cursor-pointer ${animationIndex === index ? 'scale-105': ''}`}>
                        <h5 className="justify-self-start">{day.day}</h5>
                        <img src={weatherIcons[day.id]} alt="icon not found" title={day.weather} className="justify-self-center h-50"/>
                        <h4 className="justify-self-center">{day.temperature[units]}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
} 
 
export default SevenDayForecast;