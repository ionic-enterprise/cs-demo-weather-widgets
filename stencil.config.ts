import { Config } from '@stencil/core';

export const config:Config = {
  namespace: 'csdemoweather',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www'
    }
  ]
};
