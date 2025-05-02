import HamburgerMenu from '../pageobjects/HamburgerMenu.js';
import ShoppingCart from '../pageobjects/ShoppingCart.js';
import FooterOfPage from '../pageobjects/Footer.js';
import ProductListingInfo from '../pageobjects/ProductListingInfo.js';

describe('Nates Capstone Project', () => {
    it('Should run positive test cases', async () => {
        await HamburgerMenu.open()

        //await HamburgerMenu.BurgerMenuTestFlow();
        //await ShoppingCart.HomeMenuButton(0);
        //await ShoppingCart.ShopCartTestflow();
        await FooterOfPage.FooterTestFlow()
    })
})

