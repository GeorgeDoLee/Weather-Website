
const LoadingForecast = () => {
    return (  
        <div className="self-center">
            <div className="grid grid-cols-2 grid-rows-2 h-250 pl-30">
                <div className="self-start justify-self-start mt-2 ml-2">
                    <div className="bg-light-obsidian text-6xl w-250 h-60 rounded-md animate-pulse"></div>
                    <div className="bg-light-obsidian text-3xl mt-2 w-100 h-9 rounded-md animate-pulse"></div>
                </div>
                
                <div className="bg-light-obsidian row-span-2 self-center justify-self-center h-150 w-150 rounded-full animate-pulse"></div>

                <div className="bg-light-obsidian self-end justify-self-start mb-2 ml-2 h-50 w-100 rounded-md animate-pulse"></div>
            </div>
        </div>
    );
}
 
export default LoadingForecast;