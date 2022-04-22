![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Demo Weather Widgets

This is a sample custom element library that contains some simple weather related elements. This library contains the following custom elements:

- Simple
  - **csdemo-temperature** - takes a temperature in Kelvin and displays the value in either Celcius or Fahrenheit
  - **csdemo-uv-index** - takes a UV Index value and displays the value with a description and color coding
  - **csdemo-condition** - given a mapping of condition types to image URLs and a condition code, determines which code to use and displays the image with a label
- Compound
  - **csdemo-daily-forecast** - condition, date, low, high

## Usage

This library is _not_ currently published to NPM, so the easiest way to include it is to:

1. `npm run build`
1. `npm link`
1. then in any consuming project - `npm link csdemo-weather-widgets`

The Stencil documentation site has an excellent [Framework Integration Guide](https://stenciljs.com/docs/framework-integration). Following that to guide to integrate the library with your project.

**Note:** if you are using Vue, the prefix used is `csdemo` so the `ignoredElements` line is `Vue.config.ignoredElements = [/csdemo-\w*/];`.

### Images

This library does not include its own images. In order to inform the library how to get the images to use, you need to set up a map that specifies the image file to use for each of the weather conditions.

Here is an example:

```TypeScript
export class IconMap {
  sunny = 'assets/images/sunny.png';
  cloudy = 'assets/images/cloudy.png';
  lightRain = 'assets/images/light-rain.png';
  shower = 'assets/images/shower.png';
  sunnyThunderStorm = 'assets/images/sunny-tstorm.png';
  thunderStorm = 'assets/images/tstorm.png';
  fog = 'assets/images/fog.png';
  snow = 'assets/images/snow.png';
  unknown = 'assets/images/unknown.png';
}
```

### Components

Any component that take a `condition` assumes that the condition is one of the [condition codes](https://openweathermap.org/weather-conditions) used by [OpenWeatherMap.org](https://openweathermap.org).

Examples shown below are using Angular property bindings. Use whatever is appropriate for the architecture of your application.

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