import { useState } from "react";
import CountryView from "./CountryView";

const CountryItem = ({ country }) => {
    const [showInfo, setShowInfo] = useState(false);

    const handleShowClick = () => {
        setShowInfo(!showInfo);
    }

    return (
        <li>
            <p style={{ display: "inline" }}>{country.name.common}</p>
            <button type="button" onClick={handleShowClick}>Show</button>
            {showInfo && <CountryView country={country}></CountryView>}
        </li>
    )
}

export default CountryItem;