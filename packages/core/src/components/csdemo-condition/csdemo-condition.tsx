import { Component, Prop, h } from '@stencil/core';
import { ConditionIconPaths } from '../../models/condition-icon-paths';
import { WeatherCondition } from '../../services/weather-condition/weather-condition';

@Component({
  tag: 'csdemo-condition',
  styleUrl: 'csdemo-condition.css',
  shadow: true,
})
export class csdemoCondition {
  @Prop() iconPaths: ConditionIconPaths;
  @Prop() condition: number;
  private weatherCondition: WeatherCondition;

  constructor() {
    this.weatherCondition = new WeatherCondition();
  }

  render() {
    const url = this.weatherCondition.imageUrl(this.condition, this.iconPaths);
    const label = this.weatherCondition.description(this.condition);
    return (
      <div class="condition-container">
        <div class="condition-image">{url && <img alt={label} src={url} />}</div>
        <div class="condition-label">{label}</div>
      </div>
    );
  }
}
