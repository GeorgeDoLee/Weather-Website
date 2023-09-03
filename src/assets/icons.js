import clearDay from './clear-day.svg';
import clearNight from './clear-night.svg';
import clouds from './clouds.svg';
import drizzle from './drizzle.svg';
import fewCloudsDay from './few-clouds-day.svg';
import fewCloudsNight from './few-clouds-night.svg';
import rainDay from './rain-day.svg';
import rainNight from './rain-night.svg';
import snow from './snow.svg';
import thunder from './thunder.svg';
import mist from './mist.svg';

const weatherIcons = {
  '01d': clearDay,
  '01n': clearNight,
  '02d': fewCloudsDay,
  '02n': fewCloudsNight,
  '03d': clouds,
  '03n': clouds,
  '04d': clouds,
  '04n': clouds,
  '09d': drizzle,
  '09n': drizzle,
  '10d': rainDay,
  '10n': rainNight,
  '11d': thunder,
  '11n': thunder,
  '13d': snow,
  '13n': snow,
  '50d': mist,
  '50n': mist,
};

export default weatherIcons;