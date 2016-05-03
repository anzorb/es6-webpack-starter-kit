#### React + ES6 + Babel + Webpack starter kit by Anzor Bashkhaz

[Read the article here](http://anzorb.com/javascript-is-all-grown-up-or-is-it/)

This starter-kit includes everything you need to write React + ES6 code, along with tests, documentation, and live reloading.

This also demonstrates how to split vendor bundles, to share accross multiple projects and only ship relevant code.

##### Requirements
* [Node & NPM](https://nodejs.org/)

##### Install
    npm install

##### Tasks
    npm run dev will compile ES6 code, open demo app in browser, and refresh on changes.
    npm run dist will compile, minify, extract sourcemaps and generate documentaion
    npm run karma:tdd compile, open browser and wait for code changes (test driven development)
    npm run karma:ci compile, generate coverage for Jenkins

##### Issues

1. karma:ci fails when using babel-plugin-rewire and running in Phantomjs (https://github.com/speedskater/babel-plugin-rewire/issues/125)
