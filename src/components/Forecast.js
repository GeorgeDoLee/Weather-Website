import TodaysForecast from "./TodaysForecast";

const Forecast = ({weatherIcons}) => {
    

    return (  
        <div className="self-stretch grid grid-rows-2 justify-center items-center  gap-3">
            <div>
                <div className="grid grid-cols-2 grid-rows-2 h-200 pl-30">
                    <div className="self-start justify-self-start">
                        <div className="text-6xl">Tbilisi</div>
                        <div className="text-3xl mt-2">Sunny</div>
                    </div>
                    
                    
                    <img src={weatherIcons.Sunny}  alt="icon not found" className="row-span-2 self-center justify-self-end h-300 w-300"/>

                    <div className="text-5xl self-end justify-self-start">31°</div>
                </div>
            </div>
            <TodaysForecast weatherIcons={weatherIcons} />
        </div>
    );
}

export default Forecast;

// °