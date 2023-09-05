import useFetch from "../hooks/useFetch";


const Cities = ({settings}) => {
    const { data: cities, isPending, error } = useFetch('http://localhost:8000/georgianCities');

    return (  
        <>
            <div className="justify-self-stretch self-stretch mt-[20px] row-start-2 col-start-2 overflow-auto grid grid-rows-auto items-center gap-4">
                {cities && cities.map((city, index) => (
                    <div key={index} className="justify-self-stretch bg-light-obsidian bg-opacity-50 h-[80px] rounded-2xl">
                        {city}
                    </div>
                ))}
            </div>
            <div className="row-start-2 col-start-3">
                alo
            </div>
        </>
    );
}
 
export default Cities;