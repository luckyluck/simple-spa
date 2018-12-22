import { parseRequestURL } from './utils.js';
import Menu from '../views/components/Menu.js';
import Footer from '../views/components/Footer.js';

/**
 * Router
 * Take a URL, check against the list of supported routes
 * and then renders the corresponding page
 * @param routes - hash of supported routes
 * @returns {Promise<void>}
 */
const router = async routes => {

    // Lazy load view element
    const header = document.querySelector('.header-container');
    const content = document.getElementById('root');
    const footer = document.querySelector('.footer-container');

    // Render the header and the footer of the page
    header.innerHTML = await Menu.render();
    // await Menu.afterRender();
    footer.innerHTML = await Footer.render();
    // await Footer.afterRender();

    // Get the parsed URI from the address bar
    let { resource, id, verb } = parseRequestURL();

    // Parse the URL and if it has an id part, change it with the string ':id'
    let parsedURL = `/${resource || ''}` + (id ? '/:id' : '') + (verb ? `/${verb}` : '');

    // Get the page from given hash of supported routes
    // If the parsed URL is not in given list of supported routes, select the 404 page instead
    let page = routes[parsedURL] || routes['*'];
    content.innerHTML = await page.render();
    await page.afterRender();
};

export default router;