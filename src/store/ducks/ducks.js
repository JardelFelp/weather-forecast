import { combineReducers } from 'redux'
import { reducer as weatherForecast } from './duckWeatherForecast'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const weatherForecastPersistConfig = {
  key: 'weather-forecast',
  storage
}

export default combineReducers({
  weatherForecast: persistReducer(weatherForecastPersistConfig, weatherForecast)
})
