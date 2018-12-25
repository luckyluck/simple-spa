import { parseRequestURL, prepareArticle, isElementInViewport, throttle } from '../../utils/utils';
import { getArticle,  } from '../../utils/api';

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
    afterRender: async () => {
        const video = document.querySelector('.adv-video');
        // Adding listener to be able to play/pause video automatically
        document.addEventListener('scroll', throttle(() => {
            const inViewport = isElementInViewport(video);

            if (inViewport && video.paused) {
                video.play();
            } else if (!inViewport && !video.paused) {
                video.pause();
            }
        }, 100));
    }
};

export default Article;
