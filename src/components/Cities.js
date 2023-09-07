import useFetch from "../hooks/useFetch";

const Cities = () => {
    const {data: cities, isPending, error} = useFetch("http://localhost:8000/georgianCities");

    return (  
        <>
            <div className='row-start-2 col-start-2 justify-self-stretch self-stretch grid grid-rows-auto grid-cols-2 justify-items-stretch items-stretch gap-2 p-2 overflow-auto'>
                {cities && cities.map((city, index) => (
                    <div className="bg-light-obsidian bg-opacity-50 rounded-lg text-lg text-center p-4 cursor-pointer duration-300 hover:bg-opacity-70 active:scale-95">
                        {city}
                    </div>
                ))}
            </div>
        </>
    );
}
 
export default Cities;