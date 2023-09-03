import useFetch from "../hooks/useFetch";

const SevenDayForecast = ({weatherIcons}) => {
    const { data: days, isPending, error } = useFetch('http://localhost:8000/sevenDayForecast');

    return (  
        <div className="self-stretch row-span-2 bg-light-obsidian w-400 grid gric-rows-8 p-20 rounded-xl ">
            <h1>7-Day Forecast</h1>

            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p> }
            {days && days.map((day) => ( 
                <div className="self-center justify-self-center grid grid-cols-3 justify-center items-center w-350 h-80 border-b-2 last:border-b-0 mt-10 pb-10">
                    <h5 className="justify-self-start">{day.day}</h5>
                    <div className="flex flex-col justify-center items-center">
                        <img src={weatherIcons[day.id]} alt="icon not found" className="h-40"/>
                        <h6 className="text-sm">{day.weather}</h6>
                    </div>
                    <h4 className="justify-self-center">{day.degree}</h4>
                </div>
            ))}
        </div>
    );
} 
 
export default SevenDayForecast;