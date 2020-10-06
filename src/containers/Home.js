import React, { useState, useEffect, useMemo } from "react";
import axios from "axios"; // this is importing from the package.json
import { useHistory } from "react-router-dom";

import Header from "../components/Header";

const weatherKey = `5b82567045514b74df6771aaa7d2a828`;

function Home() {
  const history = useHistory();
  const [weatherData, setWeatherData] = useState(null); // this will store my data
  const [city, setCity] = useState("Chicago");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`
      )
      .then(function (response) {
        const weather = response.data;
        setWeatherData(weather);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [city]); // everytime city updates, call this request

  useEffect(() => {
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const city = urlParams.get("city");
    if (city) {
      setCity(city);
    }
    // console.log("city", city)
  }, [history]);

  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    let cloudiness = "";
    let currentTemp = "";
    let highTemp = "";
    let humidity = "";
    let lowTemp = "";
    let weatherType = "";
    let windSpeed = "";

    if (weatherData) {
      cloudiness = `${weatherData.clouds.all}%`;
      currentTemp = `${weatherData.main.temp}`;
      highTemp = `${weatherData.main.temp_max}`;
      humidity = `${weatherData.main.humidity}%`;
      lowTemp = `${weatherData.main.temp_min}`;
      weatherType = `${weatherData.weather[0].description}`;
      windSpeed = `${weatherData.wind.speed} km/h`;
    }

    return {
      cloudiness,
      currentTemp,
      highTemp,
      humidity,
      lowTemp,
      weatherType,
      windSpeed,
    };
  }, [weatherData]);

  /* Display:
    Weather type
    current temp
    high temp
    low temp
    cloudiness
    humidity
    wind speed
  */

  console.log("weatherData", weatherData);

  return (
    <>
      <Header />
      <main className="Home">
        <h2>Weather in {city}</h2>
        <div className="WeatherInfo">
          <p>Weather Type: {weatherType}</p>
          <p>Current Temperature: {currentTemp}</p>
          <p>High Temp: {highTemp}</p>
          <p>Low Temp: {lowTemp}</p>
          <p>Cloudiness: {cloudiness}</p>
          <p>Humidity: {humidity}</p>
          <p>Wind Speed: {windSpeed}</p>
        </div>
      </main>
    </>
  );
}

export default Home;
