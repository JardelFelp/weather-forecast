import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3vh 0;
  color: white;
`

const BlackCircle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 175px;
  height: 175px;
  border-radius: 100%;
  border: 3px solid rgba(0, 0, 0, 0.6);
  background-color: rgba(0, 0, 0, 0.5);
`

const Location = styled.span`
  font-size: 1.2rem;
`

const Summary = styled.span`
  margin-top: 3px;
  font-size: 1rem;
`

const Temperature = styled.span`
  margin-top: 5px;
  font-size: 3rem;
`

const LocationAndTemperature = ({ location, temperature, summary }) => {
  return (
    <Container>
      <BlackCircle>
        <Location>{location}</Location>
        <Temperature>{Math.round(temperature)}°C</Temperature>
        <Summary>{summary}</Summary>
      </BlackCircle>
    </Container>
  );
};

LocationAndTemperature.propTypes = {
  /* Dispositive Location */
  location: PropTypes.string.isRequired,
  /* Current Temperature */
  temperature: PropTypes.number.isRequired,
  /* Daily Summary */
  summary: PropTypes.string.isRequired
};


export default LocationAndTemperature;
