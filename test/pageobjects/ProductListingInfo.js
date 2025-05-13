import { $ } from '@wdio/globals';
import Base from './Base.js';
import { expect } from '@wdio/globals';

class ProductListingInfo extends Base {

    get mainPages() {
        return $('div.products.wrapper.mode-grid.products-grid')
    }

    get inlineElements() {
        return $$('.inline');
    }

    get brandsFilter() {
        const selector = '//p[contains(text(), " Product Brand ")]'
        return $(selector);
    }

    get akaiFilter() {
        return $('a[href="https://inmusicstore.com/shop-by-category.html?linchpin_productbrand=Akai+Professional"]')
    }

    get currentFilter() {
        return $('.filter-current')
    }

    async productListTestflow() {
        await this.clickAllMoreInfoButtons();
        await this.akaiFilterclick();
    }

    async akaiFilterclick() {
        await this.scrolltoBrandsfilter();
        await expect(this.brandsFilter).toBeDisplayed();
        await this.brandsFilter.click();
        await expect(this.akaiFilter).toBeDisplayed();
        await this.brandCheckboxes();
    }

    async brandCheckboxes() {
        const brandCheckboxes = await $$('div.linchpin_productbrandFilter');

        for (const brand of brandCheckboxes) {
            const labelSpan = await brand.$('div');
            const brandName = await labelSpan.getText();

            await brand.click();
            console.log(`Clicked to select: ${brandName}`);
            await browser.pause(1000);

            await expect(this.currentFilter).toExist();
            await this.scrolltoBrandsfilter();
            await expect(this.brandsFilter).toBeDisplayed();
            await this.brandsFilter.click();

            await brand.click();
            console.log(`Clicked to deselect: ${brandName}`);
           await browser.pause(500);

            await expect(this.currentFilter).not.toExist();
        }
    }


    async scrolltoBrandsfilter() {
        const element = await this.brandsFilter;
        await element.scrollIntoView();
    }


    async clickAllMoreInfoButtons() {
        const elements = await this.inlineElements;
        const moreInfoButtons = [];

        for (const el of elements) {
            const text = await el.getText();
            if (text.trim() === 'More Info') {
                moreInfoButtons.push(el);
            }
        }

        for (const btn of moreInfoButtons) {
            await btn.click();
            console.log(`Clicked a "More Info" button`);
        }
    }



    website () {
        return super.website('');
    }
}

export default new ProductListingInfo();