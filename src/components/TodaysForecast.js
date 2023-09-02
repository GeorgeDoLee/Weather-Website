import loading from '../svg/loading.svg'
import useFetch from '../hooks/useFetch';

const TodaysForecast = ({weatherIcons}) => {
    const { data: hours, isPending, error } = useFetch('http://localhost:8000/todaysForecast');

    return (  
        <div className='self-end w-600 h-250 bg-light-obsidian grid grid-rows-forecast gap-10 justify-center items-center p-10 rounded-2xl'>
            <h1 className='self-start justify-self-start ml-4 '>Today's Forecast</h1>

            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className='w-600 grid grid-cols-5 justify-center items-center gap-5'>
                {hours && hours.map((hour) => (
                    <div className='flex flex-col gap-2 justify-center items-center'>
                        <div>{hour.time}</div>
                        <img src={weatherIcons[hour.weather]} alt="icon not found" title={hour.weather} className='h-80 w-80'/>
                        <div>{hour.degree}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default TodaysForecast;