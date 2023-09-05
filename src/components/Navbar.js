import logo from '../assets/navbar-icons/logo.png';
import weather from '../assets/navbar-icons/weather.svg';
import hamburger from '../assets/navbar-icons/hamburger.svg';
import map from '../assets/navbar-icons/map.svg';
import settings from '../assets/navbar-icons/settings.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const options = [
        {icon: weather, name: 'Weather', link: '/'},
        {icon: hamburger, name: 'Cities', link: '/cities'},
        {icon: map, name: 'Map', link: '/map'},
        {icon: settings, name: 'Settings', link: '/settings'},
    ];

    return (  
        <div className='self-stretch row-span-2 bg-light-obsidian p-8 w-[100px] rounded-3xl grid grid-rows-body justify-center items-center bg-opacity-50'>
            <img src={logo} alt="icon not found" className='justify-self-center self-start h-[60px] w-[60px]'/>

            <nav className=" flex flex-col gap-[50px] justify-center items-center ">

                {options.map((option, index) => (
                    <Link to={option.link}>
                        <button key={index} className="cursor-pointer duration-200 ease-linear active:scale-95 hover:scale-105 flex flex-col justify-center items-center gap-2 text-sm">
                            <img src={option.icon} alt="icon not found" className='h-[30px] w-[30px]'/> 
                            {option.name}
                        </button>
                    </Link>
                ))}
            </nav>
        </div>
        
    );
}
 
export default Navbar;