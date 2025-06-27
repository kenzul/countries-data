import { useEffect, useState } from "react";
import Search from "./components/Search";
import countriesService from "./services/countries";
import CountryList from "./components/CountryList";


const App = () => {
  const [countries, setCountries] = useState(null);
  const [query, setQuery] = useState("");
  const [shownCountries, setShownCountries] = useState(null);


  useEffect(() => {
    countriesService.getAll().then((data) => {
      setCountries(data);
    });
  }, []);

  useEffect(() => {
    if (query && countries) {
      const filtered = countries.filter((country) => {
        return country.name.common.toLowerCase().includes(query);
      })
      setShownCountries(filtered);
    }
  }, [query])


  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <div>
      <Search query={query} onChange={handleQueryChange}></Search>
      {shownCountries && <CountryList countries={shownCountries}></CountryList>}
    </div>
  )
}

export default App;