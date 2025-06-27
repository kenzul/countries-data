import { useEffect, useState } from "react";
import Search from "./components/Search";
import countriesService from "./services/countries";
import CountryList from "./components/CountryList";
import CountryView from "./components/CountryView";


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
    if (countries && query) {
      const filtered = countries.filter((country) => {
        return country.name.common.toLowerCase().includes(query.toLocaleLowerCase());
      })
      setShownCountries(filtered);
    } else {
      setShownCountries(null);
    }
  }, [query]);


  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <div>
      <Search query={query} onChange={handleQueryChange}></Search>
      {shownCountries && shownCountries.length > 1 && <CountryList countries={shownCountries}></CountryList>}
      {shownCountries && shownCountries.length === 1 && <CountryView country={shownCountries[0]}></CountryView>}
    </div>
  )
}

export default App;