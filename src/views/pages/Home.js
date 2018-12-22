import { getPostsList } from '../../utils/api.js';

const Home = {
    render: async () => {
        let posts = await getPostsList();

        return `
            <section>
                <h1>Home</h1>
                <ul>${posts.map(post =>
                    `<li><a href="#/p/${post.id}">${post.title}</a></li>`
                    ).join('\n ')
                }</ul>
            </section>
        `;
    },
    afterRender: async () => {}

};

export default Home;