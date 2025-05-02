import HamburgerMenu from '../pageobjects/HamburgerMenu.js';
import ShoppingCart from '../pageobjects/ShoppingCart.js';
import FooterOfPage from '../pageobjects/Footer.js';


/////////////////////////////// /   //////////////////////////////////////////  /////////////////////////////
/////////////////////////////// MAIN TEST //////////////////////////////////////////////////////////
/////////////////// /////////////////////////////   /////////// ////////////////////


describe('Nates Capstone Project', () => {
    it('Should run positive test cases', async () => {
        await HamburgerMenu.open()

        await FooterOfPage.footerTestFlow();
        await HamburgerMenu.burgerMenuTestFlow();
        await ShoppingCart.homeMenuButton(0);
        await ShoppingCart.shopCartTestflow();
    })
})

