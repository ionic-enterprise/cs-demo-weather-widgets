# Weather Widgets Angular

This is a sample custom element library that contains some simple weather related web components. This library contains the following components:

- Simple
  - **csdemo-temperature** - takes a temperature in Kelvin and displays the value in either Celsius or Fahrenheit
  - **csdemo-uv-index** - takes a UV Index value and displays the value with a description and color coding
  - **csdemo-condition** - given a mapping of condition types to image URLs and a condition code, determines which code to use and displays the image with a label
- Compound
  - **csdemo-daily-forecast** - condition, date, low, high

This package is intended for use in an Angular application. It wraps the web components in Angular proxies that make using the web components more natural within an Angular application.

This project is intended to be a simple example of how these proxies work with Stencil based web component projects. It is not intended to be a full-featured component library.

## Installation

```bash
npm @ionic-enterprise/cs-demo-weather-widgets-angular
```

Adjust accordingly if you are using `yarn`, `pnpm`, etc.

## Usage

### Module

Any module that is going to use a Weather Widget component should import the `CsdemoWeatherWidgetsModule` module. For example:

```typescript
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CsdemoWeatherWidgetsModule } from '@ionic-enterprise/cs-demo-weather-widgets-angular';
import { IonicModule } from '@ionic/angular';
import { ForecastPageRoutingModule } from './forecast-routing.module';
import { ForecastPage } from './forecast.page';

@NgModule({
  imports: [IonicModule, CommonModule, CsdemoWeatherWidgetsModule, FormsModule, ForecastPageRoutingModule],
  declarations: [ForecastPage],
})
export class ForecastPageModule {}
```



### Components

Any component that take a `condition` assumes that the condition is one of the [condition codes](https://openweathermap.org/weather-conditions) used by [OpenWeatherMap.org](https://openweathermap.org).

#### `csdemo-temperature`

Displays the `temperature`, given in Kelvin, in the given `scale` (C or F).

```html
<csdemo-temperature scale="F" temperature="297"></csdemo-temperature>
```

#### `csdemo-condition`

Displays the current condition in both text and icon form.

```html
<csdemo-condition [condition]="200" [iconPaths]="iconMap"></csdemo-condition>
```

#### `csdemo-daily-forecast`

Displays the forcast for a given day.

```html
<csdemo-daily-forecast scale="F" [forecasts]="forecastData" [iconPaths]="iconMap"></csdemo-daily-forecast>
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

#### `csdemo-uv-index`

Displays the UV index along with a risk level, in a color appropriate for the level of risk.

```html
<csdemo-uv-index [uvIndex]="value"></csdemo-uv-index>
```

### Image Handling


This library does not include its own images. In order to inform the library how to get the images to use, you need to set up a mapping object that specifies the image file to use for each of the weather conditions.

In Angular applications, it is often useful to attach this mapping object to the `environment` object as such:

```TypeScript
export const environment = {
  production: false,
  icons: {
    sunny: 'assets/images/sunny.png',
    cloudy: 'assets/images/cloudy.png',
    lightRain: 'assets/images/light-rain.png',
    shower: 'assets/images/shower.png',
    sunnyThunderStorm: 'assets/images/partial-tstorm.png',
    thunderStorm: 'assets/images/tstorm.png',
    fog: 'assets/images/fog.png',
    snow: 'assets/images/snow.png',
    unknown: 'assets/images/dunno.png',
  },
};
```

If you have multiple environments, refactor as needed to keep your code DRY.

## Conclusion

That is it. We also have a [demo application](https://github.com/ionic-enterprise/ionic-weather-angular) you can check out if you would like to.

Happy Coding!! 🤓
