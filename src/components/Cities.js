import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Cities = () => {
    const {data: cities, isPending, error} = useFetch("http://localhost:8000/georgianCities");
    const [selectedCity, setSelectedCity] = useState('Tbilisi');

    return (  
        <>
            <div className='row-start-2 col-start-2 justify-self-stretch self-stretch grid grid-rows-auto grid-cols-2 justify-items-stretch items-stretch gap-2 p-2 overflow-auto'>
                {cities && cities.map((city, index) => (
                    <div 
                        className={`${ selectedCity === city ? 'bg-transparent border-light-obsidian border-2' : 'bg-light-obsidian'} bg-opacity-50 rounded-lg text-lg text-center p-4 cursor-pointer duration-300 hover:bg-opacity-70 active:scale-95`}
                        onClick={() => setSelectedCity(city)}
                    >
                        {city}
                    </div>
                ))}
            </div>

            <div>
                    // detailed forecast of the selected city here... coming soon :)) 
            </div>
        </>
    );
}
 
export default Cities;