import { $ } from '@wdio/globals';   // ✅ Needed: To select elements like buttons, inputs, etc.
import Page from './page.js';
import hamburgerMenu from "./HamburgerMenu";        // ✅ Needed: To extend the shared base Page class
import { expect } from '@wdio/globals';



class ShoppingCart extends Page {

    get shopCarticon () {
        return $('div[class="w-6 h-6 text-white"]');
    }

    get shopCartHeader () {
        const selector = '//h1[contains(text(), "Shopping Cart")]'
        return $(selector);
    }

    get emptycartText () {
        const selector = '//p[contains(text(), "You have no items in your shopping cart.")]'
        return $(selector);
    }

    get hereButton () {
        const selector = '//a[contains(text(), "here")]'
        return $(selector);
    }

    get trendingNow () {
        const selector = '//h2[contains(text(), "TRENDING NOW")]'
        return $(selector);
    }

    get prodListPage () {
        return $('section[class="pb-8"]')
    }

    get nitroAmpProdPage () {
        return $('a[href="https://inmusicstore.com/shop-by-category/nitro-amp.html"]')
    }

    get nitroAmpShopCart () {
        const selector = '//a[contains(text(), "Alesis Drums Nitro Amp    ")]'
        return $(selector);
    }

    get itemInfo () {
        return $('div[class="mx-auto flex pb-6 lg:flex-row flex-col items-center"]')
    }

    get addToCartButton () {
        return $('[title="Add to Cart"]')
    }

    get addToCartBanner () {
        return $('span[x-html="message.text"]')
    }

    get myCartPopUp () {
        return $('div[class="flex flex-col h-full py-6 space-y-6 bg-white shadow-xl"]')
    }

    get viewEditcart () {
        return $('[href="https://inmusicstore.com/checkout/cart/"]')
    }

    get xbutton () {
        return $('[title="Remove"]')
    }

    get qtyField () {
        return $('div[x-data="initQtyField()"]')
    }

    get increaseQuantity () {
        return $('div.flex.items-center.border.border-secondary.rounded-r-2xl.py-0.px-3.cursor-pointer')
    }

    get decreaseQuantity () {
        return $('div.flex.items-center.border.border-secondary.rounded-l-2xl.p-0.px-3.cursor-pointer')
    }

    get amountOfitems () {
        return $('span[x-text="cart.summary_count"]');
    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////                           ////////////////////////////////////////////////////
    ///////////////////             /////////////////////           ////////////////////        ////////////


    async ShopCartTestflow () {
        await this.OpenShoppingCart();
        await this.CheckEmptycart();
        await this.AddItem();
        await this.RemoveItem();
        await this.CheckEmptycart();
    }

////////////////////////////////////////////////////////////            ///////////////////////////////
    //////////////////////////              ///////////////////////////////////////////////////////////////////

    async OpenShoppingCart () {
        //await hamburgerMenu.Acceptcookies();
        await this.shopCarticon.click();
        await expect(this.shopCartHeader).toExist();
    }

    async CheckEmptycart () {
        await expect(this.emptycartText).toBeDisplayed();
        await this.hereButton.click();
        await expect(this.trendingNow).toBeDisplayed();
    }

    async AddItem () {
        await hamburgerMenu.ToggleHamburgerMenu();
        await hamburgerMenu.shopBycategoryLink.click();
        await expect(hamburgerMenu.sbcHeader).toBeDisplayed();
        await expect(this.prodListPage).toExist();
        await expect(this.nitroAmpProdPage).toExist();
        await this.nitroAmpProdPage.click();
        await expect(this.itemInfo).toExist();
        await expect(this.qtyField).toExist();
        await this.IncreaseItems();
        await expect(this.addToCartButton).toExist();
        await this.addToCartButton.click();
        await expect(this.amountOfitems).not.toBeDisplayed();
        await expect(this.itemInfo).toExist();
        await expect(this.qtyField).toExist();
        await this.DecreaseItems();
        await expect(this.addToCartButton).toExist();
        await this.addToCartButton.click();
        await expect(this.addToCartBanner).toBeDisplayed();
        await this.shopCarticon.click();
        await expect(this.myCartPopUp).toBeDisplayed();
        await this.viewEditcart.click();
        await expect(this.shopCartHeader).toBeDisplayed();
        await expect(this.nitroAmpShopCart).toExist();
    }

    async RemoveItem () {
        await expect(this.xbutton).toExist();
        await this.xbutton.click();
        await expect(this.emptycartText).toBeDisplayed();
    }


///////////////             ///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////                //////////////////////////////////////////

    async IncreaseItems () {
        await expect(this.increaseQuantity).toExist();
        for (let i = 0; i < 3; i++) {
            await this.increaseQuantity.click();
            await browser.pause(1000);
        }
    }

    async DecreaseItems () {
        await expect(this.decreaseQuantity).toExist();
        for (let i=0; i < 3; i++) {
            await this.decreaseQuantity.click();
            await browser.pause(1000);
        }
    }


    async HomeMenuButton (index) {
        await browser.execute((i) => {
            const buttons = [...document.querySelectorAll('img[title="Home inMusic Store"]')];
            if (buttons[i]) buttons[i].click();
        }, index);
    }

            //////////////      ////////////////////////////////////////////////////////////////////////////                ////////////////
/////////////           ////////////////////////////////////////////////////            /////////////////////////////////////////

    open () {
        return super.open('');
    }
}

export default new ShoppingCart();