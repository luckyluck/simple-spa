import { getArticles } from '../../utils/api.js';

const Home = {
    render: async () => {
        let articles = await getArticles();

        return `
            <section>
                <h1>Home</h1>
                <ul>
                    ${articles.map(article => 
                        `<li><a href="#/article/${article.id}">${article.title}</a></li>`
                    ).join('')}
                </ul>
            </section>
        `;
    },
    afterRender: async () => {}

};

export default Home;