# Portfolio Angular

Angular 7 app using Angular Bootstrap to create a portfolio website.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Portfolio created using Angular 7 and Angular CLI.

* Pages are responsive.

## Sections info

* **Header:** Add logo on left. Change to MDB navbar. Should be sticky.

* **Home:**

* **About:** 2 column layout with mat-cards for photos on left taking 3/12 width and a 9/12 width column for text.

* **Projects:** Bootstrap card-deck with cards to display project data using data-binding from an array of projects based on a Project model. Cards are sized so up to 4 will show on a row before wrapping to the next line. Image sized to 16:9 ratio which for width 288px = height 162px.

* **Skills:**

* **Vitae:** To contain list of experience and education, also using Bootstrap cards.

* **Contact:** Single Boostrap card with links to email, github and linkedin.

* **CV Download:**

* **Footer:** Icons with links to email me, linkedin and github repos.

## Screenshots

![Example screenshot](./img/Projects.png)
![Example screenshot](./img/Contact.png)

## Technologies

* [Angular CLI v7.3.9](https://github.com/angular/angular-cli)

* [Angular framework v7.2.0](https://angular.io/)

* [Angular Material v7.3.7](https://material.angular.io/)

* [MDBootstrap Angular v7.5.2](https://mdbootstrap.com/)

* [MDBootstrap icons](https://mdbootstrap.com/docs/jquery/content/icons-list/)

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Code Examples

```typescript
export class Project {
  title: string;
  img: { src: string, alt: string };
  content: string;
  tools: { prefix: string, icon: string } [];
  github: string;
  url: string;
}

```

## Features

* [Angular Material Theming](https://material.angular.io/guide/theming),based on [Material Design spec](https://material.io/archive/guidelines/style/color.html#color-color-palette) colors are used for primary, accent, warning, foregraound and background palletes etc.

* Responsive

## Status & To-Do List

* Status: In development. Compiles. All components created and routing works to all pages. HEader, Footer, Projects pages initial info added.

* To-Do: site content: about page...add ionicons - see article?

## Inspiration

* [website by Julian Rubiano](http://www.julienrubiano.fr/)

* [website by Jaxon Wright](https://jaxonwright.com/)

* [Medium article by Tomas Trajan: The complete guide to Angular Material Themes](https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1)

## Contact

Created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
