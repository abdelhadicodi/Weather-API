import React, { Component } from "react";

// import SayHi, { SayHello } from "./components/WeatherItem";

import "./App.css";
import CurrentWeather from "./components/currentWeather";
import Header from "./components/Header";
import DailyWeather from "./components/dailyWeather";
// import dailyWeather from "./components/dailyWeather";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     Days: null,
     isLoded: false,
     
    };
  }
  
  // handleInputChange = value => {
  //   this.setState({ city: value });
  // };
  fetchData = (n) => {
    let fetchData= (`http://api.openweathermap.org/data/2.5/forecast?q=${n}&cnt=8&units=metric&appid=4b4f2678934952bc74171234ae56067c`)
    fetch(fetchData)
    .then(res => res.json())
    .then(data => {console.log(data.list); this.setState({Days:data}); this.setState({isLoded: true})})
  }

  render() {
   
    return (
      <div className="app">
        <Header event={this.fetchData}/>
        <main>
          {this.state.Days && <CurrentWeather />}
          {this.state.isLoded && <DailyWeather
          des={this.state.Days && this.state.Days.list[0].weather[0].description}
            minTemp={this.state.Days && Number( this.state.Days.list[0].main.temp_min)}
            maxTemp={ this.state.Days && this.state.Days.list[0].main.temp_max}
            humidity={this.state.Days && this.state.Days.list[0].main.humidity}
            pressure={this.state.Days && this.state.Days.list[0].main.pressure}/>
        }
        {this.state.isLoded && <DailyWeather data={this.state.Days.list.slice(1,7)}/>}
        </main>            
      </div>
    );
  }
}

export default App;