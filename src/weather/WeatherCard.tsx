import { useContext } from "react";
import { weatherData } from "./Home";
import { CountryContext } from "./Home";

import style from "./WeatherCard.module.css";

function WeatherCard({ weather }: Props) {
    const { country } = useContext(CountryContext);

    return (
        <div className={style.container}>
            <h1 className={style.title}>{country}</h1>
            <ul className={style.infoList}>
                <li className={style.temperature}>{(weather.temp - 273).toFixed(2)}°C</li>
                <li>{weather.description.charAt(0).toUpperCase() + weather.description.substring(1)}</li>
                <li>Humidity: {weather.humidity}%</li>
                <li>Visibility: {weather.visibility / 1000}Km</li>
                <li>Wind speed: {weather.windSpeed}m/s</li>
            </ul>
        </div>
    );
}

export default WeatherCard;

interface Props {
    weather: weatherData,
}