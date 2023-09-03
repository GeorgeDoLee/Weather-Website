import useFetch from "../hooks/useFetch";

const SevenDayForecast = ({weatherIcons}) => {
    const { data: days, isPending, error } = useFetch('http://localhost:8000/sevenDayForecast');

    return (
        <div className="self-stretch row-span-2 bg-light-obsidian w-400 grid gric-rows-8 p-20 rounded-xl ">
            <h1>7-Day Forecast</h1>

            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p> }
            {days && days.map((day) => (
                <div className="self-center justify-self-center grid grid-cols-3 items-center w-350 h-70 border-b-2 last:border-b-0 mt-2 pb-2 duration-300 hover:scale-105 cursor-pointer">
                    <h5 className="justify-self-start">{day.day}</h5>
                    <img src={weatherIcons[day.id]} alt="icon not found" title={day.weather} className="justify-self-center h-50"/>
                    <h4 className="justify-self-center">{day.degree}</h4>
                </div>
            ))}
        </div>
    );
} 
 
export default SevenDayForecast;