import TodaysForecast from "./TodaysForecast";

const Forecast = ({weather, weatherIcons}) => {

    return (  
        <div className="self-stretch grid grid-rows-2 justify-center items-center gap-3">
            <div className="self-center">
                <div className="grid grid-cols-2 grid-rows-2 h-250 pl-30">
                    <div className="self-start justify-self-start mt-2 ml-2">
                        <div className="text-6xl">{weather.name}</div>
                        <div className="text-3xl mt-2">{weather.weather[0].main}</div>
                    </div>
                    
                    <img src={weatherIcons[weather.weather[0].icon]} title={weather.weather[0].description} alt="icon not found" className="row-span-2 self-center justify-self-center h-320  duration-300 hover:scale-105 cursor-pointer"/>

                   <div className="text-5xl self-end justify-self-start mb-2 ml-2">{Math.round(weather.main.temp)}°</div>
                </div>
            </div>
            <TodaysForecast weatherIcons={weatherIcons} />
        </div>
    );
}

export default Forecast;

// °