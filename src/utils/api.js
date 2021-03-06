/**
 * Requesting whole list of articles
 * @returns {Promise<any>}
 */
export const getArticles = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`https://5c1e3870bc26950013fbcb1f.mockapi.io/articles`, options);

        return await response.json();
    } catch (error) {
        console.log('Error getting documents', error);
    }
};

/**
 * Requesting article by given ID
 * @param id
 * @returns {Promise<any>}
 */
export const getArticle = async id => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(`https://5c1e3870bc26950013fbcb1f.mockapi.io/articles/${id}`, options);

        return await response.json();
    } catch (error) {
        console.log('Error getting documents', error);
    }
};