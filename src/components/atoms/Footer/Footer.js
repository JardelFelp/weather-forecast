import React from 'react';
import { useSelector } from 'react-redux'
import moment from 'moment'
import styled from 'styled-components';

const ContentFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #1f1f1f;
  color: #909090;
  padding: 15px;
`

const Footer = () => {
  const datetimeLastSearch = useSelector(
    ({ weatherForecast: state }) => state.datetimeLastSearch
  );

  return (
    <ContentFooter>
      <span>Última sincronização:</span>
      <span>{moment(datetimeLastSearch).format('DD/MM/YYYY HH:mm:ss')}</span>
    </ContentFooter>
  );
}

export default Footer;
