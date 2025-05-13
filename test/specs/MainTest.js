import HamburgerMenu from '../pageobjects/HamburgerMenu.js';
import ShoppingCart from '../pageobjects/ShoppingCart.js';
import FooterOfPage from '../pageobjects/Footer.js';

describe('Nates Capstone Project', () => {
    it('Everything should Pass', async () => {
        await HamburgerMenu.website()

        await FooterOfPage.footerTestFlow();
        await HamburgerMenu.burgerMenuTestFlow();
        await ShoppingCart.homeMenuButton(0);
        await ShoppingCart.shopCartTestflow();
    })
})

