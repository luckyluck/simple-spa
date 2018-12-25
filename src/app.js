import Router from './utils/Router';

import Home from './views/pages/Home';
import About from './views/pages/About';
import Article from './views/pages/Article';
import Error404 from './views/pages/Error404';

import Menu from './views/components/Menu';

import './css/main.css';

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/': Home,
    '/about': About,
    '/article/:id': Article,
    '*': Error404
};

// TODO improve initialization not to have menu code hear
// Lazy load view element
const header = document.querySelector('.header');
// Render the header of the page
header.innerHTML = Menu.render();
Menu.afterRender();

// Creating Router instance giving it list of routes and the Root
const router = new Router(routes, document.getElementById('root'));
// And initiating instance
router.init();
