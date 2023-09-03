
const Navbar = () => {
    return (  
        <nav className="self-stretch row-span-2 bg-light-obsidian p-8 w-100 flex flex-col gap-50 justify-center items-center rounded-3xl">
            <button className="cursor-pointer active:scale-95 hover:font-bold">Weather</button>
            <button className="cursor-pointer active:scale-95 hover:font-bold">Cities</button>
            <button className="cursor-pointer active:scale-95 hover:font-bold">Map</button>
            <button className="cursor-pointer active:scale-95 hover:font-bold">Settings</button>
        </nav>
    );
}
 
export default Navbar;