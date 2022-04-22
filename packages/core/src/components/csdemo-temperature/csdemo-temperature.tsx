import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'csdemo-temperature',
  styleUrl: 'csdemo-temperature.css',
  shadow: true,
})
export class csdemoTemperature {
  @Prop() temperature: number;
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
