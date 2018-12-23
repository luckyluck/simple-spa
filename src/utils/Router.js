import { parseRequestURL } from './utils.js';

/**
 * Router
 * Take a URL, check against the list of supported routes
 * and then renders the corresponding page
 * @param routes - hash of supported routes
 * @returns {Promise<void>}
 */
class Router {
    constructor(routes, root) {
        this.routes = routes;
        this.root = root;
    }

    /**
     * Setting important for Router listeners
     * Once on load and every time on hash change Router will re-render the page with new content
     */
    init() {
        // Listen on hash change
        window.addEventListener('hashchange', () => this.update());
        // Listen on page load
        window.addEventListener('load', () => this.update());
    }

    /**
     * Main function:
     * - parses URL
     * - prepares URL to compare with the list of supported routes
     * - sets new content into the Root
     * - initiates JS of the rendered page after it was rendered
     * @returns {Promise<void>} - async for the sake of inner functions
     */
    async update() {
        // Get the parsed URI from the address bar
        let { resource, id, verb } = parseRequestURL();

        // Parse the URL and if it has an id part, change it with the string ':id'
        let parsedURL = `/${resource || ''}` + (id ? '/:id' : '') + (verb ? `/${verb}` : '');

        // Get the page from given hash of supported routes
        // If the parsed URL is not in given list of supported routes, select the 404 page instead
        let page = this.routes[parsedURL] || this.routes['*'];
        this.root.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default Router;