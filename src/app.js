import Router from './utils/Router.js';

import Home from './views/pages/Home.js';
import About from './views/pages/About.js';
import Article from './views/pages/Article.js';
import Error404 from './views/pages/Error404.js';

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/': Home,
    '/about': About,
    '/article/:id': Article,
    '*': Error404
};

const router = new Router(routes, document.getElementById('root'));
router.init();