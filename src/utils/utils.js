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
 * Simple sleep implementation
 * @param ms
 * @returns {Promise<any>}
 */
export const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
};