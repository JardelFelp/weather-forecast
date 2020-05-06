import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import DayForecastCard from 'components/molecules/DayForecastCard'

const CardList = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin-top: 5vh;

    > div {
      flex-basis: 40%;
    }
  }

  @media screen and (min-width: 1300px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin-top: 5vh;

    > div {
      flex-basis: 20%;
    }
  }
`

const DailyForecast = ({ data }) => {
  const currentDay = moment().format('DD/MM/YYYY');

  return (
    <CardList>
      {data.map((day, index) => (
        <DayForecastCard 
          key={index}
          date={day.time}
          icon={day.icon}
          temperatureMax={day.temperatureMax}
          temperatureMin={day.temperatureMin}
          precipProbability={day.precipProbability}
          precipIntensity={day.precipIntensity}
          active={moment.unix(day.time).format('DD/MM/YYYY') === currentDay}
        />
      ))}
    </CardList>
  );
}

DailyForecast.propTypes = {
  /* Daily Infos */
  data: PropTypes.array.isRequired
}

export default DailyForecast;
