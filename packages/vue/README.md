# Demo Weather Widgets - Vue

This is a sample custom element library that contains some simple weather related elements. This library contains the following custom elements:

- Simple
  - **csdemo-temperature** - takes a temperature in Kelvin and displays the value in either Celsius or Fahrenheit
  - **csdemo-uv-index** - takes a UV Index value and displays the value with a description and color coding
  - **csdemo-condition** - given a mapping of condition types to image URLs and a condition code, determines which code to use and displays the image with a label
- Compound
  - **csdemo-daily-forecast** - condition, date, low, high

## Usage

```bash
npm i @ionic-enterprise/cs-demo-weather-widgets-vue
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

### `csdemo-temperature`

Displays the `temperature`, supplied in Kelvin, in the specified `scale` (C or F).

```html
<template>
  <csdemo-temperature
    :scale="scale"
    :temperature="temperature"
    @click="toggleScale"
  ></csdemo-temperature>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { CsdemoTemperature } from '@ionic-enterprise/cs-demo-weather-widgets-vue';

export default defineComponent({
  name: 'SomePage',
  components: { CsdemoTemperature },
  setup() {
    const scale = ref('F');
    const temperature = ref(297);

    const toggleScale = () => {
      scale.value = scale.value === 'F' ? 'C' : 'F';
    };

    return { scale, temperature, toggleScale };
  },
});
</script>
```

### `csdemo-condition`

Displays the current condition in both text and icon form. The condition is one of the [condition codes](https://openweathermap.org/weather-conditions) used by [OpenWeatherMap.org](https://openweathermap.org). The `iconPaths` value is [described above](#handling-icons)

```html
<template>
  <csdemo-condition
    :condition="condition"
    :iconPaths="icons"
  ></csdemo-condition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { CsdemoCondition } from '@ionic-enterprise/cs-demo-weather-widgets-vue';

export default defineComponent({
  name: 'SomePage',
  components: { CsdemoCondition },
  setup() {
    const condition = ref(200);

    const icons = { /* see above */ }

    return { condition, icons };
  },
});
```

#### `csdemo-uv-index`

Displays the UV index along with a risk level, in a color appropriate for the level of risk.

```html
<template>
  <csdemo-uv-index :uvIndex="uvIndex"></csdemo-uv-index>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { CsdemoUvIndex } from '@ionic-enterprise/cs-demo-weather-widgets-vue';

export default defineComponent({
  name: 'SomePage',
  components: { CsdemoUvIndex },
  setup() {
    const uvIndex = ref(2.5);

    return { uvIndex };
  },
});
```

#### `csdemo-daily-forecast`

Displays the forecast for a given day.

```html
<template>
  <csdemo-daily-forecast :scale="scale" :forecasts="forecasts" :iconPaths="icons"></csdemo-daily-forecast>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { CsdemoDailyForecast } from '@ionic-enterprise/cs-demo-weather-widgets-vue';

export default defineComponent({
  name: 'SomePage',
  components: { CsdemoDailyForecast },
  setup() {
    const forecasts = ref([ array-of-forecasts-for-day ]);
    const scale = ref('F');

    const icons = { /* see above */ }

    return { forecasts, icons, scale };
  },
});
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

That is it. We also have a [demo application](https://github.com/ionic-enterprise/ionic-weather-vue) you can check out if you would like to.

Happy Coding!!