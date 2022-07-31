import fetchWeatherData from "./weather.gateWay.js";

export const RECIVE = "WEATHER/RECIVE_WEATHER_DATA";

export const reciveWeatherData = (weatherData) => {
  return {
    type: RECIVE,
    payload: {
      weatherData,
    }
  }
}

export const getWeatherData = () => {
  return function(dispatch) {
    fetchWeatherData()
      .then((weatherData) => {
        dispatch(reciveWeatherData(weatherData));
      });
  }
}