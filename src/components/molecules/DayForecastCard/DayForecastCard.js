import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureLow, faTemperatureHigh, faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { getIcon } from 'utils/icons'
import classNames from 'classnames';

const Card = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.60);
  color: white;
  margin-bottom: 15px;
  align-items: center;
  justify-content: center;

  &.active {
    background-color: rgba(0, 0, 0, 0.74);
  }

  .middle {
    text-align: center;
  }

  > svg {
    font-size: 1.5rem;
    padding-right: 10px;
    margin-right: 10px;
    border-right: 1.5px solid white;
    min-width: 35px
  }
`

const Date = styled.span`
  font-size: 1.3rem;
  padding-right: 10px;
  margin-right: 10px;
  border-right: 1.5px solid white;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const DataContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  span {
    min-width: 30px;
  }

  svg {
    min-width: 25px;
  }
`

const DayForecastCard = ({ 
  date,
  icon,
  temperatureMax,
  temperatureMin,
  precipProbability,
  precipIntensity,
  active
}) => {
  const iconElement = getIcon(icon);
  const cardClass = classNames({ active });

  return (
    <Card className={cardClass}>
      <FontAwesomeIcon icon={iconElement} />
      <Date>{moment.unix(date).format('DD/MM')}</Date>
      <Content>
        <DataContent>
          <FontAwesomeIcon icon={faTemperatureLow} />
          <span>{Math.round(temperatureMin)}°C</span>
          <span className="middle">-</span>
          <FontAwesomeIcon icon={faTemperatureHigh} />
          <span>{Math.round(temperatureMax)}°C</span>
        </DataContent>
        <DataContent>
          <FontAwesomeIcon icon={faCloudRain} />
          <span>{Math.round(precipProbability * 100)}%</span>
          <span className="middle">-</span>
          <span>{Math.round(precipIntensity * 100)}mm</span>
        </DataContent>
      </Content>
    </Card>
  );
}

DayForecastCard.propTypes = {
  /* Date in timestamp format */
  date: PropTypes.number.isRequired,
  /* Icon day */
  icon: PropTypes.string.isRequired,
  /* Temperatura Max */
  temperatureMax: PropTypes.number.isRequired,
  /* Temperatura Min */
  temperatureMin: PropTypes.number.isRequired,
  /* Precip Probability */
  precipProbability: PropTypes.number.isRequired,
  /* Precip Intensity */
  precipIntensity: PropTypes.number.isRequired,
  /* Active - Current Day */
  active: PropTypes.bool,
}

DayForecastCard.defaultProps = {
  active: false,
}

export default DayForecastCard;
