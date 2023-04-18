import { test, expect, Locator } from '@playwright/test'
import { MainPage } from '../../pages/other-pages/main-page';
import { Product } from '../../pages/product-pages/product';
import ProductSectionPage from '../../pages/product-pages/product-section-page';
import { CommonWrapper } from '../../utils/common-wrapper';


test.beforeEach(async ({ page }) => {
    await page.goto('/');
})

test.describe('Add products to cart', () => {

    test.only('testtest', async ({ page }) => {
        const mainPage = new MainPage(page);
        const product = new Product(page);
        const productSection = new ProductSectionPage(page);
        await mainPage.openProductPage();


        //Select random section from the main product section list
        let menuItem = await productSection.hoverOnRandomSection(productSection.productSectionList);
        //await page.waitForTimeout(5000);

        //open random product category
        let productCategory = await productSection.openRandProductItem(menuItem, "//a");

        //go deepr in sub-categories until product is reached
        let productOnPage = await CommonWrapper.waitForElementToBeVisible(product.enterQuantityInput);

        while (!productOnPage) {
            let productSubCatselection = await productSection.openRandProductItem(productSection.productGrid, "//a");
            //await page.waitForTimeout(2000);
            productOnPage = await CommonWrapper.waitForElementToBeVisible(product.enterQuantityInput)
        }


        //when product is reached it must be added to the cart
        product.addToCart(2);
        await page.waitForTimeout(5000);



    })



})

























