# About Surface

Surface is a custom Drupal theme which is compatible with Drupal 9 & 10. Surface is the
default front-end theme for most of the sites running in the siteden site factory.

Surface is built using [Storybook](https://storybook.js.org/) and [Vite](https://vitejs.dev/)
with the help of many NodeJS packages to improve automation and make use of the latest Front-End tooling.

## Useful commands

There are several custom npm commands that allows developers to build and run different
tasks during and after development. These commands can be found in `package.json`.
The most common ones to use include:

* `npm run release`: This will run all the custom gulp tasks found within `gulpfile.js` (and compation files). Among the task you will find:
  * Clean CSS, JS, Fonts, and Images.  It wipes out any existing compiled assets and recompiles the theme with fresh assets.
  * Copy fonts from src to dist.
  * Compress assets to optimize images.
  * Linting tasks for both CSS and JS.
  * Compile CSS and JS and pretify them.
  * Finally combine CSS and JS assets respectively for improved performance.

* `npm run watch` or `gulp watch`: This is the command used the most as it allows developers to run it in the background to watch for file changes, compile the code and reloads the browser. File changes include CSS, JS, Twig, YAML.

Other commands are individual commands that are already part of either of the two commands above.
For example, if you simply wanted to clean all existing compiled code as part of debugging an issue
that may be caused by old code still available, you could run `npm run dir:clean` or `gulp clean`.

## Building the theme inside Docker containers

One of the latest features of th project is the ability to run and build the theme inside Docker containers.
This presents many advantages over running commands in the host machine one of them being consistency
in environments amongs developers.

**A quick word of warning**:  Performance may be impacted when running these commands in containers.

* `ddev surface-release`: This command will run `npm run release`` in the docker container.
* `ddev surface-watch`: This command will run `npm gulp watch`` in the docker container.

## Design system

Surface uses [Storybook](https://storybook.js.org/) as its design system and that's where all components
on the sites are originally built and maintained.  Storybook can be accessed on its own by running `npm run storybook`
and navigating to `http://localhost:6006`.  It can also be accessed through Drupal's URL
for example `https://uclahs.ddev.site:6006`.

## Development approach

Surface is built using the latest development practices for CSS, JS, Twig, and React.  Within Surface's Storybook,
all components are built using BEM methodology for selector classes and ES6 for Javascript.
Components are built using the Atomic Design methodology but not necessarily using the same naming convention
like atoms, molecules, organisms, etc.  Instead, it uses more friendly names like elements, components, collections,
layouts, and pages.

## About Drupal Theming

For more information, see Drupal.org [theming guide](
https://www.drupal.org/docs/develop/theming-drupal).
