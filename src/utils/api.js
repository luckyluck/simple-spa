export const getPostsList = async () => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts`, options);

        return await response.json();
    } catch (error) {
        console.log('Error getting documents', error);
    }
};

export const getPost = async id => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(`https://5bb634f6695f8d001496c082.mockapi.io/api/posts/` + id, options);

        return await response.json();
    } catch (error) {
        console.log('Error getting documents', error);
    }
};