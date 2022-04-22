import { Component, Prop, h, Watch } from '@stencil/core';
import { format } from 'date-fns';
import { ConditionIconPaths } from '../../models/condition-icon-paths';
import { Forecast } from '../../models/forecast';
import { WeatherCondition } from '../../services/weather-condition/weather-condition';

@Component({
  tag: 'csdemo-daily-forecast',
  styleUrl: 'csdemo-daily-forecast.css',
  shadow: true,
})
export class csdemoDailyForecast {
  @Prop() forecasts: Array<Forecast>;
  @Prop() iconPaths: ConditionIconPaths;
  @Prop() scale: string;

  private condition: number;
  private iconUrl: string;
  private weatherCondition: WeatherCondition;

  constructor() {
    this.weatherCondition = new WeatherCondition();
  }

  @Watch('forecasts')
  handleForcastsChange() {
    this.setCondition();
    this.setIconUrl();
  }

  componentWillLoad() {
    if (this.forecasts) {
      this.handleForcastsChange();
    }
  }

  private setCondition() {
    this.condition = this.forecasts && this.weatherCondition.mostSeriousCondition(this.forecasts);
  }

  private setIconUrl() {
    this.iconUrl = this.condition && this.iconPaths && this.weatherCondition.imageUrl(this.condition, this.iconPaths);
  }

  private dateString(): string {
    return this.forecasts && this.forecasts.length && format(new Date(this.forecasts[0].date), 'E MMM d, yyyy');
  }

  render() {
    const label = this.weatherCondition.description(this.condition);
    return (
      <div class="container">
        {this.iconUrl && (
          <div class="icon">
            <img alt={label} src={this.iconUrl} />
          </div>
        )}
        <div class="description">
          <div class="date">{this.dateString()}</div>
          <csdemo-condition condition={this.condition} />
          <div class="temperature-group">
            <div class="temperature-item temperature-low">
              <span class="label">Low: </span>
              <csdemo-temperature temperature={this.weatherCondition.low(this.forecasts)} scale={this.scale} />
            </div>
            <div class="temperature-item temperature-high">
              <span class="label">High: </span>
              <csdemo-temperature temperature={this.weatherCondition.high(this.forecasts)} scale={this.scale} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
