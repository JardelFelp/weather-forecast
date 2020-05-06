import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
/* Molecules */
import LocationAndTemperature from 'components/molecules/LocationAndTemperature'
import CurrentMeasurements from 'components/molecules/CurrentMeasurements'
/* Organisms */
import DailyForecast from 'components/organisms/DailyForecast'
/* Templates */
import applyDefaultTemplate from 'components/templates/DefaultTemplate'

const Home = () => {
  const dispatch = useDispatch();
  const weatherForecast = useSelector(
    ({ weatherForecast: state }) => state.weatherForecast
  );
  const { currently, daily } = weatherForecast;

  useEffect(() => {
    dispatch({ type: 'SEARCH_WEATHER_FORECAST' });
  }, [dispatch])

  if (!(weatherForecast && currently && daily)) {
    return null;
  }

  return (
    <div>
      <LocationAndTemperature
        location={'Nova Iorque'}
        temperature={currently.temperature}
        summary={currently.summary}
      />
      <CurrentMeasurements
        humidity={currently.humidity}
        windSpeed={currently.windSpeed}
      />
      <DailyForecast
        data={daily.data}
      />
    </div>
  );
}

export default applyDefaultTemplate(Home);
