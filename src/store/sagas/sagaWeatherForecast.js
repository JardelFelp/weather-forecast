import axios from 'plugins/AxiosPlugin'
import moment from 'moment';
import { put, select } from 'redux-saga/effects'
import { WeatherForecastType } from 'store/ducks/duckWeatherForecast'

/* Parameterized values */
const API_KEY = process.env.REACT_APP_APY_KEY;
const TIME_TO_RESEARCH = Number(process.env.REACT_APP_TIME_TO_RESEARCH || 0);

/* Redux data */
const getCoordinates = ({ weatherForecast }) => weatherForecast.coordinates;
const getDatetimeLastSearch = ({ weatherForecast }) => weatherForecast.datetimeLastSearch;

export function* searchWeatherForecast() {
  const datetimeLastSearch = yield select(getDatetimeLastSearch);

  const diference = moment().diff(moment(datetimeLastSearch), 'minutes');

  if (diference >= TIME_TO_RESEARCH) {
    const { latitude, longitude } = yield select(getCoordinates)
    const { data: response } = yield axios.get(`/forecast/${API_KEY}/${latitude},${longitude}?lang=pt`)
  
    yield put({ 
      type: WeatherForecastType.SET_WEATHER_FORECAST, 
      weatherForecast: response
    })
    yield put({
      type: WeatherForecastType.SET_DATETIME_LAST_SEARCH
    })
  }
}
