import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'csdemo-temperature',
  styleUrl: 'csdemo-temperature.css',
  shadow: true,
})
export class csdemoTemperature {
  /**
   * The temperature specified in Kelvin.
   */
  @Prop() temperature: number;

  /**
   * The temperature is specified in Kelvin.
   * The scale specifies the units to display the temperature in, 'C' for Celsius and 'F' for Fahrenheit.
   */
  @Prop() scale: string;

  private celcius(): string {
    return `${(this.temperature - 273.15).toFixed(0)} ℃`;
  }

  private fahrenheit(): string {
    return `${((this.temperature * 9) / 5 - 459.67).toFixed(0)} ℉`;
  }

  render() {
    if (this.temperature || this.temperature === 0) {
      return <span>{this.scale === 'C' ? this.celcius() : this.fahrenheit()}</span>;
    }
  }
}
