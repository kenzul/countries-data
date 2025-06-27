import { useEffect, useState } from "react"
import weatherService from "../services/weather";

const CountryWeather = ({ capital, lat, lon }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        weatherService.getWeather(lat, lon).then((response) => {
            console.log(response);
            setData(response);
        });
    }, [])

    return (
        <div>
            {!data ? <p>Fetching data...</p> :
                <h2>Weather in {capital}</h2>
            }
        </div>
    )
}

export default CountryWeather;