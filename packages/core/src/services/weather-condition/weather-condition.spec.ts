import { ConditionIconPaths } from '../../models/condition-icon-paths';
import { WeatherCondition } from './weather-condition';

describe('Weather Condition Service', () => {
  let weatherCondition: WeatherCondition;
  beforeEach(() => {
    weatherCondition = new WeatherCondition();
  });

  it('builds', () => {
    expect(weatherCondition).toBeTruthy();
  });

  describe('rank', () => {
    it('is 0 for condition 810', () => {
      expect(weatherCondition.rank(810)).toEqual(0);
    });

    it('is 1 for condition 800', () => {
      expect(weatherCondition.rank(800)).toEqual(1);
    });

    it('is 1 for condition 904', () => {
      expect(weatherCondition.rank(904)).toEqual(1);
    });

    it('is 10 for 801 through 809', () => {
      for (let x = 801; x < 810; x++) {
        expect(weatherCondition.rank(x)).toEqual(10);
      }
    });

    it('is 20 for 300 through 399', () => {
      for (let x = 300; x < 400; x++) {
        expect(weatherCondition.rank(x)).toEqual(20);
      }
    });

    it('is 30 for 500 through 599', () => {
      for (let x = 500; x < 600; x++) {
        expect(weatherCondition.rank(x)).toEqual(30);
      }
    });

    it('is 40 for 701 through 771', () => {
      for (let x = 701; x < 772; x++) {
        expect(weatherCondition.rank(x)).toEqual(40);
      }
    });

    it('is 50 for 230 through 299', () => {
      for (let x = 230; x < 300; x++) {
        expect(weatherCondition.rank(x)).toEqual(50);
      }
    });

    it('is 60 for 200 through 229', () => {
      for (let x = 200; x < 230; x++) {
        expect(weatherCondition.rank(x)).toEqual(60);
      }
    });

    it('is 70 for 600 through 699', () => {
      for (let x = 600; x < 700; x++) {
        expect(weatherCondition.rank(x)).toEqual(70);
      }
    });

    it('is 70 for 903', () => {
      expect(weatherCondition.rank(903)).toEqual(70);
    });
  });

  describe('description', () => {
    it.each([
      [100, 'Unknown'],
      [200, 'Thunderstorm with light rain'],
      [201, 'Thunderstorm with rain'],
      [202, 'Thunderstorm with heavy rain'],
      [210, 'Light thunderstorm'],
      [211, 'Thunderstorm'],
      [212, 'Heavy thunderstorm'],
      [221, 'Ragged thunderstorm'],
      [230, 'Thunderstorm with light drizzle'],
      [231, 'Thunderstorm with drizzle'],
      [232, 'Thunderstorm with heavy drizzle'],
      [300, 'Light drizzle'],
      [301, 'Drizzle'],
      [302, 'Heavy drizzle'],
      [310, 'Light drizzle'],
      [311, 'Drizzle'],
      [312, 'Heavy drizzle'],
      [313, 'Rain and drizzle'],
      [314, 'Heavy drizzle'],
      [321, 'Shower drizzle'],
      [500, 'Light rain'],
      [501, 'Rain'],
      [502, 'Heavy rain'],
      [503, 'Very heavy rain'],
      [504, 'Extreme rain'],
      [511, 'Freezing rain'],
      [520, 'Light shower'],
      [521, 'Shower'],
      [522, 'Heavy shower'],
      [531, 'Ragged shower'],
      [600, 'Light snow'],
      [601, 'Snow'],
      [602, 'Heavy snow'],
      [611, 'Sleet'],
      [612, 'Light sleet'],
      [613, 'Shower sleet'],
      [615, 'Light rain and snow'],
      [616, 'Mixed rain and snow'],
      [620, 'Light snow shower'],
      [621, 'Snow shower'],
      [622, 'Heavy snow shower'],
      [701, 'Mist'],
      [711, 'Smoke'],
      [721, 'Haze'],
      [731, 'Sand and dust whirls'],
      [741, 'Fog'],
      [751, 'Sand'],
      [761, 'Dust'],
      [762, 'Volcanic ash'],
      [771, 'Squalls'],
      [781, 'Tornado'],
      [800, 'Clear sky'],
      [801, 'Few clouds'],
      [802, 'Scattered clouds'],
      [803, 'Broken clouds'],
      [804, 'Overcast clouds'],
      [900, 'Unknown'],
    ])('for condition %s is %s', (condition, description) => {
      expect(weatherCondition.description(condition)).toEqual(description);
    });
  });

  describe('image url', () => {
    describe('overriding all paths', () => {
      const paths: ConditionIconPaths = {
        sunny: './assets/override/sunny.png',
        cloudy: './assets/override/cloudy.png',
        lightRain: './assets/override/light-rain.png',
        shower: './assets/override/shower.png',
        sunnyThunderstorm: './assets/override/sunny-tstorm.png',
        thunderstorm: './assets/override/tstorm.png',
        fog: './assets/override/fog.png',
        snow: './assets/override/snow.png',
        unknown: './assets/override/unknown.png',
      };

      it.each([
        [100, 'assets/images/unknown.png', paths.unknown],
        [200, 'assets/images/tstorm.png', paths.thunderstorm],
        [201, 'assets/images/tstorm.png', paths.thunderstorm],
        [202, 'assets/images/tstorm.png', paths.thunderstorm],
        [210, 'assets/images/tstorm.png', paths.thunderstorm],
        [211, 'assets/images/tstorm.png', paths.thunderstorm],
        [212, 'assets/images/tstorm.png', paths.thunderstorm],
        [221, 'assets/images/sunny-tstorm.png', paths.sunnyThunderstorm],
        [230, 'assets/images/sunny-tstorm.png', paths.sunnyThunderstorm],
        [231, 'assets/images/sunny-tstorm.png', paths.sunnyThunderstorm],
        [232, 'assets/images/sunny-tstorm.png', paths.sunnyThunderstorm],
        [300, 'assets/images/light-rain.png', paths.lightRain],
        [301, 'assets/images/light-rain.png', paths.lightRain],
        [302, 'assets/images/light-rain.png', paths.lightRain],
        [310, 'assets/images/light-rain.png', paths.lightRain],
        [311, 'assets/images/light-rain.png', paths.lightRain],
        [312, 'assets/images/light-rain.png', paths.lightRain],
        [313, 'assets/images/light-rain.png', paths.lightRain],
        [314, 'assets/images/light-rain.png', paths.lightRain],
        [321, 'assets/images/shower.png', paths.shower],
        [500, 'assets/images/light-rain.png', paths.lightRain],
        [501, 'assets/images/shower.png', paths.shower],
        [502, 'assets/images/shower.png', paths.shower],
        [503, 'assets/images/shower.png', paths.shower],
        [504, 'assets/images/shower.png', paths.shower],
        [511, 'assets/images/shower.png', paths.shower],
        [520, 'assets/images/light-rain.png', paths.lightRain],
        [521, 'assets/images/shower.png', paths.shower],
        [522, 'assets/images/shower.png', paths.shower],
        [531, 'assets/images/shower.png', paths.shower],
        [600, 'assets/images/snow.png', paths.snow],
        [601, 'assets/images/snow.png', paths.snow],
        [602, 'assets/images/snow.png', paths.snow],
        [611, 'assets/images/snow.png', paths.snow],
        [612, 'assets/images/snow.png', paths.snow],
        [613, 'assets/images/snow.png', paths.snow],
        [615, 'assets/images/snow.png', paths.snow],
        [616, 'assets/images/snow.png', paths.snow],
        [620, 'assets/images/snow.png', paths.snow],
        [621, 'assets/images/snow.png', paths.snow],
        [622, 'assets/images/snow.png', paths.snow],
        [701, 'assets/images/fog.png', paths.fog],
        [711, 'assets/images/fog.png', paths.fog],
        [721, 'assets/images/fog.png', paths.fog],
        [731, 'assets/images/fog.png', paths.fog],
        [741, 'assets/images/fog.png', paths.fog],
        [751, 'assets/images/fog.png', paths.fog],
        [761, 'assets/images/fog.png', paths.fog],
        [762, 'assets/images/fog.png', paths.fog],
        [771, 'assets/images/tstorm.png', paths.thunderstorm],
        [781, 'assets/images/tstorm.png', paths.thunderstorm],
        [800, 'assets/images/sunny.png', paths.sunny],
        [801, 'assets/images/cloudy.png', paths.cloudy],
        [802, 'assets/images/cloudy.png', paths.cloudy],
        [803, 'assets/images/cloudy.png', paths.cloudy],
        [804, 'assets/images/cloudy.png', paths.cloudy],
        [900, 'assets/images/unknown.png', paths.unknown],
      ])('for condition %s is %s overridden as %s', (condition, defaultPath, overridePath) => {
        expect(weatherCondition.imageUrl(condition, undefined)).toEqual(defaultPath);
        expect(weatherCondition.imageUrl(condition, paths)).toEqual(overridePath);
      });
    });

    describe('partial overridden paths', () => {
      const paths: ConditionIconPaths = {
        sunny: './assets/override/sunny.png',
        lightRain: './assets/override/light-rain.png',
        sunnyThunderstorm: './assets/override/sunny-tstorm.png',
        fog: './assets/override/fog.png',
        unknown: './assets/override/unknown.png',
      };

      it.each([
        [100, 'assets/images/unknown.png', paths.unknown],
        [200, 'assets/images/tstorm.png', paths.thunderstorm],
        [201, 'assets/images/tstorm.png', paths.thunderstorm],
        [202, 'assets/images/tstorm.png', paths.thunderstorm],
        [210, 'assets/images/tstorm.png', paths.thunderstorm],
        [211, 'assets/images/tstorm.png', paths.thunderstorm],
        [212, 'assets/images/tstorm.png', paths.thunderstorm],
        [221, 'assets/images/sunny-tstorm.png', paths.sunnyThunderstorm],
        [230, 'assets/images/sunny-tstorm.png', paths.sunnyThunderstorm],
        [231, 'assets/images/sunny-tstorm.png', paths.sunnyThunderstorm],
        [232, 'assets/images/sunny-tstorm.png', paths.sunnyThunderstorm],
        [300, 'assets/images/light-rain.png', paths.lightRain],
        [301, 'assets/images/light-rain.png', paths.lightRain],
        [302, 'assets/images/light-rain.png', paths.lightRain],
        [310, 'assets/images/light-rain.png', paths.lightRain],
        [311, 'assets/images/light-rain.png', paths.lightRain],
        [312, 'assets/images/light-rain.png', paths.lightRain],
        [313, 'assets/images/light-rain.png', paths.lightRain],
        [314, 'assets/images/light-rain.png', paths.lightRain],
        [321, 'assets/images/shower.png', paths.shower],
        [500, 'assets/images/light-rain.png', paths.lightRain],
        [501, 'assets/images/shower.png', paths.shower],
        [502, 'assets/images/shower.png', paths.shower],
        [503, 'assets/images/shower.png', paths.shower],
        [504, 'assets/images/shower.png', paths.shower],
        [511, 'assets/images/shower.png', paths.shower],
        [520, 'assets/images/light-rain.png', paths.lightRain],
        [521, 'assets/images/shower.png', paths.shower],
        [522, 'assets/images/shower.png', paths.shower],
        [531, 'assets/images/shower.png', paths.shower],
        [600, 'assets/images/snow.png', paths.snow],
        [601, 'assets/images/snow.png', paths.snow],
        [602, 'assets/images/snow.png', paths.snow],
        [611, 'assets/images/snow.png', paths.snow],
        [612, 'assets/images/snow.png', paths.snow],
        [613, 'assets/images/snow.png', paths.snow],
        [615, 'assets/images/snow.png', paths.snow],
        [616, 'assets/images/snow.png', paths.snow],
        [620, 'assets/images/snow.png', paths.snow],
        [621, 'assets/images/snow.png', paths.snow],
        [622, 'assets/images/snow.png', paths.snow],
        [701, 'assets/images/fog.png', paths.fog],
        [711, 'assets/images/fog.png', paths.fog],
        [721, 'assets/images/fog.png', paths.fog],
        [731, 'assets/images/fog.png', paths.fog],
        [741, 'assets/images/fog.png', paths.fog],
        [751, 'assets/images/fog.png', paths.fog],
        [761, 'assets/images/fog.png', paths.fog],
        [762, 'assets/images/fog.png', paths.fog],
        [771, 'assets/images/tstorm.png', paths.thunderstorm],
        [781, 'assets/images/tstorm.png', paths.thunderstorm],
        [800, 'assets/images/sunny.png', paths.sunny],
        [801, 'assets/images/cloudy.png', paths.cloudy],
        [802, 'assets/images/cloudy.png', paths.cloudy],
        [803, 'assets/images/cloudy.png', paths.cloudy],
        [804, 'assets/images/cloudy.png', paths.cloudy],
        [900, 'assets/images/unknown.png', paths.unknown],
      ])('for condition %s is %s', (condition, defaultPath, overridePath) => {
        expect(weatherCondition.imageUrl(condition, paths)).toEqual(overridePath || defaultPath);
        expect(weatherCondition.imageUrl(condition, undefined)).toEqual(defaultPath);
      });
    });
  });

  describe('high', () => {
    it('is undefined if there are no forecasts', () => {
      expect(weatherCondition.high(null)).toBeUndefined();
      expect(weatherCondition.high(undefined)).toBeUndefined();
      expect(weatherCondition.high([])).toBeUndefined();
    });

    it('returns the highest temperature', () => {
      expect(
        weatherCondition.high([
          {
            date: new Date(),
            condition: 800,
            temperature: 287.15,
          },
          {
            date: new Date(),
            condition: 800,
            temperature: 286.65,
          },
          {
            date: new Date(),
            condition: 801,
            temperature: 289.65,
          },
          {
            date: new Date(),
            condition: 801,
            temperature: 290.65,
          },
          {
            date: new Date(),
            condition: 801,
            temperature: 295.15,
          },
          {
            date: new Date(),
            condition: 305,
            temperature: 297.15,
          },
          {
            date: new Date(),
            condition: 800,
            temperature: 295.65,
          },
          {
            date: new Date(),
            condition: 800,
            temperature: 293.65,
          },
          {
            date: new Date(),
            condition: 800,
            temperature: 288.65,
          },
        ])
      ).toEqual(297.15);
    });
  });

  describe('low', () => {
    it('is undefined if there are no forecasts', () => {
      expect(weatherCondition.low(null)).toBeUndefined();
      expect(weatherCondition.low(undefined)).toBeUndefined();
      expect(weatherCondition.low([])).toBeUndefined();
    });

    it('returns the lowest temperature', () => {
      expect(
        weatherCondition.low([
          {
            date: new Date(),
            condition: 800,
            temperature: 287.15,
          },
          {
            date: new Date(),
            condition: 800,
            temperature: 286.65,
          },
          {
            date: new Date(),
            condition: 801,
            temperature: 289.65,
          },
          {
            date: new Date(),
            condition: 801,
            temperature: 290.65,
          },
          {
            date: new Date(),
            condition: 801,
            temperature: 295.15,
          },
          {
            date: new Date(),
            condition: 305,
            temperature: 297.15,
          },
          {
            date: new Date(),
            condition: 800,
            temperature: 295.65,
          },
          {
            date: new Date(),
            condition: 800,
            temperature: 293.65,
          },
          {
            date: new Date(),
            condition: 800,
            temperature: 288.65,
          },
        ])
      ).toEqual(286.65);
    });
  });

  describe('most serious condition', () => {
    it('is undefined if there are no forecasts', () => {
      expect(weatherCondition.mostSeriousCondition(null)).toBeUndefined();
      expect(weatherCondition.mostSeriousCondition(undefined)).toBeUndefined();
      expect(weatherCondition.mostSeriousCondition([])).toBeUndefined();
    });

    it('returns the most serious condition', () => {
      expect(
        weatherCondition.mostSeriousCondition([
          {
            date: new Date(),
            condition: 800,
            temperature: 287.15,
          },
          {
            date: new Date(),
            condition: 800,
            temperature: 286.65,
          },
          {
            date: new Date(),
            condition: 801,
            temperature: 289.65,
          },
          {
            date: new Date(),
            condition: 801,
            temperature: 290.65,
          },
          {
            date: new Date(),
            condition: 801,
            temperature: 295.15,
          },
          {
            date: new Date(),
            condition: 305,
            temperature: 297.15,
          },
          {
            date: new Date(),
            condition: 800,
            temperature: 295.65,
          },
          {
            date: new Date(),
            condition: 800,
            temperature: 293.65,
          },
          {
            date: new Date(),
            condition: 800,
            temperature: 288.65,
          },
        ])
      ).toEqual(305);
    });
  });
});
