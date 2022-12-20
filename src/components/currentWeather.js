import React from 'react'
// import mostlyCloudy from "../img/weather-icons/mostlycloudy.svg";

class CurrentWeather extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            image:"",
            description:"",
            minTemp:"",
            maxTemp:"",
            humidity:"",
            pressure:""
            
        };
    }
    FehrenheitoCelsius=(f)=>{return Math.round(f-273.15)};
    render() {
        return (
            <div className="current__weather">
            <div className="current__style">
              <img className="current__image" src={this.props.image} alt="cloudy"/>
              <div className="current__status">
                <div className="description">Overcast Clouds</div>
                <div className="temperature">
                  <span className="temperature__title">Temperature</span>
                  <span className="temperature__value">{this.FehrenheitoCelsius(this.props.currentElement.main.temp_min)}&#176; to {this.FehrenheitoCelsius(this.props.currentElement.main.temp_max)}&#176;C</span>
                </div>
                <div className="humidity">
                  <span className="humidity__title">Humidity</span>
                  <span className="humidity__value">{this.props.currentElement.main.humidity}%</span>
                  <span className="pressure__title">Pressure</span>
                  <span className="pressure__value">{this.props.currentElement.main.pressure}</span>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default CurrentWeather