import { useContext } from "react";
import { weatherData } from "./Home";
import { CountryContext } from "./Home";

function WeatherCard({ weather }: Props) {
    const { country } = useContext(CountryContext);

    return (
        <div>
            <h1>{country}</h1>
            <WeatherInfo weather={weather}/>
        </div>
    );
}

function WeatherInfo({ weather }: Props) {
    const info = [];
    for (const [a, b] of Object.entries(weather)) info.push([a, b]);
    return (
        <ul>
            {info.map((infoItem, i) => (<li key={i}>{`${infoItem[0]}: ${infoItem[1]}`}</li>))}
        </ul>
    );
}

export default WeatherCard;

interface Props {
    weather: weatherData,
}