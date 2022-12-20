import React, { Component } from "react";
import clear from "../img/weather-icons/clear.svg";
import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import snow from "../img/weather-icons/snow.svg";
import WeatherItem from "./Weatheritem";

// import Weatheritem from "./Weatheritem";

class DailyWeather extends React.Component {
  constructor(props){
    super(props)
  }
    render() {
    
        return (
            <div className="days__status">
          <WeatherItem 
          temperature={this.props.temprature}
          time={this.props.time}
          icon={this.props.icon} 
          />
            <div className="days__style">
              <div className="days">
                <time>03:00</time>
                <img className="days__img" src={mostlyCloudy} alt="cloudy"/>
                <p>8&#176;C</p>
              </div>
              <div className="days">
              <time>06:00</time>
              <img className="days__img" src={mostlyCloudy} alt="cloudy"/>
              <p>9&#176;C</p>
              </div>
              <div className="days">
              <time>09:00</time>
              <img className="days__img" src={clear} alt="clear"/>
              <p>14&#176;C</p>
              </div>
              <div className="days">
              <time>12:00</time>
              <img className="days__img" src={clear} alt="clear"/>
              <p>17&#176;C</p>
              </div>
              <div className="days">
              <time>15:00</time>
              <img className="days__img" src={clear} alt="clear"/>
              <p>18&#176;C</p>
              </div>
              <div className="days">
              <time>18:00</time>
              <img className="days__img" src={clear} alt="clear"/>
              <p>16&#176;C</p>
              </div>
              <div className="days">
                <time>21:00</time>
                <img className="days__img" src={mostlyCloudy} alt="cloudy"/>
                <p>13&#176;C</p>
              </div>
              </div>

            </div>
        )
    }
}


export default DailyWeather