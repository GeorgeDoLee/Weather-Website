import { useState } from 'react';
import logo from '../assets/navbar-icons/logo.png';
import weather from '../assets/navbar-icons/weather.svg';
import hamburger from '../assets/navbar-icons/hamburger.svg';
import map from '../assets/navbar-icons/map.svg';
import settings from '../assets/navbar-icons/settings.svg';

const Navbar = () => {
    const [options, setOptions] = useState([
        {icon: weather, name: 'Weather'},
        {icon: hamburger, name: 'Cities'},
        {icon: map, name: 'Map'},
        {icon: settings, name: 'Settings'},
    ])

    return (  
        <div className='self-stretch row-span-2 bg-light-obsidian p-8 w-100 rounded-3xl grid grid-rows-body justify-center items-center bg-opacity-50'>
            <img src={logo} alt="icon not found" className='justify-self-center self-start h-60 w-60'/>

            <nav className=" flex flex-col gap-50 justify-center items-center ">

                {options.map((option, index) => (
                    <button key={index} className="cursor-pointer duration-200 ease-linear active:scale-95 hover:scale-105 flex flex-col justify-center items-center gap-2 text-sm">
                        <img src={option.icon} alt="icon not found" className='h-30 2-30'/> 
                        {option.name}
                    </button>
                ))}
            </nav>
        </div>
        
    );
}
 
export default Navbar;