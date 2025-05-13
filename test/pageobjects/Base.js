import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';

export default class Base {

    async website (path) {
        await browser.maximizeWindow();
        return browser.url(`https://inmusicstore.com//${path}`)
    }
}
