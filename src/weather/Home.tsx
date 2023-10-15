import { useQuery } from "@tanstack/react-query";
import { createContext, useState } from "react";

import SearchBox from "./SearchBox";
import WeatherCard from "./WeatherCard";
import WeatherMap from "./WeatherMap";

export const CountryContext = createContext<countryAPI>({} as countryAPI);

function Home() {
    const apiKey = {
        openWeather: "15dbfeb21048c6f5646c40aab5f1364a",
        here: "NhZXyRA-iIOrFL9Z8xwPUjl0jQ71uezRwkawr0ATeUM",
    };
    const [country, setCountry] = useState("");
    const value: countryAPI = {country, setCountry};

    const {data: coord} = useQuery({
        queryFn: () => 
            fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=5&appid=${apiKey.openWeather}`)
            .then(res => res.json())
            .then(data => {
                setCountry
                return {
                    lat: data[0].lat,
                    lon: data[0].lon, 
                } as coordinate;
            }),
        queryKey: ["coord", country],
        refetchOnWindowFocus: false,
    });
    // console.log(coord);

    // const lat = 51.5073219, lon = -0.1276474;
    const {data: weather} = useQuery({
        queryFn: () => 
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coord?.lat}&lon=${coord?.lon}&appid=${apiKey.openWeather}`)
            .then(res => res.json())
            .then(data => {
                return {
                    description: data.weather[0].description,
                    temp: data.main.temp,
                    humidity: data.main.humidity,
                    visibility: data.visibility,
                    windSpeed: data.wind.speed,
                } as weatherData;
            }),
        queryKey: ["weather", coord],
        refetchOnWindowFocus: false,
        // useLazyQuery?
    });
    // console.log(weather);

    return (
        <CountryContext.Provider value={value}>
            <SearchBox />
            { coord && <WeatherMap coord={coord}/> }
            { weather && <WeatherCard weather={weather}/> }
        </CountryContext.Provider>
    );
}

export default Home;

interface countryAPI {
    country: string,
    setCountry: Function,
}

export interface coordinate {
    lat: number,
    lon: number,
}

export interface weatherData {
    description: string,
    temp: number,
    humidity: number,
    visibility: number,
    windSpeed: number,
}