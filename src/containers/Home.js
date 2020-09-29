import React from "react";

import Header from "../components/Header";

const weatherKey = `5b82567045514b74df6771aaa7d2a828`;

function Home() {
  /*
    Weather type
    current temp
    high temp
    low temp
    cloudiness
    humidity
    wind speed
  */

  return (
    <>
      <Header />
      <main className="Home">
        <h2>Weather in Seoul</h2>
        <div className="WeatherInfo">
          <p>Weather Type: Cloudy</p>
          <p>Current Temperature: 100 deg</p>
          <p>High Temp: 100 deg</p>
          <p>Low Temp: 80 deg</p>
          <p>Cloudiness: 100%</p>
          <p>Humidity: 35%</p>
          <p>Wind Speed: 3km/h</p>
        </div>
      </main>
    </>
  );
}

export default Home;
