import { parseRequestURL, prepareArticle } from './utils';

describe('Utils functions', () => {
    test('parseRequestURL', () => {
        window.location.hash = '/home';
        let parsedUrl = parseRequestURL();
        expect(parsedUrl).toEqual({ resource: 'home', id: undefined, verb: undefined });

        window.location.hash = '/article/1';
        parsedUrl = parseRequestURL();
        expect(parsedUrl).toEqual({ resource: 'article', id: '1', verb: undefined });

        window.location.hash = '/article/1/edit';
        parsedUrl = parseRequestURL();
        expect(parsedUrl).toEqual({ resource: 'article', id: '1', verb: 'edit' });
    });

    test('prepareArticle', () => {
        const video = '<video class="adv-video" width="100%" src="../../public/Forest_15_3b_Videvo.mov47209.mp4"></video>';
        const text = ['text 1', 'text 2', 'text 3'];
        const preparedText = prepareArticle(text);

        expect(preparedText).toBe(`<p>${text[0]}</p><p>${text[1]}</p>${video}<p>${text[2]}</p>`);
    });
});
