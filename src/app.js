import router from './utils/router.js';

import Home from './views/pages/Home.js';
import About from './views/pages/About.js';
import PostShow from './views/pages/PostShow.js';
import Error404 from './views/pages/Error404.js';

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/': Home,
    '/about': About,
    '/p/:id': PostShow,
    '*': Error404
};

// Listen on hash change
window.addEventListener('hashchange', () => router(routes));
// Listen on page load
window.addEventListener('load', () => router(routes));