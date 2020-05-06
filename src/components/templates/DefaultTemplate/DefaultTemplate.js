import React from 'react'
import Footer from 'components/atoms/Footer'
import styled from 'styled-components'
import classNames from 'classnames'
import moment from 'moment'

const Container = styled.div`
  padding: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: calc(100vh - 96px);

  &.night {
    background-image: url(${require('assets/images/night.jpg')})
  }

  &.day {
    background-image: url(${require('assets/images/day.jpg')})
  }
`

const applyDefaultTemplate = Component => {
  const hour = Number(moment().format('H'));
  const classBackground = classNames({
    night: hour >= 18 || hour < 6,
    day: hour <= 6 && hour < 18,
  })

  return props => (
    <>
      <Container className={classBackground}>
        <Component {...props} />
      </Container>
      <Footer />
    </>
  )
}

export default applyDefaultTemplate;
