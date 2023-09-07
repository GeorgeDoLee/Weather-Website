import { useState } from "react";
import useFetch from "../hooks/useFetch";

const SearchField = ({ setCity }) => {
  const { data: cities, isPending, error } = useFetch('http://localhost:8000/georgianCities');
  const [searchText, setSearchText] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  const maxSuggestions = 5;

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchText(value);

    if (value && cities) {
      setShowSuggestions(true);
      const filtered = cities.filter((city) => city.toLowerCase().includes(value.toLowerCase())).slice(0, maxSuggestions);
      setFilteredCities(filtered);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleKeyPress = (event) => {
    if ((event.key === 'Tab' || event.key === 'Enter') && event.target.value ) {
        event.preventDefault();
        if (filteredCities.length > 0 || event.key === 'Tab') {
            const selectedCity = filteredCities[selectedSuggestion];
            setCity(selectedCity);
            setSearchText(selectedCity);
        } else {
            setCity(searchText);
        }
        setShowSuggestions(false);
        setSelectedSuggestion(0);
        setFilteredCities([]);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (selectedSuggestion === filteredCities.length - 1) {
        setSelectedSuggestion(0);
      } else {
        setSelectedSuggestion((prev) => prev + 1);
      }
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (selectedSuggestion === 0) {
            setSelectedSuggestion(filteredCities.length - 1);
        } else {
            setSelectedSuggestion((prev) => prev - 1);
        }
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for cities"
        className="border-0 bg-light-obsidian h-[50px] w-[600px] rounded-2xl p-4 outline-none bg-opacity-50"
        value={searchText}
        onClick={() => {
          setSearchText('');
          setFilteredCities([]);
        }}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      {showSuggestions && (
        <div className="absolute z-50 max-w-[600px] bg-lighter rounded-2xl mt-2 grid grid-cols-auto justify-items-stretch items-center">
          {error && (
            <h1 className={`p-3 h-50`}>
              {error}
            </h1>
          )}
          {filteredCities && filteredCities.length > 0 && filteredCities.map((city, index) => (
            <h1
              key={index}
              onClick={() => {
                setCity(city);
                setSearchText(city);
                setShowSuggestions(false);
              }}
              className={`duration-300 ease-linear ${
                selectedSuggestion === index ? 'bg-obsidian bg-opacity-50' : ''
              } hover:bg-obsidian hover:bg-opacity-50 cursor-pointer active:scale-95 p-3 h-50`}
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
