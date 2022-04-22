# Customer Success Demo: Weather Widgets - A Stencil Based Web Component Library

If you are looking for a library that will provide components that you can use to build the next great weather application, you are in the wrong spot.

This project was put together in order to show a simple monorepo architecture and build system. This project uses [Stencil](https://stenciljs.com/) to build a library of web components and then uses the [Stencil Framework Wrappers](https://github.com/ionic-team/stencil-ds-output-targets) to package the components for use with each of the three major application frameworks (Angular, React, and Vue).

## Building

If you would like to build this for yourself, you can follow these steps.

- `git clone`
- `npm i`
- `npm run bootstrap`
- `npm run build`

## Publishing

These packages are specifically scoped to our `@ionic-enterprise` scope. As such, you need to be a member of the Ionic Enterprise org in order to publish them. If you would like to publish your own version for any reason, please fork this project and change the package names to be scoped to your own user or organization. Once you have done that, you should be able to run `npm run release` in order to publish.

The `npm run release` command will ask how the version should be bumped, run a linting, run the tests, and run a build. If that all passes, the packages will then be published to NPM.

One note on the publishing. By default, NPM publishes scoped packages as private. This can only be done if you are paying money to NPM. You _can_, however, publish public scoped packages for free. If you look in the `package.json` for each individual package you will see the following configuration specifying to do exactly that:

```JSON
  "publishConfig": {
    "access": "public"
  },
```

## Building Your Own Library

You may want to create your own web component library using Stencil. For this reason, I will document here how I went about creating this library. This `README` just covers the basic tooling of the overall project. To see how each of the individual `packages` was created, please see the `README` for each package individually.

### The Monorepo

When creating a Stencil based web component library that uses the Ionic Framework wrappers, it makes a lot of sense to organize the projects into a monorepo structure. It is best to use some sort of dedicated tooling to manage the monorepo. For this repo I chose to use [Lerna](https://github.com/lerna/lerna) to provide the tooling and structure.

To set up the monorepo:

```
mkdir cs-demo-weather-widgets
cd cs-demo-weather-widgets
npx lerna init
```

### The `package.json` File

At this point the basic infrastructure is in place. Edit the `package.json` file to contain the information that is required as well as the scripts to use while developing the library.

Update the basic information (`name`, `description`, `author`, etc). Those values do not really mean much at this level in the repo, but they provide information to future developers.

The most important part is the `scripts` section. Keep the scripts as simple as possible while also providing the functionality that I need. For example:

```json
  "scripts": {
    "bootstrap": "lerna bootstrap",
    "build": "lerna run --scope @ionic-enterprise/cs-demo-weather-widgets build && lerna run --parallel --ignore @ionic-enterprise/cs-demo-weather-widgets build",
    "lint": "lerna run lint --parallel",
    "preversion": "npm run lint && npm run test && npm run build",
    "release": "lerna publish",
    "test": "lerna run --scope @ionic-enterprise/cs-demo-weather-widgets test"
  },
```

- **bootstrap**: Bootstrap each of the packages. That is, install their dependencies and create cross links between internal dependencies.
- **build**: First build the web component library. This generates code in the other packages. Then build the other packages.
- **lint**: Run lint in any package that has a `lint` command defined.
- **preversion**: Before bumping the version, make sure the current code lints, the tests pass, and the build works.
- **release**: Bump the version, run the `preversion` script, and publish to NPM.
- **test**: The only package that is tested is the `@ionic-enterprise/cs-demo-weather-widgets` package. All other code is generated, and as such it would be difficult to create comprehensive tests for them.

### The Lerna Configuration

This project uses the default `lerna.json` configuration file with minor modifications to support conventional commits.

```json
{
  "packages": ["packages/*"],
  "version": "1.1.1",
  "command": {
    "create": {
      "homepage": "https://github.com/ionic-enterprise/cs-demo-weather-widgets",
      "license": "MIT"
    },
    "version": {
      "allowBranch": "main",
      "conventionalCommits": true,
      "message": "chore(release): %s"
    }
  }
}
```

### Git Tooling

Code formatting wars and people pushing code that does not lint or has failing tests can be serious problems. [Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) provide a great mechanism to avoid these kinds of issues through the enforce of standards.

Here is an example:

```
npm install -D @ionic/prettier-config husky prettier pretty-quick
```

[Husky](https://typicode.github.io/husky/#/) is used to manage the git hooks. [Prettier](https://prettier.io/) and [pretty-quick](https://www.npmjs.com/package/pretty-quick) are used to facilitate the code formatting according to [our standards](https://www.npmjs.com/package/@ionic/prettier-config).

Make the following changes to the `package.json`:

```JSON
{
  ...
  "scripts": {
    ...
    "prepare": "husky install",
    ...
  },
  ...
  "prettier": "@ionic/prettier-config"
}
```

To initially set up the git hooks, you can run the `prepare` script you just added. For other developers who clone your project, this happens automatically when they install the dependencies.

```
npm run prepare
```

This creates a `.husky` directory for your hooks. I create two hooks: `pre-commit` and `pre-push`.

```bash
npx husky add .husky/pre-commit "npx pretty-quick --staged"
npx husky add .husky/pre-push "npm run lint"
```

Update the `pre-push` to run the tests on a push to `main`:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint

branch=`git rev-parse --abbrev-ref HEAD`
if [ "main" = "$branch" ]; then
  npm run test
fi;
```

Here is the reasoning behind the git-hooks:

1. Improperly formatted code should _never_ be committed. The `pre-commit` hook will fix any bad formatting.
1. Your code should always lint. Period. If it doesn't then you can't push it, even to your own feature branch.
1. Your code may have some testing issues while in development, but those absolutely need to be fixed before that code makes it into the main branch.

There is _one_ problem, though. This repo contains a lot of generated code, and we cannot be responsible for its formatting. Create a `.prettierignore` file to ignore the generated code.

```
packages/core/src/components.d.ts
packages/core/src/components/**/readme.md
packages/angular
packages/react
packages/vue
```

### The `.gitignore` File

Lerna does not include a `.gitignore` file, so we need to create our own. I use the following basic `.gitignore` in the root of the monorepo:

```
*~
*.sw[mnpcod]
*.log
*.lock
*.tmp
*.tmp.*
log.txt
*.sublime-project
*.sublime-workspace
.idea/
.vscode/
.sass-cache/
.versions/
node_modules/
$RECYCLE.BIN/

.DS_Store
Thumbs.db
UserInterfaceState.xcuserstate
.env
```

Other packages within the monorepo will have their own `.gitignore` files with other items that are specific to them.

### Packages

The following packages have been created. See the `NOTES.md` files for details on how they were created:

- **[core](packages/NOTES.md)**: the Stencil based web components, distributed on via NPM as `@ionic-enterprise/cs-demo-weather-widgets`
- **[angular](packages/angular/NOTES.md)**: Angular proxies, distributed via NPM as `@ionic-enterprise/cs-demo-weather-widgets angular`
- **[react](packages/react/NOTES.md)**: React proxies, distributed via NPM as `@ionic-enterprise/cs-demo-weather-widgets-react`
- **[vue](packages/vue/NOTES.md)**: Vue proxies, distributed via NPM as `@ionic-enterprise/cs-demo-weather-widgets-vue`

When creating your own library, start with the Stencil library (`core` in this case). With a simple library in place, create the projects for each framework wrapper. At that point, circle back to the Stencil library and continue to develop the web components.

Happy Coding!! 🤓
