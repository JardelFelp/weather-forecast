import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faSmog } from '@fortawesome/free-solid-svg-icons'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'

const iconsList = {
  'clear-day': faSun,
  'clear-night': faMoon,
  'rain': faCloudRain,
  'snow': faSnowflake,
  'sleet': faCloudRain,
  'wind': faWind,
  'fog': faSmog,
  'cloudy': faCloud,
  'partly-cloudy-day': faCloudSun,
  'partly-cloudy-night': faCloudMoon,
}


export const getIcon = icon => {
  return iconsList[icon];
}