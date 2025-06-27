import { useEffect, useState } from "react";
import Search from "./components/Search";
import countriesService from "./services/countries";
import CountryList from "./components/CountryList";


const App = () => {
  const [countries, setCountries] = useState(null);
  const [query, setQuery] = useState("");
  const displayedCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(query);
  });


  useEffect(() => {
    countriesService.getAll().then((data) => {
      setCountries(data);
    });
  }, []);


  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  }



  return (
    <div>
      <Search query={query} onChange={handleQueryChange}></Search>
      {query && countries && <CountryList countries={displayedCountries}></CountryList>}
    </div>
  )
}

export default App;