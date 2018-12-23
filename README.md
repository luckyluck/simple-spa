# Simple SPA

Simple dependency-free SPA in ES6 vanilla JavaScript.

### What I use
* ES6+ JavaScript
* HTML
* CSS

To be able to use `ES6 modules` without **Babel** in modern browsers I just set the type like this:
```javascript
<script type="module" src="./app.js"></script>
```

### How to launch
As an example, you can use [http-server](https://www.npmjs.com/package/http-server). After you install it, 
go to the `src` root and call:
```text
http-server ./
```
and after that you can open the project in the browser via [http://localhost:8080/](http://localhost:8080/) (Port 8080 is chosen by default but in your case it can be different).

Beware, as I do not use any tool to bundle the project, it works only in modern browsers. I checked it in the latest Chrome, Opera and Firefox browsers.