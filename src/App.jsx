import { useEffect, useState } from "react";
import Search from "./components/Search";
import countriesService from "./services/countries";


const App = () => {
  const [countries, setCountries] = useState(null);
  const [query, setQuery] = useState("");

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
    </div>
  )
}

export default App;