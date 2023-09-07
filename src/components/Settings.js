import React, { useEffect, useState } from "react";

const Settings = ({ settings, setSettings }) => {
    const [temperature, setTemperature] = useState(settings.temp);
    const [time, setTime] = useState(settings.time);
    const buttons = [
        {
            title: 'Temperature',
            options: [
                {
                    name: 'Celsius',
                    value: 'metric',
                },
                {
                    name: 'Fahrenheit',
                    value: 'imperial',
                }
            ]
        },
        {
            title: 'Time Format',
            options: [
                {
                    name: '24-hour',
                    value: 24,
                },
                {
                    name: '12-Hour',
                    value: 12,
                }
            ]
        }
    ];

    useEffect(() => {
        setSettings({
            temp: temperature,
            time: time,
        });
    }, [temperature, time, setSettings]);

    const handleButtonClick = (value, stateSetter) => {
        stateSetter(value);
    };

    return (
        <div className="row-start-2 col-start-2 justify-self-center self-start mt-[30px] bg-light-obsidian bg-opacity-50 w-[600px]  rounded-2xl grid grid-rows-3 gap-5 justify-stretch items-center p-5">
            {buttons.map((buttonGroup, index) => (
                <div className="flex flex-col gap-2" key={index}>
                    <h1>{buttonGroup.title}</h1>
                    <div className="bg-obsidian bg-opacity-65 h-[50px] grid grid-cols-2 rounded-2xl justify-items-center items-center text-xl">
                        {buttonGroup.options.map((option, optionIndex) => (
                            <button
                                key={optionIndex}
                                className={`${(buttonGroup.title === 'Temperature' && temperature === option.value) || (buttonGroup.title === 'Time Format' && time === option.value) ? 'bg-light-obsidian' : 'hover:bg-light-obsidian hover:bg-opacity-50'} duration-300 rounded-2xl w-[250px] h-[35px]`}
                                onClick={() => handleButtonClick(option.value, buttonGroup.title === 'Temperature' ? setTemperature : setTime)}
                            >
                                {option.name}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
            <div className="flex flex-col gap-2">
                <h1>Language</h1>
                <select className="bg-obsidian bg-opacity-65 h-50 p-2 rounded-2xl cursor-pointer focus:outline-0">
                    <option className="bg-obsidian bg-opacity-65 border-0 outline-0 hover:bg-light-obsidian">English</option>
                    <option className="bg-obsidian bg-opacity-65 border-0 outline-0 hover:bg-light-obsidian">Georgian</option>
                </select>
            </div>
        </div>
    );
};

export default Settings;
