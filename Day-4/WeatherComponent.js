import React, { useState } from "react";
import './Weather.css';
import WeatherCard from "./WeatherCard";


function WeatherComponent(){

    // const weatherData= ([
        const [weatherData, setWeatherData] = useState([
        { day: "Thursday", condition: "Sunny", temperature: "42°C" },
         { day: "Saturday", condition: "Windy", temperature: "28°C" },
         { day: "Monday", condition: "Rainy", temperature: "15°C" }
     ]
     );
        
       
        return (
            <div>
            {weatherData.map((weather, index) => (
            <WeatherCard
            key={index}
            day={weather.day}
            condition={weather.condition}
            temperature={weather.temperature}
            />
            ))}
            </div>
            );

}

export default WeatherComponent;