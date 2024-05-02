import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({ 
    city: "Delhi",
    feelsLike: 28.66,
    temp: 30.05,
    tempMin: 30.05,
    tempMax: 30.05,
    humidity: 28,
    weather: "haze",
 });
 
 let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
 }

    return(
        <div style={{ textAlign: "center"}}>
        <h2>Weather App by Delta</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox  info={weatherInfo}/>
        </div>
    )
   
}