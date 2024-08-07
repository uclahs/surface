# About Surface

Surface is a custom Drupal theme built from the ground up and is compatible with Drupal 9 & 10.

Surface is built with [Storybook](https://storybook.js.org/) and [Vite](https://vitejs.dev/), and the help of many NodeJS packages to improve automation and make use of the latest Front-End tooling.

## Modules you need to run the theme

* [Components](https://www.drupal.org/project/components): This module is needed to create theme namespaces to include/nest components in Drupal.

## Running the project

There are several custom npm commands that allows developers to build and run different
tasks during and after development. These commands can be found in `package.json`.
The most common ones to use include:


* `npm run build`: This is the "do it all" command which runs `vite build` and `storybook build -o storybook`. In addition to building your FE environment, it also generates a static version of Storybook for prodcution release (`storybook` directory). Run this command for a full project build including prod.

* `npm run watch`: This will run both `vite build --watch` and `stroybook dev -p 6006`.  This is the most common command to run while using Surface for development.  Among the task configured in `vite.config.js`, you will find:

  * Cleaning out the `dist` folder to ensure a there are fresh files each time.
  * Linting (CSS and JS) files to ensure code standards are met.
  * Watching for changes to CSS, JS and Images and compiling them if needed.
  * Recrusively globbing through all CSS and JS files within the source directory.

## Design system

Surface uses [Storybook](https://storybook.js.org/) as its design system and that's where all components
on the sites are originally built and maintained.  Storybook can be accessed on its own by running `npm run storybook`
and navigating to `http://localhost:6006`.  It can also be accessed through Drupal's URL for example `https://your-site.ddev.site:6006`.

## Atomic Design Methodology

Although Surface adheres to the Atomic Design methodology, it does not use the same naming conventions for naming its patterns.  Our naming convention for the top level categories are:

* **Elements** - equivalent to Atoms
* **Components** - equivalent to Molecules
* **Collections** - equivalent to Organisms
* **Layouts** - equivalent to templates
* **Pages** - same

## Available components

For a simple demonstration of how to build components in Storybook and integrate them with Drupal, we are sharing a couple of components we use on our projects. These components are:

### Elements

* Breadcrum, Button, Date, Date badge, Eyebrow, Images, Readtime, Title

### Components

* Card and Featured card

### Collections

* Slider

## Development approach

Surface is built using the latest development practices for CSS, JS, Twig, and React.  Within Surface's Storybook,
all components are built using BEM methodology for selector classes and ES6 for Javascript.
Components are built using the Atomic Design methodology but not necessarily using the same naming convention
like atoms, molecules, organisms, etc.  Instead, it uses more friendly names like elements, components, collections,
layouts, and pages.

## About Drupal Theming

For demo purposes, we have included Drupal template suggestions inside `templates/`, which also include examples of how a particular Drupal entity (i.e. content type) is integrated with a Storybook component.

For more information, see Drupal.org [theming guide](
https://www.drupal.org/docs/develop/theming-drupal).

Surface was built with 🩵 by the good folks at [UCLA Health](https://it.uclahealth.org/about/dgit/teams/web-development).

For details on how this project came about and how to use its features, take a look a the blog series available at [mariohernandez.io](https://mariohernandez.io/tag/storybook/).
