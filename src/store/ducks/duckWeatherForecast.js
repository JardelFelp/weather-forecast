import { createReducer, createActions } from 'reduxsauce'
import moment from 'moment'

/* Types & Actions Creators */
const { Types, Creators } = createActions({
  searchWeatherForecast: [],
  setWeatherForecast: ['weatherForecast'],
  setCoordinates: ['latitude', 'longitude'],
  setDatetimeLastSearch: [],
})

export const WeatherForecastType = Types
export default Creators

/* Initial State */
export const INITIAL_STATE = {
  weatherForecast: {},
  datetimeLastSearch: null,
  coordinates: {
    latitude: 42.3601,
    longitude: -71.0589
  }
}

/* Methods */
const setCoordinates = (state = INITIAL_STATE, { latitude, longitude }) => ({
  ...state,
  coordinates: { latitude, longitude }
})

const setDatetimeLastSearch = (state = INITIAL_STATE) => ({
  ...state,
  datetimeLastSearch: moment.now()
})

const setWeatherForecast = (state = INITIAL_STATE, { weatherForecast }) => ({
  ...state,
  weatherForecast
})

/* Reducers */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_WEATHER_FORECAST]: setWeatherForecast,
  [Types.SET_COORDINATES]: setCoordinates,
  [Types.SET_DATETIME_LAST_SEARCH]: setDatetimeLastSearch,
})