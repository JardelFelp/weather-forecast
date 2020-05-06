import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  margin: 15px 0;

  & :first-child {
    margin-bottom: 5px;
  }
`

const CurrentMeasurements = ({ humidity, windSpeed }) => {
  const percentageHumidity = humidity * 100;
  const windSpeedKilometer = (windSpeed * 1.60934).toFixed(2);

  return (
    <Container>
      <span>Umidade do Ar: <strong>{percentageHumidity}%</strong></span>
      <span>Velocidade do Vento: <strong>{windSpeedKilometer} km/h</strong></span>
    </Container>
  );
}

CurrentMeasurements.propTypes = {
  /* Air humidity */
  humidity: PropTypes.number.isRequired,
  /* Wind Speed */
  windSpeed: PropTypes.number.isRequired
}

export default CurrentMeasurements;
