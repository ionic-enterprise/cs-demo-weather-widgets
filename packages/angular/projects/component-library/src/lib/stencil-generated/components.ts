/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from '@ionic-enterprise/cs-demo-weather-widgets/components';

import { defineCustomElement as defineCsdemoCondition } from '@ionic-enterprise/cs-demo-weather-widgets/components/csdemo-condition.js';
import { defineCustomElement as defineCsdemoDailyForecast } from '@ionic-enterprise/cs-demo-weather-widgets/components/csdemo-daily-forecast.js';
import { defineCustomElement as defineCsdemoTemperature } from '@ionic-enterprise/cs-demo-weather-widgets/components/csdemo-temperature.js';
import { defineCustomElement as defineCsdemoUvIndex } from '@ionic-enterprise/cs-demo-weather-widgets/components/csdemo-uv-index.js';


export declare interface CsdemoCondition extends Components.CsdemoCondition {}

@ProxyCmp({
  defineCustomElementFn: defineCsdemoCondition,
  inputs: ['bgColor', 'condition', 'iconPaths']
})
@Component({
  selector: 'csdemo-condition',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['bgColor', 'condition', 'iconPaths']
})
export class CsdemoCondition {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CsdemoDailyForecast extends Components.CsdemoDailyForecast {}

@ProxyCmp({
  defineCustomElementFn: defineCsdemoDailyForecast,
  inputs: ['forecasts', 'iconPaths', 'scale']
})
@Component({
  selector: 'csdemo-daily-forecast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['forecasts', 'iconPaths', 'scale']
})
export class CsdemoDailyForecast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CsdemoTemperature extends Components.CsdemoTemperature {}

@ProxyCmp({
  defineCustomElementFn: defineCsdemoTemperature,
  inputs: ['scale', 'temperature']
})
@Component({
  selector: 'csdemo-temperature',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['scale', 'temperature']
})
export class CsdemoTemperature {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CsdemoUvIndex extends Components.CsdemoUvIndex {}

@ProxyCmp({
  defineCustomElementFn: defineCsdemoUvIndex,
  inputs: ['uvIndex']
})
@Component({
  selector: 'csdemo-uv-index',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['uvIndex']
})
export class CsdemoUvIndex {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
