/**
 * Parse a url and break it into resource, id and verb
 * @returns {{
 *      resource: string,
 *      verb: string,
 *      id: string
 * }}
 */
export const parseRequestURL = () => {
    let url = location.hash.slice(1).toLowerCase() || '/';
    let r = url.split('/');
    let request = {};
    request.resource = r[1];
    request.id = r[2];
    request.verb = r[3];

    return request;
};

/**
 * Check if at least a half of the given element is in a viewport
 * @param el - element to check
 * @returns {boolean}
 */
export const isElementInViewport = el => {
    const rect = el.getBoundingClientRect();
    const half = Math.floor(rect.height / 2);
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    return (rect.top > 0 && (rect.top + half) <= windowHeight) || (rect.top <= 0 && rect.top + half >= 0);
};

/**
 * Custom throttle function implementation
 * @param fn - a callback
 * @param wait - time to sleep
 * @returns {Function}
 */
export const throttle = (fn, wait) => {
    let time = Date.now();

    return () => {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    };
};

/**
 * Preparing article:
 * - array of paragraphs wrapping with a <p></p> tag
 * - addind video content in the middle
 * @param text - array of strings/paragraphs
 * @returns {string} - prepared string to be put as HTML
 */
export const prepareArticle = text => {
    const video = '<video class="adv-video" width="100%" src="../../public/Forest_15_3b_Videvo.mov47209.mp4"></video>';
    const result = text.map(p => `<p>${p}</p>`);
    // Calculating a middle of an array
    const m = Math.ceil(text.length / 2);
    // And inserting video to show to a user
    result.splice(m, 0, video);

    return result.join('');
};
