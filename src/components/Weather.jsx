import React, { useState } from 'react';
import clear_icon from '../assets/clear.png';
import clouds_icon from '../assets/clouds.png';
import cloud_rain from '../assets/cloudyRain.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png';
import search_icon from '../assets/search.png';
import snow_icon from '../assets/snow.png';
import sunny_icon from '../assets/sunny.png';
import thunder_icon from '../assets/thunder.png';
import wind_icon from '../assets/wind.png';
import '../components/Weather.css';
import getWeather from './Api';

const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": sunny_icon,
    "02n": sunny_icon,
    "03d": clouds_icon,
    "03n": clouds_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "09d": cloud_rain,
    "09n": cloud_rain,
    "11d": thunder_icon,
    "11n": thunder_icon,
    "13d": snow_icon,
    "13n": snow_icon,
};

const Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null); // Start with null instead of {}

    const getWeatherByCity = async () => {
        const weatherData = await getWeather(city);
        console.log(weatherData);
        setWeather(weatherData);
        setCity("");
    };

    const getWeatherIcon = (iconCode) => {
        return allIcons[iconCode] || snow_icon; // Default to snow_icon if no match found
    };

    return (
        <div className='weather'>
            <div className='search-bar'>
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder='Search'
                />
                <img
                    src={search_icon}
                    alt=""
                    className='search-icon'
                    onClick={getWeatherByCity} // Corrected the function call
                />
            </div>
            {weather && weather.weather ? (
                <>
                    <img src={getWeatherIcon(weather.weather[0].icon)} alt="" className='weather-icon' />
                    <p className='temperature'>{weather.main.temp}ºc</p>
                    <p className='location'>{weather.name}</p>
                    <div className='weather-data'>
                        <div className='col'>
                            <img src={humidity_icon} alt="" className='humidity-icon' />
                            <div>
                                <p>{weather.main.humidity}%</p> {/* Dynamically setting humidity */}
                                <span>Humidity</span>
                            </div>
                        </div>
                        <div className='col'>
                            <img src={wind_icon} alt="" className='wind-icon' />
                            <div>
                                <p>{weather.wind.speed} km/h</p>
                                <span>Wind Speed</span>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className='data-not-found'>
                    <h3>No Data Found</h3>
                </div>
            )}
        </div>
    );
};

export default Weather;