# Mutant Office Hours

A simple, multi-user app that allows users to log in and submit their name, phone number and what their wanting to meet about.

Based on the curriculum for [Xtern Bootcamp 2016](bootcamp16.getfretless.com/)

>**NOTE:** This is only the front-end. For the corresponding API, see [Mutant Hours Server](https://github.com/zachmillikan/mutant-hours-server)

## Technical Overview

* [AngularJS](https://angularjs.org/)
* [UI Router](https://github.com/angular-ui/ui-router)

## Getting Started

> Mutant Office Hours uses NPM to manage development dependencies, so install [Node](https://nodejs.org/en/) if necessary

To get started clone the repository and run `npm start`.

```
$ git clone <this repository>
$ cd <this project folder>
$ npm start
```

This will install dependencies and start a web server on port 8080.

To change the url of the API(`localhost:3030` by default), edit `app\constants.js`.

## Deployment

To deploy Mutant Office Hours, copy the contents of the `app` folder to your remote server.
