
const LoadingSevenDayForeast = () => {
    return (  
        <div className="justify-self-center self-start grid grid-rows-8">
            {Array.from({ length: 7 }).map((_, index) => (
                <div key={index} className="self-center justify-self-center grid grid-cols-3 items-center w-350 h-75 border-b-2 last:border-b-0 mt-2 pb-2">
                    <h5 className="bg-light-obsidian h-5 w-80 rounded-md justify-self-start animate-pulse"></h5>
                    <div className="bg-light-obsidian justify-self-center h-50 w-50 rounded-full animate-pulse" ></div>
                    <h4 className="bg-light-obsidian h-5 w-6 rounded-md justify-self-center animate-pulse"></h4>
                </div>
            ))}
        </div>
    );
}
 
export default LoadingSevenDayForeast;