import { parseRequestURL } from '../../utils/utils.js';
import { getPost } from '../../utils/api.js';

const PostShow = {
    render: async () => {
        let request = parseRequestURL();
        let post = await getPost(request.id);

        return `
            <section>
                <h1>${post.title}</h1>
                <article>${post.text.map(p => `<p>${p}</p>`)}</article>
            </section>
        `;
    },
    afterRender: async () => {}
};

export default PostShow;