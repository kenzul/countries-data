import axios from "axios";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

const createWeatherUrl = (lat, lon) => {
    const key = import.meta.env.VITE_WEATHER_KEY;
    return `${baseUrl}?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
}

const getWeather = (lat, lon) => {
    const promise = axios.get(createWeatherUrl(lat, lon));
    return promise.then((response) => response.data);
}

export default { getWeather }