import { RECIVE } from "./weather.actions.js";

const initialStore = {
  weatherData: null,
};

const weatherReducer = (state = initialStore, action) => {
  switch (action.type) {
    case RECIVE:
      return {
        ...state,
        weatherData: action.payload.weatherData,
      };
    default:
      return state;
  }
};

export default weatherReducer;