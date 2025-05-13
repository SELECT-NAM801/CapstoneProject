import { $ } from '@wdio/globals';
import Base from './Base.js';
import { expect } from '@wdio/globals';
import mainExports from "./mainExports";

class FooterOfPage extends Base {

    get mainPGfooter() {
        return $('.bg-accent-black.border-t.border-accent-black.page-footer.text-white')
    }

    get allFooterLinks () {
        return this.mainPGfooter.$$('a');
    }

    async footerTestFlow () {
        await mainExports.acceptCookies();
        await expect(this.mainPGfooter).toExist();
        await this.checkAllFooterLinks();
    }

    async checkAllFooterLinks () {
        const links = await this.allFooterLinks;
        const urls = [];

        for (const link of links) {
            const href = await link.getAttribute('href');
            if (href && href.startsWith('http')) {
                urls.push(href);
            }
        }

        for (const url of urls) {
            try {
                const res = await browser.call(() => fetch(url));
                console.log(`${url} ${res.status} ${res.statusText}`);
            } catch (err) {
                console.error(`${url} failed: ${err.message}`);
            }
        }
    }

    website () {
        return super.website();
    }
}

export default new FooterOfPage();