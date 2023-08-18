/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, NgModule } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from '@ionic-enterprise/cs-demo-weather-widgets/components';

import { defineCustomElement as defineCsdemoCondition } from '@ionic-enterprise/cs-demo-weather-widgets/components/csdemo-condition.js';
import { defineCustomElement as defineCsdemoDailyForecast } from '@ionic-enterprise/cs-demo-weather-widgets/components/csdemo-daily-forecast.js';
import { defineCustomElement as defineCsdemoTemperature } from '@ionic-enterprise/cs-demo-weather-widgets/components/csdemo-temperature.js';
import { defineCustomElement as defineCsdemoUvIndex } from '@ionic-enterprise/cs-demo-weather-widgets/components/csdemo-uv-index.js';
@ProxyCmp({
  defineCustomElementFn: defineCsdemoCondition,
  inputs: ['condition', 'iconPaths', 'noIcon', 'noLabel']
})
@Component({
  selector: 'csdemo-condition',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['condition', 'iconPaths', 'noIcon', 'noLabel'],
})
export class CsdemoCondition {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


@NgModule({
  declarations: [CsdemoCondition],
  exports: [CsdemoCondition]
})
export class CsdemoConditionModule { }


export declare interface CsdemoCondition extends Components.CsdemoCondition {}


@ProxyCmp({
  defineCustomElementFn: defineCsdemoDailyForecast,
  inputs: ['forecast', 'iconPaths', 'scale']
})
@Component({
  selector: 'csdemo-daily-forecast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['forecast', 'iconPaths', 'scale'],
})
export class CsdemoDailyForecast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


@NgModule({
  declarations: [CsdemoDailyForecast],
  exports: [CsdemoDailyForecast]
})
export class CsdemoDailyForecastModule { }


export declare interface CsdemoDailyForecast extends Components.CsdemoDailyForecast {}


@ProxyCmp({
  defineCustomElementFn: defineCsdemoTemperature,
  inputs: ['scale', 'temperature']
})
@Component({
  selector: 'csdemo-temperature',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['scale', 'temperature'],
})
export class CsdemoTemperature {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


@NgModule({
  declarations: [CsdemoTemperature],
  exports: [CsdemoTemperature]
})
export class CsdemoTemperatureModule { }


export declare interface CsdemoTemperature extends Components.CsdemoTemperature {}


@ProxyCmp({
  defineCustomElementFn: defineCsdemoUvIndex,
  inputs: ['uvIndex']
})
@Component({
  selector: 'csdemo-uv-index',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['uvIndex'],
})
export class CsdemoUvIndex {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


@NgModule({
  declarations: [CsdemoUvIndex],
  exports: [CsdemoUvIndex]
})
export class CsdemoUvIndexModule { }


export declare interface CsdemoUvIndex extends Components.CsdemoUvIndex {}


