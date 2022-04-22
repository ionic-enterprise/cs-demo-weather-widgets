# Framework Wrapper: Vue

Web components are very well supported by Vue. That said, it is still beneficial to use the [Stencil Vue Output Target](https://www.npmjs.com/package/@stencil/vue-output-target) to provide our users with an excellent developer experience when using our components. The configuration we follow here is a specific implementation of the [more general documentation](https://stenciljs.com/docs/vue) found on the Stencil site.

## Create the Project

### Create `projects/vue` in the Monorepo

Use Lerna's `create` to begin building out the Vue Framework Wrapper project.

```bash
npx lerna create vue
```

This will ask for some details about the project being created. Here is an example of how to answer. Don't worry too much at this point about the details since we can easily change them later if needed:

```
$ npx lerna create vue
lerna notice cli v4.0.0
lerna WARN ENOREMOTE No git remote found, skipping repository property
package name: (vue) @ionic-enterprise/cs-demo-weather-widgets-vue
version: (0.0.0)
description: Vue specific proxies for @ionic-enterprise/cs-demo-weather-widgets
keywords:
homepage:
license: (ISC) MIT
entry point: (lib/vue.js) dist/index.js
git repository:
About to write to /Users/ken/Projects/Home/test-comp-mono/packages/vue/package.json:

{
  "name": "@ionic-enterprise/cs-demo-weather-widgets-vue",
  "version": "0.0.0",
  "description": "Vue specific proxies for @ionic-enterprise/cs-demo-weather-widgets",
  "author": "Ken Sodemann <ken@ionic.io>",
  "homepage": "",
  "license": "MIT",
  "main": "dist/index.js",
  "directories": {
    "lib": "lib",
    "test": "__tests__"
  },
  "files": [
    "lib"
  ],
  "scripts": {
    "test": "echo \"Error: run tests from root\" && exit 1"
  }
}


Is this OK? (yes)
lerna success create New package @ionic-enterprise/cs-demo-weather-widgets-vue created at ./packages/vue
```

### Install the Vue Framework Wrappers

The Framework Wrapper needs to be installed in the Stencil component library project. The wrapper is automatically run as part of the Stencil build process. It generates the proxy code within the `packages/vue` project.

```bash
cd packages/core
npm i -D @stencil/vue-output-target
```

The Vue Framework Wrapper is configured in a similar manner to the other output targets. We will use a set of options that allow us to export the output of the `dist-custom-elements` build. That is, we are publishing the ES6 modules. See the [framework wrapper documentation](https://github.com/ionic-team/stencil-ds-output-targets/blob/main/packages/vue-output-target/README.md) for a full set of options.

```typescript
import { Config } from '@stencil/core';
...
import { vueOutputTarget as vue } from '@stencil/vue-output-target';
...

export const config: Config = {
  ...
  outputTargets: [
    ...
    vue({
      componentCorePackage: '@ionic-enterprise/cs-demo-weather-widgets',
      proxiesFile: '../vue/src/components.ts',
      includeDefineCustomElements: false,
      includeImportCustomElements: true,
    }),
    ...
  ]
}
```

### Build the Vue Project

Go to the `packages/vue` directory. We need to create the build process for our proxies.

```bash
cd ../vue
```

The Vue Framework Wrapper generated a `src/components.ts` file in this project. Create a `src/index.ts` file that exports it:

```typescript
export * from './components';
```

Remove the generated code, install the `devDependencies`, and add the dependency for our Stencil web component library.

```bash
rm -rf __tests__ lib
npm i -D vue typescript rimraf @rollup/plugin-node-resolve rollup rollup-plugin-sourcemaps
npx lerna add @ionic-enterprise/cs-demo-weather-widgets --scope=@ionic-enterprise/cs-demo-weather-widgets-vue
```


Create a handful of configuration files.

**tsconfig.json**

```json
{
  "compilerOptions": {
    "allowUnreachableCode": false,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "declaration": true,
    "noImplicitAny": false,
    "removeComments": true,
    "noLib": false,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "sourceMap": true,
    "outDir": "./dist-transpiled",
    "declarationDir": "dist/types",
    "lib": ["dom", "es2020"],
    "module": "es2015",
    "moduleResolution": "node",
    "target": "es2017",
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules"],
  "compileOnSave": false,
  "buildOnSave": false
}
```

**rollup.config.js**

```javascript
import resolve from '@rollup/plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';

const external = ['vue', 'vue-router'];

export default {
  input: {
    index: 'dist-transpiled/index',
  },
  onwarn: function(warning) {
    if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }
    console.warn( warning.message );
  },
  output: [
    {
      dir: 'dist/',
      entryFileNames: '[name].esm.js',
      chunkFileNames: '[name]-[hash].esm.js',
      format: 'es',
      sourcemap: true,
    },
    {
      dir: 'dist/',
      format: 'commonjs',
      preferConst: true,
      sourcemap: true,
    },
  ],
  external: (id) => external.includes(id) || id.startsWith('stencil-library'),
  plugins: [
    resolve(),
    sourcemaps(),
  ],
};
```

**.gitignore**

```
dist/
dist-transpiled/
```

Update the `scripts` section of the `package.json` file. The `main`, `module`, `types`, and `files` also need to be updated.

```json
  "scripts": {
    "build": "npm run clean && npm run compile",
    "clean": "rimraf dist && rimraf dist-transpiled",
    "compile": "npm run tsc && rollup -c",
    "test": "echo \"Error: run tests from root\" && exit 1",
    "tsc": "tsc -p ."
  },
  "main": "./dist/index.js",
  "module": "./dist/index.esm.js",
  "types": "./dist/types/index.d.ts",
  "files": [
    "dist/"
  ],
```

The package should now build successfully.

Happy Coding!! 🤓
