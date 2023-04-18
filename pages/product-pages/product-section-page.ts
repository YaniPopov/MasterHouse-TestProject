import { MainPage } from "../other-pages/main-page";
import { Locator, Page } from "@playwright/test";
import { CommonWrapper } from "../../utils/common-wrapper";

export default class ProductSectionPage extends MainPage {

    bathSection: Locator
    paintPolishSection: Locator
    productSectionList: Locator
    productGrid: Locator

    constructor(public page: Page) {
        super(page)
        this.bathSection = page.locator("//ul[@id='main-nav-menu']/li[2]//li[@data-item-id=2]");
        this.paintPolishSection = page.locator("//ul[@id='main-nav-menu']/li[2]//li[@data-item-id=3]")
        this.productSectionList = page.locator("//ul[@id='main-nav-menu']/li[2]//li[@data-item-id]");
        this.productGrid = page.locator("//div[@id='list-wrapper']")
    }

    // async openBathSection(){
    //     await this.bathSection.hover()
    // }

    async hoverOnSection(section: Locator) {
        await section.hover();
    }
    async hoverOnRandomSection(sectinList: Locator): Promise<Locator> {
        let subItems: Locator[] = [];

        while (subItems.length < 2) {
            subItems = await sectinList.all();
        }
        let randItem = CommonWrapper.randomInteger(0, subItems.length - 1)
        await subItems[randItem].hover();
        return subItems[randItem];
    }


    async openRandProductItem(parentSection: Locator, locator?: string): Promise<Locator> {
        let subItems: Locator[] = [];

        while (subItems.length < 2) {
            if (locator) {
                subItems = await parentSection.locator(locator).all();
            }
            else {
                subItems = await parentSection.all();
            }
        }
        let randItem = CommonWrapper.randomInteger(0, subItems.length - 1)
        await subItems[randItem].click();
        return subItems[randItem];
    }
}