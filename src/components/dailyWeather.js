import React from "react";
import WeatherItem from "./Weatheritem";

class DailyWeather extends React.Component {
  constructor(props){
  super(props)
   this.state = {
    data : this.props.data ,
   } 
    
  }
    
  render() {
    
      // console.log(this.props.data)
        return (
            <div className="days__status">
              {this.state.data && this.state.data.map((e)=> (<WeatherItem time={e.dt_txt.slice(10,16)} temp={e.main.temp} key={e.dt_txt} src={e.weather[0].main}/>))}
            </div>
        )
    }
}


export default DailyWeather