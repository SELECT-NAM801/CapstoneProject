import { $ } from '@wdio/globals';   // ✅ Needed: To select elements like buttons, inputs, etc.
import Page from './page.js';
import hamburgerMenu from "./HamburgerMenu";        // ✅ Needed: To extend the shared base Page class
import { expect } from '@wdio/globals';
import ShoppingCart from "./ShoppingCart";
import HamburgerMenu from "./HamburgerMenu";
import FooterOfPage from "./Footer";


class ProductListingInfo extends Page {

    get expAllbrandsPage () {
        return $('div.products.wrapper.mode-grid.products-grid')
    }

    get shpByctgryPage () {
        return $('div.products.wrapper.mode-grid.products-grid')
    }

    get tpSellersPage () {
        return $('div.products.wrapper.mode-grid.products-grid')
    }

}



//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////