
const LoadingForecast = () => {
    return (  
        <div className="self-center">
            <div className="grid grid-cols-2 grid-rows-2 h-[250px] pl-[30px]">
                <div className="self-start justify-self-start mt-2 ml-2">
                    <div className="bg-light-obsidian text-6xl w-[250px] h-[60px] rounded-md animate-pulse"></div>
                    <div className="bg-light-obsidian text-3xl mt-2 w-[100px] h-9 rounded-md animate-pulse"></div>
                </div>
                
                <div className="bg-light-obsidian row-span-2 self-center justify-self-center h-[150px] w-[150px] rounded-full animate-pulse"></div>

                <div className="bg-light-obsidian self-end justify-self-start mb-2 ml-2 h-[50px] w-[100px] rounded-md animate-pulse"></div>
            </div>
        </div>
    );
}
 
export default LoadingForecast;