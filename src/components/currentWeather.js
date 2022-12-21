import React from 'react'
import clear from "../img/weather-icons/clear.svg";
import cloudy from "../img/weather-icons/cloudy.svg";
import drizzle from "../img/weather-icons/drizzle.svg";
import fog from "../img/weather-icons/fog.svg";
import rain from "../img/weather-icons/rain.svg";
import snow from "../img/weather-icons/snow.svg";
import storm from "../img/weather-icons/storm.svg";

class CurrentWeather extends React.Component {

    constructor(props){
        super(props);
        this.state = {
          src : this.props.src
        } 
            
            
        }
    
    // FehrenheitoCelsius=(f)=>{return Math.round(f-273.15)};
    render() 
    {
       const imageSrc = (image) =>{
        if (image ==="clear") return clear;
            else if (image === "clouds") return cloudy;
            else if (image === "snow") return snow;
            else if (image === "storm") return storm;
            else if (image === "rain") return rain;
            else if (image === "fog") return fog;
            else if (image === "drizzle") return drizzle;
            
      };
    
     
        return (
            <div className="current__weather">
            <div className="current__style">
              <img className="current__image" src={imageSrc(this.state.src)}alt=""/>
              <div className="current__status">
                <div className="description">{this.props.des}</div>
                <div className="temperature">
                  <span className="temperature__title">Temperature </span>
                  <span className="temperature__value">{Math.round(this.props.minTemp) && this.props.minTemp}&#176; to {Math.round(this.props.maxTemp -273)}&#176;C</span>
                </div>
                <div className="humidity">
                  <span className="humidity__title">Humidity</span>
                  <span className="humidity__value">{this.props.humidity}%</span>
                  <span className="pressure__title">Pressure</span>
                  <span className="pressure__value">{this.props.pressure}</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  }
  

export default CurrentWeather