import { useEffect, useState } from "react";

const Settings = ({ settings, setSettings }) => {
    const [temperature, setTemperature] = useState(settings.temp);
    const [time, setTime] = useState(settings.time);

    useEffect(() => {
        setSettings({
            temp: temperature,
            time: time,
        })
    }, [temperature, time, setSettings])

    return ( 
        <div className="row-start-2 col-start-2 justify-self-center self-start mt-[30px] bg-light-obsidian bg-opacity-50 w-[600px]  rounded-2xl grid grid-rows-3 gap-5 justify-stretch items-center p-5">
            <div className="flex flex-col gap-2 ">
                <h1>Temperature</h1>
                <div className="bg-obsidian bg-opacity-65 h-50 grid grid-cols-2 rounded-2xl justify-items-center items-center text-xl">
                    <button className={`${temperature === 'metric' ? 'bg-light-obsidian' : 'hover:bg-light-obsidian hover:bg-opacity-50'} duration-300 rounded-2xl w-[250px] h-[35px]`} onClick={() => setTemperature('metric')}>Celsius</button>
                    <button className={`${temperature === 'imperial' ? 'bg-light-obsidian' : 'hover:bg-light-obsidian hover:bg-opacity-50'} duration-300 rounded-2xl w-[250px] h-[35px]`} onClick={() => setTemperature('imperial')}>Fahrenheit</button>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h1>Time Format</h1>
                <div className="bg-obsidian bg-opacity-65 h-[50px] grid grid-cols-2 rounded-2xl justify-items-center items-center text-xl">
                    <button className={`${time === 24 ? 'bg-light-obsidian' : 'hover:bg-light-obsidian hover:bg-opacity-50'} duration-300 rounded-2xl w-[250px] h-[35px]`} onClick={() => setTime(24)}>24-hour</button>
                    <button className={`${time === 12 ? 'bg-light-obsidian' : 'hover:bg-light-obsidian hover:bg-opacity-50'} duration-300 rounded-2xl w-[250px] h-[35px]`} onClick={() => setTime(12)}>12-hour</button>
                </div>

            </div>

            <div className="flex flex-col gap-2">
                <h1>Language</h1>
                <select className="bg-obsidian bg-opacity-65 h-50 p-2 rounded-2xl cursor-pointer focus:outline-0">
                    <option className="bg-obsidian bg-opacity-65 border-0 outline-0 hover:bg-light-obsidian">English</option>
                    <option className="bg-obsidian bg-opacity-65 border-0 outline-0 hover:bg-light-obsidian">Georgian</option>
                </select>

            </div>
            
        </div>
    );
}
 
export default Settings;