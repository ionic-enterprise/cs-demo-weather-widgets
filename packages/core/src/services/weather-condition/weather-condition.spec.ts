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
    it('is Unknown for condition 810', () => {
      expect(weatherCondition.description(810)).toEqual('Unknown');
    });

    it('is Sunny for condition 800', () => {
      expect(weatherCondition.description(800)).toEqual('Sunny');
    });

    it('is Sunny for condition 904', () => {
      expect(weatherCondition.description(904)).toEqual('Sunny');
    });

    it('is Cloudy for 801 through 809', () => {
      for (let x = 801; x < 810; x++) {
        expect(weatherCondition.description(x)).toEqual('Cloudy');
      }
    });

    it('is Rain for 300 through 399', () => {
      for (let x = 300; x < 400; x++) {
        expect(weatherCondition.description(x)).toEqual('Rain');
      }
    });

    it('is Showers for 500 through 599', () => {
      for (let x = 500; x < 600; x++) {
        expect(weatherCondition.description(x)).toEqual('Showers');
      }
    });

    it('is Fog for 701 through 771', () => {
      for (let x = 701; x < 772; x++) {
        expect(weatherCondition.description(x)).toEqual('Fog');
      }
    });

    it('is Scattered Storms for 230 through 299', () => {
      for (let x = 230; x < 300; x++) {
        expect(weatherCondition.description(x)).toEqual('Scattered Storms');
      }
    });

    it('is Thunderstorms for 200 through 229', () => {
      for (let x = 200; x < 230; x++) {
        expect(weatherCondition.description(x)).toEqual('Thunderstorms');
      }
    });

    it('is Snow for 600 through 699', () => {
      for (let x = 600; x < 700; x++) {
        expect(weatherCondition.description(x)).toEqual('Snow');
      }
    });

    it('is Snow for 903', () => {
      expect(weatherCondition.description(903)).toEqual('Snow');
    });
  });

  describe('image url', () => {
    let paths: ConditionIconPaths;
    describe('overriding all paths', () => {
      beforeEach(() => {
        paths = {
          sunny: './assets/override/sunny.png',
          cloudy: './assets/override/cloudy.png',
          lightRain: './assets/override/light-rain.png',
          shower: './assets/override/shower.png',
          sunnyThunderStorm: './assets/override/sunny-tstorm.png',
          thunderStorm: './assets/override/tstorm.png',
          fog: './assets/override/fog.png',
          snow: './assets/override/snow.png',
          unknown: './assets/override/unknown.png',
        };
      });

      it('is Unknown for condition 810', () => {
        expect(weatherCondition.imageUrl(810, paths)).toEqual(paths.unknown);
        expect(weatherCondition.imageUrl(810, undefined)).toEqual('assets/images/unknown.png');
      });

      it('is Sunny for condition 800', () => {
        expect(weatherCondition.imageUrl(800, paths)).toEqual(paths.sunny);
        expect(weatherCondition.imageUrl(800, undefined)).toEqual('assets/images/sunny.png');
      });

      it('is Sunny for condition 904', () => {
        expect(weatherCondition.imageUrl(904, paths)).toEqual(paths.sunny);
        expect(weatherCondition.imageUrl(904, undefined)).toEqual('assets/images/sunny.png');
      });

      it('is Cloudy for 801 through 809', () => {
        for (let x = 801; x < 810; x++) {
          expect(weatherCondition.imageUrl(x, paths)).toEqual(paths.cloudy);
          expect(weatherCondition.imageUrl(x, undefined)).toEqual('assets/images/cloudy.png');
        }
      });

      it('is Rain for 300 through 399', () => {
        for (let x = 300; x < 400; x++) {
          expect(weatherCondition.imageUrl(x, paths)).toEqual(paths.lightRain);
          expect(weatherCondition.imageUrl(x, undefined)).toEqual('assets/images/light-rain.png');
        }
      });

      it('is Showers for 500 through 599', () => {
        for (let x = 500; x < 600; x++) {
          expect(weatherCondition.imageUrl(x, paths)).toEqual(paths.shower);
          expect(weatherCondition.imageUrl(x, undefined)).toEqual('assets/images/shower.png');
        }
      });

      it('is Fog for 701 through 771', () => {
        for (let x = 701; x < 772; x++) {
          expect(weatherCondition.imageUrl(x, paths)).toEqual(paths.fog);
          expect(weatherCondition.imageUrl(x, undefined)).toEqual('assets/images/fog.png');
        }
      });

      it('is Scattered Storms for 230 through 299', () => {
        for (let x = 230; x < 300; x++) {
          expect(weatherCondition.imageUrl(x, paths)).toEqual(paths.sunnyThunderStorm);
          expect(weatherCondition.imageUrl(x, undefined)).toEqual('assets/images/sunny-tstorm.png');
        }
      });

      it('is Thunderstorms for 200 through 229', () => {
        for (let x = 200; x < 230; x++) {
          expect(weatherCondition.imageUrl(x, paths)).toEqual(paths.thunderStorm);
          expect(weatherCondition.imageUrl(x, undefined)).toEqual('assets/images/tstorm.png');
        }
      });

      it('is Snow for 600 through 699', () => {
        for (let x = 600; x < 700; x++) {
          expect(weatherCondition.imageUrl(x, paths)).toEqual(paths.snow);
          expect(weatherCondition.imageUrl(x, undefined)).toEqual('assets/images/snow.png');
        }
      });

      it('is Snow for 903', () => {
        expect(weatherCondition.imageUrl(903, paths)).toEqual(paths.snow);
        expect(weatherCondition.imageUrl(903, undefined)).toEqual('assets/images/snow.png');
      });
    });

    describe('partial overridden paths', () => {
      beforeEach(() => {
        paths = {
          sunny: './assets/override/sunny.png',
          lightRain: './assets/override/light-rain.png',
          sunnyThunderStorm: './assets/override/sunny-tstorm.png',
          fog: './assets/override/fog.png',
          unknown: './assets/override/unknown.png',
        };
      });

      it('is Unknown for condition 810', () => {
        expect(weatherCondition.imageUrl(810, paths)).toEqual(paths.unknown);
        expect(weatherCondition.imageUrl(810, undefined)).toEqual('assets/images/unknown.png');
      });

      it('is Sunny for condition 800', () => {
        expect(weatherCondition.imageUrl(800, paths)).toEqual(paths.sunny);
        expect(weatherCondition.imageUrl(800, undefined)).toEqual('assets/images/sunny.png');
      });

      it('is Sunny for condition 904', () => {
        expect(weatherCondition.imageUrl(904, paths)).toEqual(paths.sunny);
        expect(weatherCondition.imageUrl(904, undefined)).toEqual('assets/images/sunny.png');
      });

      it('is Cloudy for 801 through 809', () => {
        for (let x = 801; x < 810; x++) {
          expect(weatherCondition.imageUrl(x, paths)).toEqual('assets/images/cloudy.png');
          expect(weatherCondition.imageUrl(x, undefined)).toEqual('assets/images/cloudy.png');
        }
      });

      it('is Rain for 300 through 399', () => {
        for (let x = 300; x < 400; x++) {
          expect(weatherCondition.imageUrl(x, paths)).toEqual(paths.lightRain);
          expect(weatherCondition.imageUrl(x, undefined)).toEqual('assets/images/light-rain.png');
        }
      });

      it('is Showers for 500 through 599', () => {
        for (let x = 500; x < 600; x++) {
          expect(weatherCondition.imageUrl(x, paths)).toEqual('assets/images/shower.png');
          expect(weatherCondition.imageUrl(x, undefined)).toEqual('assets/images/shower.png');
        }
      });

      it('is Fog for 701 through 771', () => {
        for (let x = 701; x < 772; x++) {
          expect(weatherCondition.imageUrl(x, paths)).toEqual(paths.fog);
          expect(weatherCondition.imageUrl(x, undefined)).toEqual('assets/images/fog.png');
        }
      });

      it('is Scattered Storms for 230 through 299', () => {
        for (let x = 230; x < 300; x++) {
          expect(weatherCondition.imageUrl(x, paths)).toEqual(paths.sunnyThunderStorm);
          expect(weatherCondition.imageUrl(x, undefined)).toEqual('assets/images/sunny-tstorm.png');
        }
      });

      it('is Thunderstorms for 200 through 229', () => {
        for (let x = 200; x < 230; x++) {
          expect(weatherCondition.imageUrl(x, paths)).toEqual('assets/images/tstorm.png');
          expect(weatherCondition.imageUrl(x, undefined)).toEqual('assets/images/tstorm.png');
        }
      });

      it('is Snow for 600 through 699', () => {
        for (let x = 600; x < 700; x++) {
          expect(weatherCondition.imageUrl(x, paths)).toEqual('assets/images/snow.png');
          expect(weatherCondition.imageUrl(x, undefined)).toEqual('assets/images/snow.png');
        }
      });

      it('is Snow for 903', () => {
        expect(weatherCondition.imageUrl(903, paths)).toEqual('assets/images/snow.png');
        expect(weatherCondition.imageUrl(903, undefined)).toEqual('assets/images/snow.png');
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
