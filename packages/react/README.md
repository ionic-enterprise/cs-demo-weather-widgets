# Demo Weather Widgets - React

This is a sample custom element library that contains some simple weather related elements. This library contains the following custom elements:

- Simple
  - **csdemo-temperature** - takes a temperature in Kelvin and displays the value in either Celsius or Fahrenheit
  - **csdemo-uv-index** - takes a UV Index value and displays the value with a description and color coding
  - **csdemo-condition** - given a mapping of condition types to image URLs and a condition code, determines which code to use and displays the image with a label
- Compound
  - **csdemo-daily-forecast** - condition, date, low, high

## Usage

```bash
npm i @ionic-enterprise/cs-demo-weather-widgets-react
```

### Handling Icons

This library does not include its own images. In order to inform the library how to get the images to use, you need to set up a mapping object that specifies the image file to use for each of the weather conditions.

For example:

```typescript
  const icons = {
    sunny: 'assets/images/sunny.png',
    cloudy: 'assets/images/cloudy.png',
    lightRain: 'assets/images/light-rain.png',
    shower: 'assets/images/shower.png',
    sunnyThunderStorm: 'assets/images/partial-tstorm.png',
    thunderStorm: 'assets/images/tstorm.png',
    fog: 'assets/images/fog.png',
    snow: 'assets/images/snow.png',
    unknown: 'assets/images/dunno.png',
  };
```

### `CsdemoTemperature`

Displays the `temperature`, supplied in Kelvin, in the specified `scale` (C or F).

```tsx
import { useState } from 'react';
import { CsdemoTemperature } from '@ionic-enterprise/cs-demo-weather-widgets-react';

const SomePage: React.FC = () => {
  const [scale, setScale] = useState('F');

  return (
    <CsdemoTemperature
      scale={scale}
      temperature="297"
      onClick={() => setScale(scale === 'F' ? 'C' : 'F')}
    />
  );
};
```

### `CsdemoCondition`

Displays the current condition in both text and icon form. The condition is one of the [condition codes](https://openweathermap.org/weather-conditions) used by [OpenWeatherMap.org](https://openweathermap.org). The `iconPaths` value is [described above](#handling-icons)

```tsx
import { CsdemoCondition } from '@ionic-enterprise/cs-demo-weather-widgets-react';

const SomePage: React.FC = () => {
  return (
    <CsdemoCondition
      condition="200"
      icons={iconsPaths}
    />
  );
};
```

#### `CsdemoUvIndex`

Displays the UV index along with a risk level, in a color appropriate for the level of risk.

```tsx
import { CsdemoUvIndex } from '@ionic-enterprise/cs-demo-weather-widgets-react';

const SomePage: React.FC = () => {
  return (
    <CsdemoUvIndex uvIndex="2.5" />
  );
};
```

#### `CsdemoDailyForecast`

Displays the forecast for a given day.

```tsx
import { useState } from 'react';
import { CsdemoDailyForecast } from '@ionic-enterprise/cs-demo-weather-widgets-react';

const SomePage: React.FC = () => {
  const [scale, setScale] = useState('F');
  const dailyForecast = [ array-of-forecast-data ];

  return (
    <CsdemoDailyForecast scale={scale} forecasts={dailyForecast} iconPaths={icons} />
  );
};
```


The forecast property is an array of forecast data for a single day in the following format:

```TypeScript
export interface Forecast {
  date: Date;
  condition: number;
  temperature: number;
}
```

This data will be the weather conditions every X hours throughout the day. The component figures out a general condition to use for that day from the given data.

The temperature is specified in Kelvin.

The condition is one of the [condition codes](https://openweathermap.org/weather-conditions) used by [OpenWeatherMap.org](https://openweathermap.org).

The `iconPaths` value is [described above](#handling-icons)

## Conclusion

That is it. We also have a [demo application](https://github.com/ionic-enterprise/ionic-weather-react) you can check out if you would like to.

Happy Coding!!