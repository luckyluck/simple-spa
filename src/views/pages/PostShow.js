import { parseRequestURL } from '../../utils/utils.js';
import { getPost } from '../../utils/api.js';

const PostShow = {
    render: async () => {
        let request = parseRequestURL();
        let post = await getPost(request.id);

        return `
            <section>
                <h1>Post Id: ${post.id}</h1>
                <p>Post Title: ${post.title}</p>
                <p>Post Content: ${post.content}</p>
                <p>Post Author: ${post.name}</p>
            </section>
        `;
    },
    afterRender: async () => {}
};

export default PostShow;