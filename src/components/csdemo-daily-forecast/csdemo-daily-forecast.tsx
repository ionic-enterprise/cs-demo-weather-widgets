import { Component, Prop, Watch } from '@stencil/core';
import { format } from 'date-fns';
import { ConditionIconPaths } from '../../models/condition-icon-paths';
import { Forecast } from '../../models/forecast';
import { WeatherCondition } from '../../services/weather-condition/weather-condition';

@Component({
  tag: 'csdemo-daily-forecast',
  styleUrl: 'csdemo-daily-forecast.css',
  shadow: true
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
    this.condition =
      this.forecasts &&
      this.weatherCondition.mostSeriousCondition(this.forecasts);
  }

  private setIconUrl() {
    this.iconUrl =
      this.condition &&
      this.iconPaths &&
      this.weatherCondition.imageUrl(this.condition, this.iconPaths);
  }

  private dateString(): string {
    return (
      this.forecasts &&
      this.forecasts.length &&
      format(this.forecasts[0].date, 'ddd, MMM D, YYYY')
    );
  }

  render() {
    return (
      <div class="container">
        {this.iconUrl && (
          <div class="icon">
            <img src={this.iconUrl} />
          </div>
        )}
        <div class="description">
          <div class="date">{this.dateString()}</div>
          <csdemo-condition condition={this.condition} />
          <div>
            Low:{' '}
            <csdemo-temperature
              temperature={this.weatherCondition.low(this.forecasts)}
              scale={this.scale}
            />
          </div>
          <div>
            High:{' '}
            <csdemo-temperature
              temperature={this.weatherCondition.high(this.forecasts)}
              scale={this.scale}
            />
          </div>
        </div>
      </div>
    );
  }
}
