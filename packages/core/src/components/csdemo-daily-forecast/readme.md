# csdemo-daily-forecast

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute | Description | Type                 | Default     |
| ----------- | --------- | ----------- | -------------------- | ----------- |
| `forecasts` | --        |             | `Forecast[]`         | `undefined` |
| `iconPaths` | --        |             | `ConditionIconPaths` | `undefined` |
| `scale`     | `scale`   |             | `string`             | `undefined` |


## Dependencies

### Depends on

- [csdemo-condition](../csdemo-condition)
- [csdemo-temperature](../csdemo-temperature)

### Graph
```mermaid
graph TD;
  csdemo-daily-forecast --> csdemo-condition
  csdemo-daily-forecast --> csdemo-temperature
  style csdemo-daily-forecast fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
