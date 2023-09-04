

const LoadingTodaysForecast = () => {
    return (  
        <div className='w-600 grid grid-cols-5 justify-center items-center gap-5'>
            {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex flex-col gap-2 justify-center items-center duration-300 ease-linear hover:scale-110 cursor-pointer">
                    <div className="bg-light-obsidian h-6 w-60 rounded-md animate-pulse"></div>
                    <div className='bg-light-obsidian h-70 w-70 rounded-md animate-pulse'></div>
                    <div className="bg-light-obsidian h-5 w-8 rounded-sm animate-pulse"></div>
                </div>
            ))}
        </div>
    );
}
 
export default LoadingTodaysForecast;