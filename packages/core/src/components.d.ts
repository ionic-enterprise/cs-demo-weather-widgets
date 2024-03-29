/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ConditionIconPaths } from "./models/condition-icon-paths";
import { Forecast } from "./models/forecast";
export { ConditionIconPaths } from "./models/condition-icon-paths";
export { Forecast } from "./models/forecast";
export namespace Components {
    interface CsdemoCondition {
        /**
          * The overall weather condition as defined by the OpenWeatherMap API. https://openweathermap.org/weather-conditions
         */
        "condition": number;
        /**
          * Override the default icon paths. If the default icon names that we have are used and put in `assets/images`.
         */
        "iconPaths": ConditionIconPaths;
        /**
          * Specify that the icon / image for the condition should not be displayed
         */
        "noIcon": boolean;
        /**
          * Specify that the label for the condition should not be displayed
         */
        "noLabel": boolean;
    }
    interface CsdemoDailyForecast {
        /**
          * The forecast to display information about.
         */
        "forecast": Forecast;
        /**
          * Override the default icon paths. If the default icon names that we have are used and put in `assets/images`.
         */
        "iconPaths": ConditionIconPaths;
        /**
          * The temperature in the forecast is specified in Kelvin. The scale specifies the units to display the temperature in, 'C' for Celsius and 'F' for Fahrenheit.
         */
        "scale": string;
    }
    interface CsdemoTemperature {
        /**
          * The temperature is specified in Kelvin. The scale specifies the units to display the temperature in, 'C' for Celsius and 'F' for Fahrenheit.
         */
        "scale": string;
        /**
          * The temperature specified in Kelvin.
         */
        "temperature": number;
    }
    interface CsdemoUvIndex {
        /**
          * The UV index using the international UV index scale. https://en.wikipedia.org/wiki/Ultraviolet_index
         */
        "uvIndex": number;
    }
}
declare global {
    interface HTMLCsdemoConditionElement extends Components.CsdemoCondition, HTMLStencilElement {
    }
    var HTMLCsdemoConditionElement: {
        prototype: HTMLCsdemoConditionElement;
        new (): HTMLCsdemoConditionElement;
    };
    interface HTMLCsdemoDailyForecastElement extends Components.CsdemoDailyForecast, HTMLStencilElement {
    }
    var HTMLCsdemoDailyForecastElement: {
        prototype: HTMLCsdemoDailyForecastElement;
        new (): HTMLCsdemoDailyForecastElement;
    };
    interface HTMLCsdemoTemperatureElement extends Components.CsdemoTemperature, HTMLStencilElement {
    }
    var HTMLCsdemoTemperatureElement: {
        prototype: HTMLCsdemoTemperatureElement;
        new (): HTMLCsdemoTemperatureElement;
    };
    interface HTMLCsdemoUvIndexElement extends Components.CsdemoUvIndex, HTMLStencilElement {
    }
    var HTMLCsdemoUvIndexElement: {
        prototype: HTMLCsdemoUvIndexElement;
        new (): HTMLCsdemoUvIndexElement;
    };
    interface HTMLElementTagNameMap {
        "csdemo-condition": HTMLCsdemoConditionElement;
        "csdemo-daily-forecast": HTMLCsdemoDailyForecastElement;
        "csdemo-temperature": HTMLCsdemoTemperatureElement;
        "csdemo-uv-index": HTMLCsdemoUvIndexElement;
    }
}
declare namespace LocalJSX {
    interface CsdemoCondition {
        /**
          * The overall weather condition as defined by the OpenWeatherMap API. https://openweathermap.org/weather-conditions
         */
        "condition"?: number;
        /**
          * Override the default icon paths. If the default icon names that we have are used and put in `assets/images`.
         */
        "iconPaths"?: ConditionIconPaths;
        /**
          * Specify that the icon / image for the condition should not be displayed
         */
        "noIcon"?: boolean;
        /**
          * Specify that the label for the condition should not be displayed
         */
        "noLabel"?: boolean;
    }
    interface CsdemoDailyForecast {
        /**
          * The forecast to display information about.
         */
        "forecast"?: Forecast;
        /**
          * Override the default icon paths. If the default icon names that we have are used and put in `assets/images`.
         */
        "iconPaths"?: ConditionIconPaths;
        /**
          * The temperature in the forecast is specified in Kelvin. The scale specifies the units to display the temperature in, 'C' for Celsius and 'F' for Fahrenheit.
         */
        "scale"?: string;
    }
    interface CsdemoTemperature {
        /**
          * The temperature is specified in Kelvin. The scale specifies the units to display the temperature in, 'C' for Celsius and 'F' for Fahrenheit.
         */
        "scale"?: string;
        /**
          * The temperature specified in Kelvin.
         */
        "temperature"?: number;
    }
    interface CsdemoUvIndex {
        /**
          * The UV index using the international UV index scale. https://en.wikipedia.org/wiki/Ultraviolet_index
         */
        "uvIndex"?: number;
    }
    interface IntrinsicElements {
        "csdemo-condition": CsdemoCondition;
        "csdemo-daily-forecast": CsdemoDailyForecast;
        "csdemo-temperature": CsdemoTemperature;
        "csdemo-uv-index": CsdemoUvIndex;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "csdemo-condition": LocalJSX.CsdemoCondition & JSXBase.HTMLAttributes<HTMLCsdemoConditionElement>;
            "csdemo-daily-forecast": LocalJSX.CsdemoDailyForecast & JSXBase.HTMLAttributes<HTMLCsdemoDailyForecastElement>;
            "csdemo-temperature": LocalJSX.CsdemoTemperature & JSXBase.HTMLAttributes<HTMLCsdemoTemperatureElement>;
            "csdemo-uv-index": LocalJSX.CsdemoUvIndex & JSXBase.HTMLAttributes<HTMLCsdemoUvIndexElement>;
        }
    }
}
