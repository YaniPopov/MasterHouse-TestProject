import { test, expect, Locator } from '@playwright/test'
import { MainPage } from '../../pages/other-pages/main-page';
import { Product } from '../../pages/product-pages/product';
import ProductSectionPage from '../../pages/product-pages/product-section-page';
import { CommonWrapper } from '../../utils/common-wrapper';


test.beforeEach(async ({ page }) => {
    await page.goto('/');
})

test.describe('Products section', () => {
    // test('Get the names of all elements', async ({ page }) => {
    //     const mainPage = new MainPage(page);
    //     const productPage = new ProductPage(page);
    //     await mainPage.openProductPage();
    //     const productsMainSection = await page.locator("//ul[@id='main-nav-menu']/li[2]//li[@data-item-id]").all();
    //     for (let index = 0; index < productsMainSection.length; index++) {
    //         await productsMainSection[index].hover();
    //         let subItems: Locator[] = [];
    //         while (subItems.length < 2) {
    //             subItems = await productsMainSection[index].locator("//a").all();
    //         }
    //         for (let i = 0; i < subItems.length; i++) {
    //             let itemLink = await subItems[i].getAttribute('href');
    //             let itemText = await subItems[i].getAttribute('title');
    //             let isHidden = await subItems[i].isHidden()
    //             if (!isHidden) {
    //                 await subItems[i].click()
    //                 if (itemLink == null) {
    //                     console.log("Element " + itemText + " of section " + productsMainSection[index].getAttribute('title') +
    //                         "has null href!")
    //                 } else {
    //                     console.log(itemText + "\t" + itemLink)
    //                 }
    //                 await mainPage.openProductPage();
    //                 await productsMainSection[index].hover();
    //             }
    //         }
    //         console.log("")
    //         // const itemText = await productsMainSection[index].textContent();
    //         // console.log(itemText?.split("\n", 2)[1]);
    //     }
    // })
    test('Open each link of bathroom product section, check URL and product page title', async ({ page }) => {

        let data = await CommonWrapper.readCSVFile("./resources/ProductsBathroom.txt");
        const mainPage = new MainPage(page);
        const productSectionPage = new ProductSectionPage(page);
        await mainPage.openProductPage();
        await productSectionPage.hoverOnSection(productSectionPage.bathSection);
        //await page.waitForTimeout(5000);
        let subItems: Locator[] = [];
        while (subItems.length < 2) {
            subItems = await productSectionPage.bathSection.locator("//a").all();
        }

        for (let i = 0; i < subItems.length; i++) {
            let itemLink = await subItems[i].getAttribute('href');
            let itemText = await subItems[i].getAttribute('title');
            let isHidden = await subItems[i].isHidden()
            if (!isHidden) {
                await subItems[i].click()
                if (itemLink == null) {
                    console.log("Element " + itemText + " of section " + productSectionPage.bathSection.getAttribute('title') +
                        "has null href!")
                } else {
                    await expect(itemText).toEqual(data[i][0])
                    await expect(page).toHaveURL(data[i][1]);

                }

                await mainPage.openProductPage();
                //await productPage.bathSection.hover();
                await productSectionPage.hoverOnSection(productSectionPage.paintPolishSection);
            }
        }

    })

    test('Open Paint and Polish section of product page', async ({ page }) => {
        let data = await CommonWrapper.readCSVFile("./resources/ProductsPaintPolish.txt");
        const mainPage = new MainPage(page);
        const productSectionPage = new ProductSectionPage(page);
        await mainPage.openProductPage();
        await productSectionPage.hoverOnSection(productSectionPage.paintPolishSection);
        //await page.waitForTimeout(5000);
        let subItems: Locator[] = [];
        while (subItems.length < 2) {
            subItems = await productSectionPage.paintPolishSection.locator("//a").all();
        }

        for (let i = 0; i < subItems.length; i++) {
            // let itemLink = await subItems[i].getAttribute('href');
            let itemText = await subItems[i].getAttribute('title');
            let isHidden = await subItems[i].isHidden()
            if (!isHidden) {
                await subItems[i].click()
                // if (itemLink == null) {
                //     console.log("Element " + itemText + " of section " + productPage.paintPolishSection.getAttribute('title') +
                //         "has null href!")
                // } else {
                await expect(itemText).toEqual(data[i][0])
                await expect(page).toHaveURL(data[i][1]);

                // }

                await mainPage.openProductPage();
                await productSectionPage.hoverOnSection(productSectionPage.paintPolishSection);
            }
        }
    })

   


})