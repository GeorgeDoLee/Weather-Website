import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import LoadingTodaysForecast from './loading-components/LoadingTodaysForecast';

const TodaysForecast = ({weatherIcons, settings}) => {
    const { data: hourly, isPending, error } = useFetch('http://localhost:8000/todaysForecast');
    const [animationIndex, setAnimationIndex] = useState(null);

    useEffect(() => {
        if(hourly && hourly.length > 0){
            let animationIndex = 0;
    
            const animationInterval = setInterval(() => {
                if (animationIndex < hourly.length) {
                    setAnimationIndex(animationIndex);
                    animationIndex++;
                } else {
                    setAnimationIndex(null);
                    clearInterval(animationInterval);
                }
            }, 100); 
        
            return () => clearInterval(animationInterval);
        }
    }, [hourly]);

    return (  
        <div className='self-end w-[600px] h-[250px] bg-light-obsidian grid grid-rows-forecast justify-center items-center p-[10px] rounded-2xl bg-opacity-50'>
            <h1 className='ml-4 '>Today's Forecast</h1>

            {isPending && <LoadingTodaysForecast />}
            {error && <p>{error}</p>}
            <div className='w-[600px] grid grid-cols-5 justify-center items-center gap-5'>
                {hourly && hourly.map((hour, index) => (
                    <div key={index} className={`flex flex-col gap-2 justify-center items-center duration-300 ease-linear hover:scale-110 cursor-pointer    ${animationIndex === index ? 'scale-110': ''}`}>
                        <div>{hour.time[settings.time]}</div>
                        <img src={weatherIcons[hour.id]} alt="icon not found" title={hour.weather} className='h-[80px] w-[80px]'/>
                        <div>{hour.temperature[settings.temp]}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default TodaysForecast;