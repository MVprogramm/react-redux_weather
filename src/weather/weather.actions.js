import getWeatherData from "./weather.gateWay.js";

export const RECIVE = "WEATHER/RECIVE_WEATHER_DATA";

export const reciveWeatherData = (weatherData) => {
  return {
    type: RECIVE,
    payload: {
      weatherData,
    }
  }
}

export const fetchWeatherData = () => {
  return function(dispatch) {
    getWeatherData()
      .then((weatherData) => {
        dispatch(reciveWeatherData(weatherData));
      });
  }
}