import { useState } from "react";
import Search from "./components/Search";


const App = () => {
  const [countries, setCountries] = useState(null);
  const [query, setQuery] = useState("");

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