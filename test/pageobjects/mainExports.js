import {$, expect} from "@wdio/globals";
import Base from "./Base.js";

class MainExports extends Base {
    get accptCkies () {
        return $('#truste-consent-button')
    }

    get inMusicHeader () {
        return $('img[title="Home inMusic Store"]')
    }

    get hamBurgermenuIcon () {
        return $('#Group');
    }


    get hamBurgermenuOpen () {
        return $('[x-ref="nav-menu"]')
    }

    async acceptCookies () {
        await expect(this.inMusicHeader).toExist();
        await expect(this.accptCkies).toExist();
        await this.accptCkies.click();
    }

    async toggleHamburgerMenu () {
        await this.hamBurgermenuIcon.click();
        await expect(this.hamBurgermenuOpen).toBeExisting();
    }

    website () {
        return super.website('');
    }
}

export default new MainExports();

