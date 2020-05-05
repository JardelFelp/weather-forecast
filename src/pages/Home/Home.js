import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  const coordinates = useSelector(({ weatherForecast }) => weatherForecast.coordinates);
  const teste = useSelector(({ weatherForecast }) => weatherForecast.weatherForecast);
  const dispatch = useDispatch();

  console.log(coordinates, teste);

  useEffect(() => {
    dispatch({ type: 'SEARCH_WEATHER_FORECAST' });
  }, [])

  return (
    <div>
      Home
      {/* Home { number } */}
    </div>
  );
}

export default Home;
