import { newE2EPage } from '@stencil/core/testing';

describe('csdemo-condition', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<csdemo-condition></csdemo-condition>');
    const element = await page.find('csdemo-condition');
    const label = await page.find('csdemo-condition >>> .condition-label');
    expect(element).toHaveClass('hydrated');
    expect(label.textContent).toEqual('Unknown');
  });

  it('does not render an icon if noIcon is true', async () => {
    const page = await newE2EPage();

    await page.setContent('<csdemo-condition></csdemo-condition>');
    const element = await page.find('csdemo-condition');

    element.setProperty('noIcon', true);
    await page.waitForChanges();
    const img = await page.find('csdemo-condition >>> .condition-image');
    expect(img).toBeFalsy();
  });

  it('does not render a condition label if noLabel is true', async () => {
    const page = await newE2EPage();

    await page.setContent('<csdemo-condition></csdemo-condition>');
    const element = await page.find('csdemo-condition');

    element.setProperty('noLabel', true);
    await page.waitForChanges();
    const img = await page.find('csdemo-condition >>> .condition-label');
    expect(img).toBeFalsy();
  });

  it('renders the correct icon for the condition', async () => {
    const paths = {
      sunny: './assets/images/sunny.png',
      cloudy: './assets/images/cloudy.png',
      lightRain: './assets/images/light-rain.png',
      shower: './assets/images/shower.png',
      sunnyThunderStorm: './assets/images/sunny-tstorm.png',
      thunderStorm: './assets/images/tstorm.png',
      fog: './assets/images/fog.png',
      snow: './assets/images/snow.png',
      unknown: './assets/images/unknown.png',
    };

    const page = await newE2EPage();

    await page.setContent('<csdemo-condition></csdemo-condition>');
    const element = await page.find('csdemo-condition');

    element.setProperty('iconPaths', paths);
    element.setProperty('condition', 200);
    await page.waitForChanges();
    const img = await page.find('csdemo-condition >>> img');
    expect(img.getAttribute('src')).toEqual(paths.thunderStorm);

    element.setProperty('condition', 229);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.thunderStorm);

    element.setProperty('condition', 230);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.sunnyThunderStorm);

    element.setProperty('condition', 299);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.sunnyThunderStorm);

    element.setProperty('condition', 300);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.lightRain);

    element.setProperty('condition', 399);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.lightRain);

    element.setProperty('condition', 500);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.shower);

    element.setProperty('condition', 599);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.shower);

    element.setProperty('condition', 600);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.snow);

    element.setProperty('condition', 699);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.snow);

    element.setProperty('condition', 701);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.fog);

    element.setProperty('condition', 771);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.fog);

    element.setProperty('condition', 800);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.sunny);

    element.setProperty('condition', 801);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.cloudy);

    element.setProperty('condition', 809);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.cloudy);

    element.setProperty('condition', 810);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.unknown);

    element.setProperty('condition', 903);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.snow);

    element.setProperty('condition', 904);
    await page.waitForChanges();
    expect(img.getAttribute('src')).toEqual(paths.sunny);
  });

  it('renders the correct text for the condition', async () => {
    const page = await newE2EPage();

    await page.setContent('<csdemo-condition></csdemo-condition>');
    const element = await page.find('csdemo-condition');

    element.setProperty('condition', 200);
    await page.waitForChanges();
    const label = await page.find('csdemo-condition >>> .condition-label');
    expect(label.textContent).toEqual('Thunderstorms');

    element.setProperty('condition', 229);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Thunderstorms');

    element.setProperty('condition', 230);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Scattered Storms');

    element.setProperty('condition', 299);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Scattered Storms');

    element.setProperty('condition', 300);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Rain');

    element.setProperty('condition', 399);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Rain');

    element.setProperty('condition', 500);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Showers');

    element.setProperty('condition', 599);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Showers');

    element.setProperty('condition', 600);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Snow');

    element.setProperty('condition', 699);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Snow');

    element.setProperty('condition', 701);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Fog');

    element.setProperty('condition', 771);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Fog');

    element.setProperty('condition', 800);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Sunny');

    element.setProperty('condition', 801);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Cloudy');

    element.setProperty('condition', 809);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Cloudy');

    element.setProperty('condition', 810);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Unknown');

    element.setProperty('condition', 903);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Snow');

    element.setProperty('condition', 904);
    await page.waitForChanges();
    expect(label.textContent).toEqual('Sunny');
  });
});
