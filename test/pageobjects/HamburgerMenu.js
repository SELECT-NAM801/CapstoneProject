import { $ } from '@wdio/globals';
import { expect } from '@wdio/globals';
import Page from './page.js';

class HamburgerMenu extends Page {

                        //////////// COOKIES /////////////

    get accptCkies () {
        return $('#truste-consent-button')
    }

                     ////////////// HEADER ///////////////////

    get inMusicHeader () {
        return $('img[title="Home inMusic Store"]')
    }

                ////////////// HAMBURGER MENU ///////////////////

    get hamBurgermenuIcon () {
        return $('#Group');
    }

    get hamBurgermenuclose () {
        return $('#close-menu');
    }

    get hamBurgermenuOpen () {
        return $('[x-ref="nav-menu"]')
    }

    get filterSection () {
        return $('div.block-content.filter-content');
    }

    get subMenu () {
        return $('div[tabindex="0"]');
    }


    /////////////////////
    //////////////////////SHOP BY CATEGORY////////////////////////////
                                          /////////////////////////////

    get shopBycategoryLink () {
        const selector = '//h4/span[contains(text(), "Shop by Category")]'
        return $(selector);
    }

    get sbcHeader () {
        const selector = '//h1/span[contains(text(), "Shop by Category")]'
        return $(selector);
    }


    get weeklyHighlightsLink () {
        const selector = '//span[contains(text(), "Weekly Highlights")]'
        return $(selector);
    }

    get wklyhlghtHeader () {
        const selector = '//h1/span[contains(text(), "Weekly Highlights")]'
        return $(selector);
    }

    get gamingLivestreamLink () {
        const selector = '//span[contains(text(), "Gaming & Live Streaming")]'
        return $(selector);
    }

    get gminglvstreamHeader () {
        const selector = '//h1/span[contains(text(), "Gaming & Live Streaming")]'
        return $(selector);
    }

    get partsAndaccessoriesLink () {
        const selector = '//span[contains(text(), "Parts & Accessories")]'
        return $(selector);
    }

    get prtsAndaccesHeader () {
        const selector = '//h1/span[contains(text(), "Parts & Accessories")]'
        return $(selector);
    }

                                    //STUDIO & PRODUCTION///

    get studiprodLink () {
        const selector = '//h4/span[contains(text(), "Studio & Production")]'
        return $(selector);
    }

    get studiProdheader () {
        const selector = '//span[contains(text(), "Studio & Production")]'
        return $(selector);
    }

    get audioMidiIntLink () {
        const selector = '//h4/span[contains(text(), "Audio/MIDI Interfaces")]'
        return $(selector);
    }

    get audMidheader () {
        const selector = '//h1/span[contains(text(), "Audio/MIDI Interfaces")]'
        return $(selector);
    }

    get studioMonitorsLink () {
        const selector = '//h4/span[contains(text(), "Studio Monitors")]'
        return $(selector);
    }

    get studMonheader () {
        const selector = '//h1/span[contains(text(), "Studio Monitors")]'
        return $(selector);
    }

    get microphonesLink () {
        const selector = '//h4/span[contains(text(), "Microphones")]'
        return $(selector);
    }

    get microphoneHeader () {
        const selector = '//h1/span[contains(text(), "Microphones")]'
        return $(selector);
    }

    get controllersLink () {
        const selector = '//h4/span[contains(text(), "Controllers")]'
        return $(selector);
    }

    get controlHeader () {
        const selector = '//h1/span[contains(text(), "Controllers")]'
        return $(selector);
    }

    get drumMachinesLink () {
        const selector = '//h4/span[contains(text(), "Drum Machines")]'
        return $(selector);
    }

    get drumMachineHeader () {
        const selector = '//h1/span[contains(text(), "Drum Machines")]'
        return $(selector);
    }

    get sequencersLink () {
        const selector = '//h4/span[contains(text(), "Sequencers")]'
        return $(selector);
    }

    get seqHeader () {
        const selector = '//h1/span[contains(text(), "Sequencers")]'
        return $(selector);
    }

    get studioAccesLink () {
        const selector = '//h4/span[contains(text(), "Studio Accessories")]'
        return $(selector);
    }

    get studioAccessHeader () {
        const selector = '//h1/span[contains(text(), "Studio Accessories")]'
        return $(selector);
    }

    get instrumentsLink () {
        const selector = '//h4/span[contains(text(), "Instruments")]'
        return $(selector);
    }

    get instrumentHeader () {
        const selector = '//h1/span[contains(text(), "Instruments")]'
        return $(selector);
    }

    //// Pianos & Keyboards ///////

    get pianoskeyboardsLink () {
        const selector = '//span[contains(text(), "Pianos & Keyboards")]'
        return $(selector);
    }

    get pianoskeyboardHeader () {
        const selector = '//h1/span[contains(text(), "Pianos & Keyboards")]'
        return $(selector);
    }

    get digitalPianosLink () {
        const selector = '//h4/span[contains(text(), "Digital Pianos")]'
        return $(selector);
    }

    get digitalPianoHeader () {
        const selector = '//h1/span[contains(text(), "Digital Pianos")]'
        return $(selector);
    }

    get portableKeyboardsLink () {
        const selector = '//h4/span[contains(text(), "Portable Keyboards")]'
        return $(selector);
    }

    get portableKeyboardHeader () {
        const selector = '//h1/span[contains(text(), "Portable Keyboards")]'
        return $(selector);
    }

    get keyboardControllersLink () {
        const selector = '//h4/span[contains(text(), "Keyboard Controllers")]'
        return $(selector);
    }

    get keyboardcontHeader () {
        const selector = '//h1/span[contains(text(), "Keyboard Controllers")]'
        return $(selector);
    }

    get keyboardAccessoriesLink () {
        const selector = '//h4/span[contains(text(), "Keyboard Accessories")]'
        return $(selector);
    }

    get keyboardAccessHeader () {
        const selector = '//h1/span[contains(text(), "Keyboard Accessories")]'
        return $(selector);
    }

    ////// DRUMS /////

    get drumsLink () {
        const selector = '//span[contains(text(), "Drums")]'
        return $(selector);
    }

    get drumsHeader () {
        const selector = '//h1/span[contains(text(), "Drums")]'
        return $(selector);
    }

    get electronicDrumkits () {
        const selector = '//h4/span[contains(text(), "Electronic Drum Kits")]'
        return $(selector);
    }

    get electDrumkitsHeader () {
        const selector = '//h1/span[contains(text(), "Electronic Drum Kits")]'
        return $(selector);
    }

    get drumMultipadLink () {
        const selector = '//h4/span[contains(text(), "Drum Multipads")]'
        return $(selector);
    }

    get drumMultipadHeader () {
        const selector = '//h1/span[contains(text(), "Drum Multipads")]'
        return $(selector);
    }

    get drumMachandMod () {
        const selector = '//h4/span[contains(text(), "Drum Machines & Modules")]'
        return $(selector);
    }

    get drumMachandModHeader () {
        const selector = '//h1/span[contains(text(), "Drum Machines & Modules")]'
        return $(selector);
    }

    get drumAccessoriesLink () {
        const selector = '//h4/span[contains(text(), "Drum Accessories")]'
        return $(selector);
    }

    get drumAccessHeader () {
        const selector = '//h1/span[contains(text(), "Drum Accessories")]'
        return $(selector);
    }

    /////////// DJ ////////////////

    get djLink () {
        const selector = '//h4/span[contains(text(), "DJ")]'
        return $(selector);
    }

    get djHeader () {
        const selector = '//h1/span[contains(text(), "DJ")]'
        return $(selector);
    }

    get mediaPlayersLink () {
        const selector = '//span[contains(text(), " Media Players ")]'
        return $(selector);
    }

    get mediaPlayersHeader () {
        const selector = '//h1/span[contains(text(), "Media Players")]'
        return $(selector);
    }

    get turntablesLink () {
        const selector = '//span[contains(text(), " Turntables ")]'
        return $(selector);
    }

    get turntablesHeader () {
        const selector = '//h1/span[contains(text(), "Turntables")]'
        return $(selector);
    }

    get mixersLink () {
        const selector = '//span[contains(text(), " Mixers ")]'
        return $(selector);
    }

    get mixersHeader () {
        const selector = '//h1/span[contains(text(), "Mixers")]'
        return $(selector);
    }

    get controllersLink () {
        const selector = '//span[contains(text(), " Controllers ")]'
        return $(selector);
    }

    get controllersHeader () {
        const selector = '//h1/span[contains(text(), "Controllers")]'
        return $(selector);
    }

    get stndAlnDJSystmlink () {
        const selector = '//span[contains(text(), " Standalone DJ Systems ")]'
        return $(selector);
    }

    get stndalnDJSystmHeader () {
        const selector = '//h1/span[contains(text(), "Standalone DJ Systems")]'
        return $(selector);
    }

    get djAccessoriesLink () {
        const selector = '//span[contains(text(), " Accessories ")]'
        return $(selector);
    }

    get djAccessoriesHeader () {
        const selector = '//h1/span[contains(text(), "Accessories")]'
        return $(selector);
    }

    //// LIVE SOUNDS & PA

    get liveSoundPAlink () {
        const selector = '//h4/span[contains(text(), " Live Sound & PA ")]'
        return $(selector);
    }

    get liveSoundPAheader () {
        const selector = '//h1/span[contains(text(), "Live Sound & PA")]'
        return $(selector);
    }

    get paSpeakersLink () {
        const selector = '//h4/span[contains(text(), " PA Speakers ")]'
        return $(selector);
    }

    get paSpeakersHeader () {
        const selector = '//h1/span[contains(text(), "PA Speakers")]'
        return $(selector);
    }

    get liveSoundmixersLink () {
        const selector = '//h4/span[contains(text(), " Mixers ")]'
        return $(selector);
    }

    get liveSoundmixersHeader () {
        const selector = '//h1/span[contains(text(), "Mixers")]'
        return $(selector);
    }

    get audioRecordersLink () {
        const selector = '//h4/span[contains(text(), " Audio Recorders ")]'
        return $(selector);
    }

    get audioRecordersHeader () {
        const selector = '//h1/span[contains(text(), "Audio Recorders")]'
        return $(selector);
    }

    get lightingEffectsLink () {
        const selector = '//h4/span[contains(text(), " Lighting Effects ")]'
        return $(selector);
    }

    get lightingEffectsHeader () {
        const selector = '//h1/span[contains(text(), "Lighting Effects")]'
        return $(selector);
    }

    get soundNaccessLInk () {
        const selector = '//h4/span[contains(text(), " Sound & Light Accessories ")]'
        return $(selector);
    }

    get soundNaccessHeader () {
        const selector = '//h1/span[contains(text(), "Sound & Light Accessories")]'
        return $(selector);
    }

    get playersLink () {
        return $('a[title="Players"]');
    }

    get playersHeader () {
        const selector = '//h1/span[contains(text(), "Players")]'
        return $(selector);
    }

    get getSuppBut () {
        return $('div.launcher-button')
    }

    //////  GUITARS ////////

    get guitarsLink () {
        const selector = '//h4/span[contains(text(), "Guitars")]'
        return $(selector);
    }

    get guitarsHeader () {
        const selector = '//h1/span[contains(text(), "Guitars")]'
        return $(selector);
    }

    get guitarPedalsLink () {
        const selector = '//h4/span[contains(text(), "Guitar Pedals")]'
        return $(selector);
    }

    get guitarPedalsHeader () {
        const selector = '//h1/span[contains(text(), "Guitar Pedals")]'
        return $(selector);
    }

    get guitarAmpsLink () {
        const selector = '//h4/span[contains(text(), "Guitar Amps")]'
        return $(selector);
    }

    get guitarAmpsHeader () {
        const selector = '//h1/span[contains(text(), "Guitar Amps")]'
        return $(selector);
    }

    get guitarAccessLink () {
        const selector = '//h4/span[contains(text(), "Guitar Accessories")]'
        return $(selector);
    }

    get guitarAccessHeader () {
        const selector = '//h1/span[contains(text(), "Guitar Accessories")]'
        return $(selector);
    }

    //////////////////////////
    ////////////////////////// EXPLORE ALL BRANDS //////////////////////////
                                                  //////////////////////////

    get exploreAllBrandslink () {
        const selector = '//span[contains(text(), "Explore all brands")]'
        return $(selector);
    }

    get expAllbrndsHeader () {
        const selector = '//h1[@class="m-0"]/span[contains(text(), "Explore all brands")]'
        return $(selector);
    }

    get akaiProLink () {
        const selector = '//h4/span[contains(text(), "Akai Professional")]'
        return $(selector);
    }

    get akaiProHeader () {
        const selector = '//h1/span[contains(text(), "Akai Professional")]'
        return $(selector);
    }

    get alesisLink () {
        const selector = '//h4/span[contains(text(), " Alesis ")]'
        return $(selector);
    }

    get alesisHeader () {
        const selector = '//h1/span[contains(text(), "Alesis")]'
        return $(selector);
    }

    get altoProLink () {
        const selector = '//h4/span[contains(text(), " Alto Professional ")]'
        return $(selector);
    }

    get altoProHeader () {
        const selector = '//h1/span[contains(text(), "Alto Professional")]'
        return $(selector);
    }

    get denonDJlink () {
        const selector = '//h4/span[contains(text(), " Denon DJ ")]'
        return $(selector);
    }

    get denonDJHeader () {
        const selector = '//h1/span[contains(text(), "Denon DJ")]'
        return $(selector);
    }

    get headrushLink () {
        const selector = '//h4/span[contains(text(), " HeadRush ")]'
        return $(selector);
    }

    get headrushHeader () {
        const selector = '//h1/span[contains(text(), "HeadRush")]'
        return $(selector);
    }

    get maudioLink () {
        const selector = '//h4/span[contains(text(), " M-Audio ")]'
        return $(selector);
    }

    get maudioHeader () {
        const selector = '//h1/span[contains(text(), "M-Audio")]'
        return $(selector);
    }

    get marantzProLink () {
        const selector = '//h4/span[contains(text(), " Marantz Professional ")]'
        return $(selector);
    }

    get marantzProHeader () {
        const selector = '//h1/span[contains(text(), "Marantz Professional")]'
        return $(selector);
    }

    get numarkLink () {
        const selector = '//h4/span[contains(text(), " Numark ")]'
        return $(selector);
    }

    get numarkHeader () {
        const selector = '//h1/span[contains(text(), "Numark")]'
        return $(selector);
    }

    get raneLink () {
        const selector = '//h4/span[contains(text(), " RANE ")]'
        return $(selector);
    }

    get raneHeader  () {
        const selector = '//h1/span[contains(text(), "RANE")]'
        return $(selector);
    }

    get soundswitchLink () {
        const selector = '//h4/span[contains(text(), " SoundSwitch ")]'
        return $(selector);
    }

    get soundswitchHeader () {
        const selector = '//h1/span[contains(text(), "SoundSwitch")]'
        return $(selector);
    }

    get stantonLink () {
        return $('a[title="Stanton"]')
    }

    get stantonHeader () {
        const selector = '//h1/span[contains(text(), "Stanton")]'
        return $(selector);
    }


    ////////////////////////////
    //////////////////////////// TOP SELLERS ///////////////////////////////
                                             ///////////////////////////////

    get topSellersLnk () {
        const selector = '//span[contains(text(), "Top Sellers")]'
        return $(selector);
    }

    get topSellersHeader () {
        const selector = '//h1/span[contains(text(), "Top Sellers")]'
        return $(selector);
    }


//////////////////////////////////////////////////                      ///////////////////////////////////////////
                                ///////////////////////////////////////////////////             /////////////////////////////////////
/////////////////////////////////////////////                               ///////////////////////////////////////////


    async BurgerMenuTestFlow () {
        await this.Acceptcookies()
        await this.ToggleHamburgerMenu()
        await this.MainNavigationLinks()
    }

    async Acceptcookies () {
         await expect(this.inMusicHeader).toExist()
         await expect(this.accptCkies).toExist()
         await this.accptCkies.click();
    }

    async ToggleHamburgerMenu () {
         await this.hamBurgermenuIcon.click();
         await expect(this.hamBurgermenuOpen).toBeExisting();
         //await this.hamBurgermenuclose.click();
    }

    ////////////////////////////////////////////////////////////////////////
////////////////////////////// Main Navigation LInks ////////////////////
                ///////////////////////////////////////////

    async MainNavigationLinks () {
         await this.shopBycategoryLink.click();
         await expect(this.sbcHeader).toExist();
         await expect(this.filterSection).toExist();
         await this.ToggleHamburgerMenu();
         await this.exploreAllBrandslink.click();
         await expect(this.expAllbrndsHeader).toExist();
         await expect(this.filterSection).toExist();
         await this.ToggleHamburgerMenu();
         await this.topSellersLnk.click();
         await expect(this.topSellersHeader).toExist();
         await expect(this.filterSection).toExist();
         await this.SbCsubmenuButton();
         await this.ExpAllbrndsSubmenuButton();
    }

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////SHOP BY CATEGORY SUBMENUS ////////////////////////////////////////
                        /////////////////////////////////

    async SbCsubmenuButton () {
         await this.ToggleHamburgerMenu();
         await this.clickSubmenuButtons(0);
         await expect(this.studiprodLink).toExist();
         await this.studiprodLink.click();
         await expect(this.studiProdheader).toExist();
         await this.StudProdSubmenuButton();
         await this.PianosKeyboardsSubmenuButton();
         await this.DrumsSubmenuButton();
         await this.DJsubMenuButtons();
         await this.LiveSoundnPAsubmenuButton();
         await this.GuitarsSubmenuButton();
         await this.ToggleHamburgerMenu();
         await this.clickSubmenuButtons(0);
         await expect(this.weeklyHighlightsLink).toExist();
         await this.weeklyHighlightsLink.click();
         await expect(this.wklyhlghtHeader).toExist();
         await this.ToggleHamburgerMenu();
         await this.clickSubmenuButtons(0);
         await expect(this.partsAndaccessoriesLink).toExist();
         await this.partsAndaccessoriesLink.click();
         await expect(this.prtsAndaccesHeader).toExist();
         await this.ToggleHamburgerMenu();
         await this.clickSubmenuButtons(0);
         await expect(this.gamingLivestreamLink).toExist();
         await this.gamingLivestreamLink.click();
         await expect(this.gminglvstreamHeader).toExist();
    }

    async StudProdSubmenuButton () {
         await this.ToggleHamburgerMenu();
         await this.clickSubmenuButtons(0);
         await expect(this.studiprodLink).toExist();
         await this.clickSubmenuButtons(1);
         await expect(this.audioMidiIntLink).toExist();
         await this.audioMidiIntLink.click();
         await expect(this.audMidheader).toExist();
         await this.ToggleHamburgerMenu();
         await this.clickSubmenuButtons(0);
         await expect(this.studiprodLink).toExist();
         await this.clickSubmenuButtons(1);
         await expect(this.studioMonitorsLink).toExist();
         await this.studioMonitorsLink.click();
         await expect(this.studMonheader).toExist();
         await this.ToggleHamburgerMenu();
         await this.clickSubmenuButtons(0);
         await expect(this.studiprodLink).toExist();
         await this.clickSubmenuButtons(1);
         await expect(this.microphonesLink).toExist();
         await this.microphonesLink.click();
         await expect(this.microphoneHeader).toExist();
         await this.ToggleHamburgerMenu();
         await this.clickSubmenuButtons(0);
         await expect(this.studiprodLink).toExist();
         await this.clickSubmenuButtons(1);
         await expect(this.controllersLink).toExist();
         await this.controllersLink.click();
         await expect(this.controlHeader).toExist();
         await this.ToggleHamburgerMenu();
         await this.clickSubmenuButtons(0);
         await expect(this.studiprodLink).toExist();
         await this.clickSubmenuButtons(1);
         await expect(this.drumMachinesLink).toExist();
         await this.drumMachinesLink.click();
         await expect(this.drumMachineHeader).toExist();
         await this.ToggleHamburgerMenu();
         await this.clickSubmenuButtons(0);
         await expect(this.studiprodLink).toExist();
         await this.clickSubmenuButtons(1);
         await expect(this.sequencersLink).toExist();
         await this.sequencersLink.click();
         await expect(this.seqHeader).toExist();
         await this.ToggleHamburgerMenu();
         await this.clickSubmenuButtons(0);
         await expect(this.studiprodLink).toExist();
         await this.clickSubmenuButtons(1);
         await expect(this.studioAccesLink).toExist();
         await this.studioAccesLink.click();
         await expect(this.studioAccessHeader).toExist();
         await this.ToggleHamburgerMenu();
         await this.clickSubmenuButtons(0);
         await expect(this.studiprodLink).toExist();
         await this.clickSubmenuButtons(1);
         await expect(this.instrumentsLink).toExist();
         await this.instrumentsLink.click();
         await expect(this.instrumentHeader).toExist();
    }

    async PianosKeyboardsSubmenuButton () {
        await this.ToggleHamburgerMenu();
        await expect(this.shopBycategoryLink).toExist();
        await this.clickSubmenuButtons(0);
        await expect(this.pianoskeyboardsLink).toExist();
        await this.pianoskeyboardsLink.click();
        await expect(this.pianoskeyboardHeader).toExist();
        await this.ToggleHamburgerMenu();
        await expect(this.shopBycategoryLink).toExist();
        await this.clickSubmenuButtons(0);
        await expect(this.pianoskeyboardsLink).toExist();
        await this.clickSubmenuButtons(2);
        await expect(this.digitalPianosLink).toExist();
        await this.digitalPianosLink.click();
        await expect(this.digitalPianoHeader).toExist();
        await this.ToggleHamburgerMenu();
        await expect(this.shopBycategoryLink).toExist();
        await this.clickSubmenuButtons(0);
        await expect(this.pianoskeyboardsLink).toExist();
        await this.clickSubmenuButtons(2);
        await expect(this.portableKeyboardsLink).toExist();
        await this.portableKeyboardsLink.click();
        await expect(this.portableKeyboardHeader).toExist();
        await this.ToggleHamburgerMenu();
        await expect(this.shopBycategoryLink).toExist();
        await this.clickSubmenuButtons(0);
        await expect(this.pianoskeyboardsLink).toExist();
        await this.clickSubmenuButtons(2);
        await expect(this.keyboardControllersLink).toExist();
        await this.keyboardControllersLink.click();
        await expect(this.keyboardcontHeader).toExist();
        await this.ToggleHamburgerMenu();
        await expect(this.shopBycategoryLink).toExist();
        await this.clickSubmenuButtons(0);
        await expect(this.pianoskeyboardsLink).toExist();
        await this.clickSubmenuButtons(2);
        await expect(this.keyboardAccessoriesLink).toExist();
        await this.keyboardAccessoriesLink.click();
        await expect(this.keyboardAccessHeader).toExist();
    }

    async DrumsSubmenuButton () {
         await this.ToggleHamburgerMenu();
         await expect(this.shopBycategoryLink).toExist();
         await this.clickSubmenuButtons(0);
         await expect(this.drumsLink).toExist();
         await this.drumsLink.click();
         await expect(this.drumsHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.shopBycategoryLink).toExist();
         await this.clickSubmenuButtons(0);
         await expect(this.drumsLink).toExist();
         await this.clickSubmenuButtons(3);
         await expect(this.electronicDrumkits).toExist();
         await this.electronicDrumkits.click();
         await expect(this.electDrumkitsHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.shopBycategoryLink).toExist();
         await this.clickSubmenuButtons(0);
         await expect(this.drumsLink).toExist();
         await this.clickSubmenuButtons(3);
         await expect(this.drumMultipadLink).toExist();
         await this.drumMultipadLink.click();
         await expect(this.drumMultipadHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.shopBycategoryLink).toExist();
         await this.clickSubmenuButtons(0);
         await expect(this.drumsLink).toExist();
         await this.clickSubmenuButtons(3);
         await expect(this.drumMachandMod).toExist();
         await this.drumMachandMod.click();
         await expect(this.drumMachandModHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.shopBycategoryLink).toExist();
         await this.clickSubmenuButtons(0);
         await expect(this.drumsLink).toExist();
         await this.clickSubmenuButtons(3);
         await expect(this.drumAccessoriesLink).toExist();
         await this.drumAccessoriesLink.click();
         await expect(this.drumAccessHeader).toExist();
    }

    async DJsubMenuButtons () {
         await this.ToggleHamburgerMenu();
         await expect(this.shopBycategoryLink).toExist();
         await this.clickSubmenuButtons(0);
         await expect(this.djLink).toExist();
         await this.djLink.click();
         await expect(this.djHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.shopBycategoryLink).toExist();
         await this.clickSubmenuButtons(0);
         await expect(this.djLink).toExist();
         await this.clickSubmenuButtons(4);
         await expect(this.mediaPlayersLink).toExist();
         await this.mediaPlayersLink.click();
         await expect(this.mediaPlayersHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.shopBycategoryLink).toExist();
         await this.clickSubmenuButtons(0);
         await expect(this.djLink).toExist();
         await this.clickSubmenuButtons(4);
         await expect(this.turntablesLink).toExist();
         await this.turntablesLink.click();
         await expect(this.turntablesHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.shopBycategoryLink).toExist();
         await this.clickSubmenuButtons(0);
         await expect(this.djLink).toExist();
         await this.clickSubmenuButtons(4);
         await expect(this.mixersLink).toExist();
         await this.mixersLink.click();
         await expect(this.mixersHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.shopBycategoryLink).toExist();
         await this.clickSubmenuButtons(0);
         await expect(this.djLink).toExist();
         await this.clickSubmenuButtons(4);
         await expect(this.controllersLink).toExist();
         await this.ControllerArrayclick(2);
         await expect(this.controllersHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.shopBycategoryLink).toExist();
         await this.clickSubmenuButtons(0);
         await expect(this.djLink).toExist();
         await this.clickSubmenuButtons(4);
         await expect(this.stndAlnDJSystmlink).toExist();
         await this.stndAlnDJSystmlink.click();
         await expect(this.stndalnDJSystmHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.shopBycategoryLink).toExist();
         await this.clickSubmenuButtons(0);
         await expect(this.djLink).toExist();
         await this.clickSubmenuButtons(4);
         await expect(this.djAccessoriesLink).toExist();
         await this.AccessoriesArrayClick(4);
         await expect(this.djAccessoriesHeader).toExist();
    }

    async LiveSoundnPAsubmenuButton () {
        await this.ToggleHamburgerMenu();
        await expect(this.shopBycategoryLink).toExist();
        await this.clickSubmenuButtons(0);
        await expect(this.liveSoundPAlink).toExist();
        await this.liveSoundPAlink.click();
        await expect(this.liveSoundPAheader).toExist();
        await this.ToggleHamburgerMenu();
        await expect(this.shopBycategoryLink).toExist();
        await this.clickSubmenuButtons(0);
        await expect(this.liveSoundPAlink).toExist();
        await this.clickSubmenuButtons(5);
        await expect(this.paSpeakersLink).toExist();
        await this.paSpeakersLink.click();
        await expect(this.paSpeakersHeader).toExist();
        await this.ToggleHamburgerMenu();
        await expect(this.shopBycategoryLink).toExist();
        await this.clickSubmenuButtons(0);
        await expect(this.liveSoundPAlink).toExist();
        await this.clickSubmenuButtons(5);
        await expect(this.liveSoundmixersLink)
        await this.MixersArrayClick(1);
        await expect(this.liveSoundmixersHeader).toExist();
        await this.ToggleHamburgerMenu();
        await expect(this.shopBycategoryLink).toExist();
        await this.clickSubmenuButtons(0);
        await expect(this.liveSoundPAlink).toExist();
        await this.clickSubmenuButtons(5);
        await expect(this.audioRecordersLink)
        await this.audioRecordersLink.click();
        await expect(this.audioRecordersHeader).toExist();
        await this.ToggleHamburgerMenu();
        await expect(this.shopBycategoryLink).toExist();
        await this.clickSubmenuButtons(0);
        await expect(this.liveSoundPAlink).toExist();
        await this.clickSubmenuButtons(5);
        await expect(this.lightingEffectsLink)
        await this.lightingEffectsLink.click();
        await expect(this.lightingEffectsHeader).toExist();
        await this.ToggleHamburgerMenu();
        await expect(this.shopBycategoryLink).toExist();
        await this.clickSubmenuButtons(0);
        await expect(this.liveSoundPAlink).toExist();
        await this.clickSubmenuButtons(5);
        await expect(this.soundNaccessLInk).toExist();
        await this.soundNaccessLInk.click();
        await expect(this.soundNaccessHeader).toExist();
        await this.ToggleHamburgerMenu();
        await expect(this.shopBycategoryLink).toExist();
        await this.clickSubmenuButtons(0);
        await expect(this.liveSoundPAlink).toExist();
        await this.clickSubmenuButtons(5);
        await expect(this.playersLink).toExist();
        await this.playersLink.click();
        await expect(this.playersHeader).toExist();
    }

    async GuitarsSubmenuButton () {
            await this.ToggleHamburgerMenu();
            await expect(this.shopBycategoryLink).toExist();
            await this.clickSubmenuButtons(0);
            await expect(this.guitarsLink).toExist();
            await this.guitarsLink.click();
            await expect(this.guitarsHeader).toExist();
            await this.ToggleHamburgerMenu();
            await expect(this.shopBycategoryLink).toExist();
            await this.clickSubmenuButtons(0);
            await expect(this.guitarsLink).toExist();
            await this.clickSubmenuButtons(6);
            await expect(this.guitarPedalsLink).toExist();
            await this.guitarPedalsLink.click();
            await expect(this.guitarPedalsHeader).toExist();
            await this.ToggleHamburgerMenu();
            await expect(this.shopBycategoryLink).toExist();
            await this.clickSubmenuButtons(0);
            await expect(this.guitarsLink).toExist();
            await this.clickSubmenuButtons(6);
            await expect(this.guitarAmpsLink).toExist();
            await this.guitarAmpsLink.click();
            await expect(this.guitarAmpsHeader).toExist();
            await this.ToggleHamburgerMenu();
            await expect(this.shopBycategoryLink).toExist();
            await this.clickSubmenuButtons(0);
            await expect(this.guitarsLink).toExist();
            await this.clickSubmenuButtons(6);
            await expect(this.guitarAccessLink).toExist();
            await this.guitarAccessLink.click();
            await expect(this.guitarAccessHeader).toExist();
    }

////////////////////////////////////////////////////////////////////////////////////
///////////////////// EXPLORE ALL BRANDS SUBMENU BUTTONS //////////////////////////
            ///////////////////////////////////////////////////////

    async ExpAllbrndsSubmenuButton () {
         await this.ToggleHamburgerMenu();
         await expect(this.exploreAllBrandslink).toExist();
         await this.clickSubmenuButtons(1);
         await expect(this.akaiProLink).toExist();
         await this.akaiProLink.click();
         await expect(this.akaiProHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.exploreAllBrandslink).toExist();
         await this.clickSubmenuButtons(1);
         await expect(this.alesisLink).toExist();
         await this.alesisLink.click();
         await expect(this.alesisHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.exploreAllBrandslink).toExist();
         await this.clickSubmenuButtons(1);
         await expect(this.altoProLink).toExist();
         await this.altoProLink.click();
         await expect(this.altoProHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.exploreAllBrandslink).toExist();
         await this.clickSubmenuButtons(1);
         await expect(this.denonDJlink).toExist();
         await this.denonDJlink.click();
         await expect(this.denonDJHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.exploreAllBrandslink).toExist();
         await this.clickSubmenuButtons(1);
         await expect(this.headrushLink).toExist();
         await this.headrushLink.click();
         await expect(this.headrushHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.exploreAllBrandslink).toExist();
         await this.clickSubmenuButtons(1);
         await expect(this.maudioLink).toExist();
         await this.maudioLink.click();
         await expect(this.maudioHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.exploreAllBrandslink).toExist();
         await this.clickSubmenuButtons(1);
         await expect(this.marantzProLink).toExist();
         await this.marantzProLink.click();
         await expect(this.marantzProHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.exploreAllBrandslink).toExist();
         await this.clickSubmenuButtons(1);
         await expect(this.numarkLink).toExist();
         await this.numarkLink.click();
         await expect(this.numarkHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.exploreAllBrandslink).toExist();
         await this.clickSubmenuButtons(1);
         await expect(this.raneLink).toExist();
         await this.raneLink.click();
         await expect(this.raneHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.exploreAllBrandslink).toExist();
         await this.clickSubmenuButtons(1);
         await expect(this.soundswitchLink).toExist();
         await this.soundswitchLink.click();
         await expect(this.soundswitchHeader).toExist();
         await this.ToggleHamburgerMenu();
         await expect(this.exploreAllBrandslink).toExist();
         await this.clickSubmenuButtons(1);
         await expect(this.stantonLink).toExist();
         await this.stantonLink.click();
         await expect(this.stantonHeader).toExist();
    }

///////////////////////////////////////////////////////////////////////////////////////
    async clickSubmenuButtons (index) {
        await browser.execute((i) => {
            const buttons = [...document.querySelectorAll('div[tabindex="0"]')];
            if (buttons[i]) buttons[i].click();
        }, index);
    }

    async GobackSubmenuButtons (index) {
        await browser.execute((i) => {
            const buttons = [...document.querySelectorAll('div[title="Left"]')];
            if (buttons[i]) buttons[i].click();
        }, index);
    }

    async ControllerArrayclick(index) {
        const elements = await $$('//span[contains(text(), "Controllers")]');
        if (elements.length > index) {
            await elements[index].click();
        } else {
            throw new Error(`No element found at index ${index}`);
        }
    }

    async AccessoriesArrayClick(index) {
        const elements = await $$('//span[contains(text(), " Accessories ")]');
        if (elements.length > index) {
            await elements[index].click();
        } else {
            throw new Error(`No accessories found at index ${index}`);
        }
    }

    async MixersArrayClick(index) {
        const elements = await $$('//h4/span[contains(text(), " Mixers ")]');
        if (elements.length > index) {
            await elements[index].click();
        } else {
            throw new Error(`No accessories found at index ${index}`);
        }
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////



    open () {
        return super.open('');
    }
}

export default new HamburgerMenu();
