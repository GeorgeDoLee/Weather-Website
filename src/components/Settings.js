
const Settings = ({ setSettings }) => {

    const handleTemp = (temp) => {
        setSettings(prev => ({
            ...prev, 
            temp: temp, 
        }));
    }
    
    const handleTime = (time) => {
        setSettings(prev => ({
            ...prev, 
            time: time,  // it can be either '12' or '24' 
        }));
    }

    return ( 
        <div className="row-start-2 col-start-2 justify-self-center self-start mt-30 bg-light-obsidian bg-opacity-50 w-600  rounded-2xl grid grid-rows-3 gap-5 justify-stretch items-center p-5">
            <div className="flex flex-col gap-2 ">
                <h1>Temperature</h1>
                <div className="bg-obsidian bg-opacity-65 h-50 grid grid-cols-2 rounded-2xl justify-items-center items-center text-xl">
                    <button className="bg-light-obsidian rounded-2xl w-250 h-35 ">Celsius</button>
                    <button className="bg-light-obsidian rounded-2xl w-250 h-35 ">Fahrenheit</button>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h1>Time Format</h1>
                <div className="bg-obsidian bg-opacity-65 h-50 grid grid-cols-2 rounded-2xl justify-items-center items-center text-xl">
                    <button className="bg-light-obsidian rounded-2xl w-250 h-35 ">24-hour</button>
                    <button className="bg-light-obsidian rounded-2xl w-250 h-35 ">12-hour</button>
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