import {MainPage} from "../other-pages/main-page";
import { Locator, Page } from "@playwright/test";

export default class ProductSelectionPage extends MainPage{

    bathSection: Locator
    paintPolishSection: Locator

    constructor(public page: Page) {
        super(page)
        this.bathSection = page.locator("//ul[@id='main-nav-menu']/li[2]//li[@data-item-id=2]");
        this.paintPolishSection = page.locator("//ul[@id='main-nav-menu']/li[2]//li[@data-item-id=3]")
    }

    // async openBathSection(){
    //     await this.bathSection.hover()
    // }

    async hoverOnSection(section:Locator){
        await section.hover();
    }
}