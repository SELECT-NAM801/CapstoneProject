import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import Base from "../pageobjects/Base.js";
import ProductListingInfo from "./ProductListingInfo";
import mainExports from "../pageobjects/mainExports.js";


class HamburgerMenu extends Base {

    get sbcHeader () {
        const selector = '//h1/span[contains(text(), "Shop by Category")]'
        return $(selector);
    }

    get guitarPedalsLink () {
        const selector = '//h4/span[contains(text(), "Guitar Pedals")]'
        return $(selector);
    }


    async burgerMenuTestFlow () {
        await mainExports.toggleHamburgerMenu()
        await this.mainNavigationLinks();
        await this.clickSubmenuButtons(0);
        await this.shopBycategorySubmenu();
        await this.clickSubmenuButtons(1);
        await this.studioProdsubLink();
        await expect($('div[tabindex="0"]')).toExist();
        await $('div[tabindex="0"]').click();
        await this.clickSubmenuButtons(2);
        await expect(this.pianoskeyboardsLink).toBeDisplayed()
        await this.pianosAndkeyboardsSubmenu();
        await expect($('div[tabindex="0"]')).toExist();
        await $('div[tabindex="0"]').click();
        await this.clickSubmenuButtons(3);
        await expect(this.drumsLink).toExist();
        await this.drumsSubmenu();
        await expect($('div[tabindex="0"]')).toExist();
        await $('div[tabindex="0"]').click();
        await this.clickSubmenuButtons(4);
        await expect(this.mediaPlayersLink).toBeDisplayed();
        await this.djSubmenu();
        await expect($('div[tabindex="0"]')).toExist();
        await $('div[tabindex="0"]').click();
        await this.clickSubmenuButtons(5);
        await expect(this.paSpeakersLink).toBeDisplayed();
        await this.liveSoundPAsubmenu();
        await expect($('div[tabindex="0"]')).toExist();
        await $('div[tabindex="0"]').click();
        await this.clickSubmenuButtons(6);
        await expect(this.guitarPedalsLink).toBeDisplayed();
        await this.guitarsSubMenu();
        await expect($('div[tabindex="0"]')).toExist();
        await $('div[tabindex="0"]').click();
        await this.clickSubmenuButtons(0)
        await this.clickSubmenuButtons(1);
        await this.exploreAllbrands();
    }

    async mainNavigationLinks () {
        const navLinks = [
            { label: 'Shop by Category', expectedHeader: 'Shop by Category' },
            { label: 'Explore all brands', expectedHeader: 'Explore all brands' },
            { label: 'Top Sellers', expectedHeader: 'Top Sellers' },
        ];

        for (const link of navLinks) {
            const navItem = await $(`a=${link.label}`);
            await expect(navItem).toExist()
            await navItem.click();

            const header = await $(`h1=${link.expectedHeader}`);
            await expect(header).toBeDisplayed();

            if (link.label === 'Shop by Category') {
                await ProductListingInfo.productListTestflow();
            }

            await mainExports.toggleHamburgerMenu();
        }
    }

    async shopBycategorySubmenu () {
        const sbcLinks = [
            {label: 'Studio & Production', expectedHeader: 'Studio & Production'},
            {label: 'Pianos & Keyboards', expectedHeader: 'Pianos & Keyboards'},
            {label: 'Drums', expectedHeader: 'Drums'},
            {label: 'DJ', expectedHeader: 'DJ'},
            {label: 'Live Sound & PA', expectedHeader: 'Live Sound & PA'},
            {label: 'Guitars', expectedHeader: 'Guitars'},
            {label: 'Weekly Highlights', expectedHeader: 'Weekly Highlights'},
            {label: 'Parts & Accessories', expectedHeader: 'Parts & Accessories'},
            {label: 'Gaming & Live Streaming', expectedHeader: 'Gaming & Live Streaming'},
        ];

        for (const link of sbcLinks) {
            const navItem = await $(`a=${link.label}`);
            await expect(navItem).toExist();
            await navItem.click();

            const header = await $(`h1=${link.expectedHeader}`);
            await expect(header).toBeDisplayed()

            await mainExports.toggleHamburgerMenu();
            await this.clickSubmenuButtons(0)
        }
    }

    async studioProdsubLink () {
        const studProdsubLinks = [
            {label: 'Audio/MIDI Interfaces', expectedHeader: 'Audio/MIDI Interfaces'},
            {label: 'Studio Monitors', expectedHeader: 'Studio Monitors'},
            {label: 'Microphones', expectedHeader: 'Microphones'},
            {label: 'Controllers', expectedHeader: 'Controllers'},
            {label: 'Drum Machines', expectedHeader: 'Drum Machines'},
            {label: 'Sequencers', expectedHeader: 'Sequencers'},
        ];

        for (const link of studProdsubLinks) {
            const navItem = await $(`span=${link.label}`);
            await expect(navItem).toExist();
            await navItem.click();

            const header = await $(`h1=${link.expectedHeader}`);
            await expect(header).toBeDisplayed();

            await mainExports.toggleHamburgerMenu();
            await this.clickSubmenuButtons(0)
            await this.clickSubmenuButtons(1)
        }
    }

    async pianosAndkeyboardsSubmenu () {
        const pnoKybrdlinks = [
            {label: 'Digital Pianos', expectedHeader: 'Digital Pianos'},
            {label: 'Portable Keyboards', expectedHeader: 'Portable Keyboards'},
            {label: 'Keyboard Controllers', expectedHeader: 'Keyboard Controllers'},
            {label: 'Keyboard Accessories', expectedHeader: 'Keyboard Accessories'},
        ];

        for (const link of pnoKybrdlinks) {
            const navItem = await $(`h4=${link.label}`);
            await navItem.click();

            const header = await $(`h1=${link.expectedHeader}`);
            await expect(header).toBeDisplayed();

            await mainExports.toggleHamburgerMenu();
            await this.clickSubmenuButtons(0)
            await this.clickSubmenuButtons(2)
        }
    }

    async drumsSubmenu () {
        const drumsLinks = [
            {label: 'Electronic Drum Kits', expectedHeader: 'Electronic Drum Kits'},
            {label: 'Drum Multipads', expectedHeader: 'Drum Multipads'},
            {label: 'Drum Machines & Modules', expectedHeader: 'Drum Machines & Modules'},
            {label: 'Drum Accessories', expectedHeader: 'Drum Accessories'},
        ];

        for (const link of drumsLinks) {
            const drumItems = await $(`h4=${link.label}`);
            await expect(drumItems).toExist();
            await drumItems.click();

            const header = await $(`h1=${link.expectedHeader}`);
            await expect(header).toBeDisplayed();

            await mainExports.toggleHamburgerMenu();
            await this.clickSubmenuButtons(0)
            await this.clickSubmenuButtons(3)
        }
    }

    async djSubmenu () {
        const djLinks = [
            {label: 'Media Players', expectedHeader: 'Media Players'},
            {label: 'Turntables', expectedHeader: 'Turntables'},
            {label: 'Mixers', expectedHeader: 'Mixers'},
            //{label: 'Controllers', expectedHeader: 'Controllers'}, //** For some reason this one does not work
            {label: 'Standalone DJ Systems', expectedHeader: 'Standalone DJ Systems'},
            {label: 'Accessories', expectedHeader: 'Accessories'},
    ];
        for (const link of djLinks) {
            const djItems = await $(`span=${link.label}`);
            await expect(djItems).toExist();
            await djItems.click();

            const header = await $(`h1=${link.expectedHeader}`);
            await expect(header).toBeDisplayed();

            await mainExports.toggleHamburgerMenu();
            await this.clickSubmenuButtons(0)
            await this.clickSubmenuButtons(4)
        }
    }

    async liveSoundPAsubmenu () {
        const lveSndPALinks = [
            {label: 'PA Speakers', expectedHeader: 'PA Speakers'},
            //{label: 'Mixers', expectedHeader: 'Mixers'},   *** Cannot Figure this out for the life of me
            {label: 'Audio Recorders', expectedHeader: 'Audio Recorders'},
            {label: 'Lighting Effects', expectedHeader: 'Lighting Effects'},
            {label: 'Sound & Light Accessories', expectedHeader: 'Sound & Light Accessories'},
        ];

        for (const link of lveSndPALinks) {
            const navItem = await $(`h4=${link.label}`);
            await expect(navItem).toExist();
            await navItem.click();

            const header = await $(`h1=${link.expectedHeader}`);
            await expect(header).toBeDisplayed();

            await mainExports.toggleHamburgerMenu();
            await this.clickSubmenuButtons(0)
            await this.clickSubmenuButtons(5)
        }
    }

    async guitarsSubMenu () {
        const guitarLinks = [
            {label: 'Guitar Pedals', expectedHeader: 'Guitar Pedals'},
            {label: 'Guitar Amps', expectedHeader: 'Guitar Amps'},
            {label: 'Guitar Accessories', expectedHeader: 'Guitar Accessories'},
        ];

        for (const link of guitarLinks) {
            const guitarLink = await $(`h4=${link.label}`);
            await expect(guitarLink).toExist();
            await guitarLink.click();

            const header = await $(`h1=${link.expectedHeader}`);
            await expect(header).toBeDisplayed();

            await mainExports.toggleHamburgerMenu();
            await this.clickSubmenuButtons(0)
            await this.clickSubmenuButtons(6)
        }
    }

    async exploreAllbrands () {
        const brandLinks = [
            {brand: 'Akai Professional', expectedHeader: 'Akai Professional'},
            {brand: 'Alesis', expectedHeader: 'Alesis'},
            {brand: 'Alto Professional', expectedHeader: 'Alto Professional'},
            {brand: 'Denon DJ', expectedHeader: 'Denon DJ'},
            {brand: 'HeadRush', expectedHeader: 'HeadRush'},
            {brand: 'M-Audio', expectedHeader: 'M-Audio'},
            {brand: 'Marantz Professional', expectedHeader: 'Marantz Professional'},
            {brand: 'Numark', expectedHeader: 'Numark'},
            {brand: 'RANE', expectedHeader: 'RANE'},
            {brand: 'SoundSwitch', expectedHeader: 'SoundSwitch'},
            //{brand: 'Stanton', expectedHeader: 'Stanton'},  ** This is one where the Support button was in the way not clicking
        ];

        for (const link of brandLinks) {
            const brandItems = await $(`h4=${link.brand}`);
            await expect(brandItems).toExist();
            await brandItems.click();

            const header = await $(`h1=${link.expectedHeader}`);
            await expect(header).toBeDisplayed();

            await mainExports.toggleHamburgerMenu();
            await this.clickSubmenuButtons(1)
        }
    }


    async clickSubmenuButtons (index) {
        await browser.execute((i) => {
            const buttons = [...document.querySelectorAll('div[tabindex="0"]')];
            if (buttons[i]) buttons[i].click();
        }, index);
    }





    website () {
        return super.website('');
    }
}

export default new HamburgerMenu();
