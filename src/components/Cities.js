import useFetch from "../hooks/useFetch";
import fewClouds from '../assets/weather-icons/few-clouds-day.svg';

const Cities = ({settings}) => {
    const { data: cities, isPending, error } = useFetch('http://localhost:8000/georgianCities');

    return (  
        <>
            <div className="justify-self-stretch self-stretch mt-[20px] row-start-2 col-start-2 overflow-auto grid grid-rows-auto items-center gap-4">
                {cities && cities.map((city, index) => (
                    <div key={index} className="justify-self-stretch h-full bg-light-obsidian bg-opacity-50 rounded-2xl p-2 flex flex-row items-center gap-2">
                        <img src={fewClouds} alt="icon not found" className="h-[80px]" />
                        <h1 className="text-2xl">{city}</h1>
                        <h1 className="text-2xl justify-self-end">30</h1>
                    </div>
                ))}
            </div>
            <div className="row-start-2 col-start-3">
                
            </div>
        </>
    );
}
 
export default Cities;