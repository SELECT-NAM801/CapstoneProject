import { $ } from '@wdio/globals';   // ✅ Needed: To select elements like buttons, inputs, etc.
import Page from './page.js';
import hamburgerMenu from "./HamburgerMenu";        // ✅ Needed: To extend the shared base Page class
import { expect } from '@wdio/globals';
import ShoppingCart from "./ShoppingCart";
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

    async FooterTestFlow () {
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