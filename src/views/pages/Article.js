import { parseRequestURL } from '../../utils/utils.js';
import { getArticle, prepareArticle } from '../../utils/api.js';

const Article = {
    render: async () => {
        let request = parseRequestURL();
        let article = await getArticle(request.id);
        let preparedText = prepareArticle(article.text);

        return `
            <section>
                <h1>${article.title}</h1>
                <article>${preparedText}</article>
            </section>
        `;
    },
    afterRender: async () => {}
};

export default Article;