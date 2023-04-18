import { Locator, Page } from "@playwright/test";
import { MainPage } from "../other-pages/main-page";

export class Product extends MainPage {

    mainView: Locator
    addToCartButton: Locator
    enterQuantityInput: Locator
    productPreOrder: Locator

    constructor(public page: Page) {
        super(page);
        this.mainView = page.locator("#fb-root");
        this.addToCartButton = page.locator("//div[@class='buttons']//button[1]");
        this.enterQuantityInput = page.locator("//input[@type='number']");
        this.productPreOrder=page.locator("//a[@data-type='pre-order']")
    }


    async addToCart(quantity = 1) {
        if (quantity != 1) {
            this.enterQuantityInput.fill(quantity.toString())
        }
        await this.addToCartButton.click();
    }



}