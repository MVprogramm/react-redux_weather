import React from 'react';
import { Provider } from 'react-redux';
import Weather from "./weather/Weather.jsx";
import store from './store.js';

const App = () => {
  return (
    <Provider store={store}>
      <div className="page">
        <Weather />
      </div>
    </Provider>
  )
}

export default App;