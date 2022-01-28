import { E2EElement, E2EPage, newE2EPage } from '@stencil/core/testing';

describe('csdemo-daily-forecast', () => {
  describe('without data', () => {
    it('renders', async () => {
      const page = await newE2EPage();

      await page.setContent('<csdemo-daily-forecast></csdemo-daily-forecast>');
      const conditionElement = await page.find(
        'csdemo-daily-forecast >>> csdemo-condition'
      );
      const label = conditionElement.shadowRoot.querySelector(
        '.condition-label'
      );
      const temperatureElements = await page.findAll(
        'csdemo-daily-forecast >>> csdemo-temperature'
      );
      expect(conditionElement).toHaveClass('hydrated');
      expect(temperatureElements.length).toEqual(2);
      expect(temperatureElements[0]).toHaveClass('hydrated');
      expect(temperatureElements[1]).toHaveClass('hydrated');
      expect(label.textContent).toEqual('Unknown');
    });
  });

  describe('with data', () => {
    let paths;
    let forecasts;
    let element: E2EElement;
    let page: E2EPage;

    beforeEach(async () => {
      paths = {
        sunny: './assets/images/sunny.png',
        cloudy: './assets/images/cloudy.png',
        lightRain: './assets/images/light-rain.png',
        shower: './assets/images/shower.png',
        sunnyThunderStorm: './assets/images/sunny-tstorm.png',
        thunderStorm: './assets/images/tstorm.png',
        fog: './assets/images/fog.png',
        snow: './assets/images/snow.png',
        unknown: './assets/images/unknown.png'
      };

      forecasts = [
        {
          date: new Date(2018, 5, 17, 10, 0, 0),
          condition: 800,
          temperature: 287.15
        },
        {
          date: new Date(2018, 5, 17, 11, 0, 0),
          condition: 800,
          temperature: 286.65
        },
        {
          date: new Date(2018, 5, 17, 13, 0, 0),
          condition: 801,
          temperature: 289.65
        },
        {
          date: new Date(2018, 5, 17, 14, 45, 0),
          condition: 801,
          temperature: 290.65
        },
        {
          date: new Date(2018, 5, 17, 15, 0, 0),
          condition: 801,
          temperature: 295.15
        },
        {
          date: new Date(2018, 5, 17, 17, 0, 0),
          condition: 305,
          temperature: 297.15
        },
        {
          date: new Date(2018, 5, 17, 19, 0, 0),
          condition: 600,
          temperature: 270.0
        },
        {
          date: new Date(2018, 5, 17, 20, 0, 0),
          condition: 800,
          temperature: 293.65
        },
        {
          date: new Date(2018, 5, 17, 23, 0, 0),
          condition: 800,
          temperature: 288.65
        }
      ];
      page = await newE2EPage();
      await page.setContent('<csdemo-daily-forecast></csdemo-daily-forecast>');
      element = await page.find('csdemo-daily-forecast');
      element.setProperty('iconPaths', paths);
      element.setProperty('forecasts', forecasts);
      element.setProperty('scale', 'C');
      await page.waitForChanges();
    });

    it('displays the date', async () => {
      const dateElement = await page.find('csdemo-daily-forecast >>> .date');
      expect(dateElement.textContent).toEqual('Sun Jun 17, 2018');
    });

    it('displays the icon for the worst condition', async () => {
      const imgElement = await page.find('csdemo-daily-forecast >>> img');
      expect(imgElement.getAttribute('src')).toEqual('./assets/images/snow.png');
    });

    it('displays the label for the worst condition', async () => {
      const condition = await page.find('csdemo-daily-forecast >>> csdemo-condition');
      const label = condition.shadowRoot.querySelector('.condition-label');
      expect(label.textContent).toEqual('Snow');
    });

    it('displays the low temperature', async () => {
      const temperatureElements = await page.findAll('csdemo-daily-forecast >>> csdemo-temperature');
      const temp = temperatureElements[0].shadowRoot.querySelector('span');
      expect(temp.textContent).toEqual('-3 ℃');
    });

    it('displays the high temperature',async () => {
      const temperatureElements = await page.findAll('csdemo-daily-forecast >>> csdemo-temperature');
      const temp = temperatureElements[1].shadowRoot.querySelector('span');
      expect(temp.textContent).toEqual('24 ℃');
    });
  });
});
