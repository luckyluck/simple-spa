import { getArticles } from '../../utils/api';

const Home = {
    render: async () => {
        let articles = await getArticles();

        return `
            <section>
                <h1>Home</h1>
                <ul class="articles">
                    ${articles.map(article => 
                        `<li>
                            <a href="#/article/${article.id}">${article.title}</a>
                            <small>${new Date(article.createdAt).toLocaleDateString()}</small>
                        </li>`
                    ).join('')}
                </ul>
            </section>
        `;
    },
    afterRender: async () => {}

};

export default Home;
