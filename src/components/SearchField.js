import { useState } from "react";
import useFetch from "../hooks/useFetch";

const SearchField = ({ setCity }) => {
  const {data: cities, isPending, error} = useFetch('http://localhost:8000/georgianCities');
  const [searchText, setSearchText] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchText(value);

    if (value) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleTabPress = () => {
    if (cities.length > 0) {
      setCity(cities[0]);
      setSearchText(cities[0]);
      setShowSuggestions(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for cities"
        className="self-start border-0 bg-light-obsidian h-50 w-600 rounded-2xl p-4 outline-none bg-opacity-50"
        value={searchText}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === 'Tab') {
            e.preventDefault();
            handleTabPress();
          }
        }}
      />
      {showSuggestions && (
        <div className="absolute z-50 max-w-600 bg-lighter rounded-2xl mt-2 grid grid-cols-auto justify-items-stretch items-center">
            {isPending && 
                <h1 className="duration-300 ease-linear hover:bg-obsidian hover:bg-opacity-50 cursor-pointer active:scale-95 p-3 h-50">
                    Loading..
                </h1>
            }
            {error && 
                <h1 className="duration-300 ease-linear hover:bg-obsidian hover:bg-opacity-50 cursor-pointer active:scale-95 p-3 h-50">
                    {error}
                </h1>
            }
            {cities && cities.filter((city) => city.toLowerCase().includes(searchText.toLowerCase())).slice(0, 5).map((city, index) => (
                <h1
                    key={index}
                    onClick={() => {
                    setCity(city);
                    setSearchText(city);
                    setShowSuggestions(false);
                    }}
                    className="duration-300 ease-linear hover:bg-obsidian hover:bg-opacity-50 cursor-pointer active:scale-95 p-3 h-50"
                >
                    {city}
                </h1>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchField;
