import Navbar from "./Navbar";
import Forecast from "./Forecast";
import SevenDayForecast from "./SevenDayForecast";
import sunny from '../svg/sunny.svg';
import cloudy from '../svg/cloudy.svg';
import rainy from '../svg/rainy.svg';
import sunnyRainy from '../svg/sunnyRainy.svg';
import thunder from '../svg/thunder.svg';

const Base = () => {
    const weatherIcons = {
        Sunny: sunny,
        Cloudy: cloudy,
        Rainy: rainy,
        "Partly Cloudy": sunnyRainy,
        Thunderstorms: thunder,
    };

    return (  
        <div className="w-fit text-white grid grid-cols-body grid-rows-body gap-x-50 justify-items-center items-center">
            <Navbar />
            <input type="text" placeholder="Search for cities" className="self-start border-0 bg-light-obsidian h-50 w-600 rounded-2xl p-4 outline-none" />
            <SevenDayForecast weatherIcons={weatherIcons} />
            <Forecast weatherIcons={weatherIcons} />
        </div>
    );
}
 
export default Base;