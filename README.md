# About Surface

Surface is a custom Drupal theme which is compatible with Drupal 9 & 10. Surface is the
default front-end theme for UCLA Health Sciences School of Medicine.

Surface is built using [Storybook](https://storybook.js.org/) and [Vite](https://vitejs.dev/)
with the help of many NodeJS packages to improve automation and make use of the latest Front-End tooling.

## Modules you need to download and enable

* [Components](https://www.drupal.org/project/components) (required)
* [Twig field value](https://www.drupal.org/project/twig_field_value) (optional)
* [Twig tweak](https://www.drupal.org/project/https://www.drupal.org/project/twig_tweak) (optional)

## Useful commands

There are several custom npm commands that allows developers to build and run different
tasks during and after development. These commands can be found in `package.json`.
The most common ones to use include:

* `npm run watch`: This will run both `vite build --watch` and `stroybook dev -p 6006`.  This is the most common command to run while using Surface for development.  Among the task you will find ran are configured in the `vite.config.js` file and perform tasks such as:
  - Cleaning out the `dist` folder to ensure a there are fresh files each time.
  - Linting (CSS and JS) files to ensure code standards are met.
  - Copying static assets such as images to the `dist` folder.
  - Watching for changes to CSS, JS and Images and compiling them if needed.
  - Recrusively globbing through all CSS and JS files within the source directory.

* `npm run release`: This is the command that runs `vite build` and `storybook build -o storybook` which compiles the theme and generates a static version of Storybook for prodcution release.

## Building the theme inside Docker containers

One of the latest features of th project is the ability to run and build the theme inside Docker containers.
This presents many advantages over running commands in the host machine one of them being consistency
in environments amongs developers.

**A quick word of warning**:  Performance may be impacted when running these commands in containers.

* `ddev surface-release`: This command will run `npm run build-storybook`` in the docker container.
* `ddev surface-watch`: This command will run `npm run start`` in the docker container.

## Design system
Surface uses [Storybook](https://storybook.js.org/) as its design system and that's where all components
on the sites are originally built and maintained.  Storybook can be accessed on its own by running `npm run storybook`
and navigating to `http://localhost:6006`.  It can also be accessed through Drupal's URL for example `https://uclahs.ddev.site:6006`.

## Development approach
Surface is built using the latest development practices for CSS, JS, Twig, and React.  Within Surface's Storybook,
all components are built using BEM methodology for selector classes and ES6 for Javascript.
Components are built using the Atomic Design methodology but not necessarily using the same naming convention
like atoms, molecules, organisms, etc.  Instead, it uses more friendly names like elements, components, collections,
layouts, and pages.

## About Drupal Theming
For more information, see Drupal.org [theming guide](
https://www.drupal.org/docs/develop/theming-drupal).
