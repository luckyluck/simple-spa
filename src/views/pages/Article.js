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
        const advVideo = document.querySelector('.adv-video');
        // Initially turning of a volume mot to annoy a user
        advVideo.volume = 0;
        // A least of important check points
        const checkPoints = [25, 50, 75, 100];
        // Flag to indicate if standard message was shown or not
        // Because we want to show the message only once
        let isStandardShowed = false;
        // Interval ID to be able to manipulate it if there is one
        let intervalId;

        const onPageScroll = () => {
            const inViewport = isElementInViewport(advVideo);
            // We will not start the video again if the user watched it
            if (inViewport && advVideo.paused && advVideo.currentTime !== advVideo.duration) {
                advVideo.play();
            } else if (!inViewport && !advVideo.paused) {
                advVideo.pause();
            }
        };

        const onVideoPlay = () => {
            console.log('the video has started');
            intervalId = setInterval(() => {
                if (!isStandardShowed) {
                    console.log('Ad has been displayed for at least 2 sec in a row');
                    isStandardShowed = true;
                }
            }, 2000);
        };

        const onVideoPause = () => {
            clearInterval(intervalId);
            console.log('the video paused');
        };

        const onVideoProgress = () => {
            const percent = Math.floor(advVideo.currentTime / advVideo.duration * 100);
            // Writing to the console if the video goes through a check point
            if (percent >= checkPoints[0]) {
                const point = checkPoints.shift();
                console.log(`The video has played through ${point}%`);
                // We do not want to show message after the video has stopped
                if (point === 100) {
                    clearInterval(intervalId);
                }
            }
        };

        // Adding scroll listener for video manipulations
        document.addEventListener('scroll', throttle(onPageScroll, 100));
        // Adding on play/pause listeners for additional action logic
        advVideo.addEventListener('play', onVideoPlay);
        advVideo.addEventListener('pause', onVideoPause);
        // Adding video progress listener
        advVideo.addEventListener('timeupdate', onVideoProgress);

        // Adding listener to toggle volume on click on the video
        // advVideo.addEventListener('click', () => {
        //     // User can toggle video's volume
        //     if (!advVideo.paused) {
        //         advVideo.volume = advVideo.volume === 1 ? 0 : 1;
        //     }
        // });
    }
};

export default Article;
