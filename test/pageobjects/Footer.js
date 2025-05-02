import { $ } from '@wdio/globals';
import Page from './page.js';
import { expect } from '@wdio/globals';
import HamburgerMenu from "./HamburgerMenu";


class FooterOfPage extends Page {

    get mainPGfooter() {
        return $('.bg-accent-black.border-t.border-accent-black.page-footer.text-white')
    }

    get allFooterLinks () {
        return this.mainPGfooter.$$('a');
    }

    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////

    async footerTestFlow () {
        await HamburgerMenu.Acceptcookies();
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

    open () {
        return super.open();
    }
}

export default new FooterOfPage();