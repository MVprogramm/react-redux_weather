import React from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import City from "./City.jsx";
import * as weatherActions from "./weather.actions.js";
import { weatherDataSelector } from "./weather.selectors.js"
import "./weather.scss";

const Weather = ({ weatherData, getWeatherData }) => {
  if (!weatherData) {
    getWeatherData();
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
  getWeatherData: PropTypes.func.isRequired,
  weatherData: PropTypes.array
}

Weather.defaultValue = {
  weatherData: null
}

const mapState = (state) => {
  return {
    weatherData: weatherDataSelector(state)
  }
}

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData
}

export default connect(mapState, mapDispatch)(Weather);