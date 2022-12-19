import React, { Component } from "react";
import CurrentWeather from "./currentWeather";
import DailyWeather from "./dailyWeather";


class Content extends React.Component {
    render() {
        return (
            <main className="main">
                <CurrentWeather />
                <DailyWeather />
            </main>
        )
    }
}

export default Content