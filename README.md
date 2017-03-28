# Angular UI Components
[![npm version](https://badge.fury.io/js/angular-ui-components.svg)](https://badge.fury.io/js/angular-ui-components)
[![Build Status](https://travis-ci.org/park-brian/angular-ui-components.svg?branch=master)](https://travis-ci.org/park-brian/angular-ui-components)
[![codecov](https://codecov.io/gh/park-brian/angular-ui-components/branch/master/graph/badge.svg)](https://codecov.io/gh/park-brian/angular-ui-components)
[![dependencies](https://david-dm.org/park-brian/angular-ui-components.svg)](https://david-dm.org/park-brian/angular-ui-components)


Table of Contents
===

* [Quick Start](#quick-start)
* [Usage](#usage)
  * [Form Controls](#form-controls)
    * [Select](#select)
    * [Tree](#tree)
  * [Miscellaneous](#miscellaneous)
    * [Overlay](#overlay)
    * [Spinner](#spinner)

* [Angular CLI](#angular-cli)
  * [Development Server](#development-server)
  * [Code scaffolding](#code-scaffolding)
  * [Build](#build)
  * [Running unit tests](#running-unit-tests)
  * [Further help](#further-help)



## Quick Start

Install `angular-ui-components` via:

```bash
npm install --save angular-ui-components
```

## Usage

Import component modules individually: 

```javascript
import { OverlayModule } from 'angular-ui-components`;
```


Add each module to the imports array of the application module:

```javascript

@NgModule({
  imports: [
    /* imported modules */
    OverlayModule.forRoot()
  ],
  /* ... */
})
export class AppModule { }
```

### Form Controls

#### Select
```javascript
import { SelectModule } from 'angular-ui-components`;
```

#### Tree
```javascript
import { TreeViewModule } from 'angular-ui-components`;
```



### Miscellaneous

#### Overlay
```javascript
import { OverlayModule } from 'angular-ui-components`;
```

#### Spinner
```javascript
import { SpinnerModule } from 'angular-ui-components`;
```




## Angular CLI

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).





_This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0._
