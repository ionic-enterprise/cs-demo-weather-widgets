import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'csdemoweather',
  outputTargets: [
    react({
      componentCorePackage: '@ionic-enterprise/cs-demo-weather-widgets',
      proxiesFile: '../react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: false,
      includeImportCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
};
