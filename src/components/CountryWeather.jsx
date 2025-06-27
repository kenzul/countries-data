import { useEffect, useState } from "react"
import weatherService from "../services/weather";

const CountryWeather = ({ capital, lat, lon }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        weatherService.getWeather(lat, lon).then((response) => {
            setData(response);
        });
    }, [])

    return (
        <div>
            {!data ? <p>Fetching data...</p> :
                <>
                    <h2>Weather in {capital}</h2>
                    <p>Temperature {data.main.temp} celsius</p>
                    <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        alt={data.weather.description}></img>
                    <p>Wind {data.wind.speed} m/s</p>
                </>
            }
        </div>
    )
}

export default CountryWeather;