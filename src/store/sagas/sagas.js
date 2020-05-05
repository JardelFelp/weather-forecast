import { all, takeEvery } from 'redux-saga/effects'
/* Weather Forecast */
import { WeatherForecastType } from 'store/ducks/duckWeatherForecast'
import { searchWeatherForecast } from './sagaWeatherForecast'

const weatherForecastLinks = [
  takeEvery(WeatherForecastType.SEARCH_WEATHER_FORECAST, searchWeatherForecast)
]

export default function* rootSaga() {
  yield all([...weatherForecastLinks])
}
