import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import City from "./City.jsx";
import * as weatherActions from "./weather.actions.js";
import { weatherDataSelector } from "./weather.selectors.js"
import "./weather.scss";

const Weather = ({ weatherData, fetchWeatherData }) => {
  if (!weatherData) {
    fetchWeatherData();
    return null;
  }
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {
          weatherData.map(city => {
            return (
              <City 
                key={city.id}
                name={city.name}
                temperature={city.temperature}
              />
            )
          })
        }
      </ul>
    </main>
  )
}

Weather.propTypes = {
  fetchWeatherData: PropTypes.func.isRequired,
}

const mapState = (state) => {
  return {
    weatherData: weatherDataSelector(state)
  }
}

const mapDispatch = {
  fetchWeatherData: weatherActions.fetchWeatherData
}

export default connect(mapState, mapDispatch)(Weather);