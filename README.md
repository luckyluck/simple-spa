# Simple SPA

Simple dependency-free SPA in ES6 vanilla JavaScript. There several features in the project:
* simple custom SPA router (2 pages in the main menu + article details)
* auto insert of adv video in each articles on the detail page
* auto play/pause of the video when it in the viewport (the video start playing when it is at least 50% in the viewport of the browser
                                                        – and stop if it’s less than 50% viewable)
* In accordance to IAB/MRC viewability standards, displays only once an additional message on browser console, when the ad is in the viewport of the browser for at least 50% and 2 continuous seconds in total.

### What I use
* ES6+ JavaScript
* HTML
* CSS
* Webpack 4 + Babel 7

### Commands
* `npm i` - will install all project dependencies
* `npm run start` - launch the project in a dev mode
* `npm run build` - build the project for production
* `npm run serve` - launch built project _(at the moment the video in this case will not load)_
* `npm run test` - invoke all the tests once
* `npm run test:watch` - invoke all the tests and will watch for changes

### Notes
A video [Flying Over Forest 3](https://www.videvo.net/video/flying-over-forest-3/4650/) for example was taken from [videvo](https://www.videvo.net) `Free Stock Video Footage` and used in a non-commercial way.
