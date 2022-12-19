import React, { Component } from "react";
import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg";

class currentWeather extends React.Component {
    render() {
        return (
            <div className="current__weather">
            <div className="current__style">
              <img className="current__image" src={mostlyCloudy} alt="cloudy"/>
              <div className="current__status">
                <div className="description">Overcast Clouds</div>
                <div className="temperature">
                  <span className="temperature__title">Temperature</span>
                  <span className="temperature__value">10&#176; to 11&#176;C</span>
                </div>
                <div className="humidity">
                  <span className="humidity__title">Humidity</span>
                  <span className="humidity__value">78%</span>
                  <span className="pressure__title">Pressure</span>
                  <span className="pressure__value">10008.48</span>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default currentWeather