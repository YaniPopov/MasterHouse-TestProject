import { test, expect, Locator } from '@playwright/test'
import { MainPage } from '../../pages/other-pages/main-page';
import ProductPage from '../../pages/product-pages/product-page';
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
        const productPage = new ProductPage(page);
        await mainPage.openProductPage();
        await productPage.hoverOnSection(productPage.bathSection);
        //await page.waitForTimeout(5000);
        let subItems: Locator[] = [];
        while (subItems.length < 2) {
            subItems = await productPage.bathSection.locator("//a").all();
        }

        for (let i = 0; i < subItems.length; i++) {
            let itemLink = await subItems[i].getAttribute('href');
            let itemText = await subItems[i].getAttribute('title');
            let isHidden = await subItems[i].isHidden()
            if (!isHidden) {
                await subItems[i].click()
                if (itemLink == null) {
                    console.log("Element " + itemText + " of section " + productPage.bathSection.getAttribute('title') +
                        "has null href!")
                } else {
                    await expect(itemText).toEqual(data[i][0])
                    await expect(page).toHaveURL(data[i][1]);

                }

                await mainPage.openProductPage();
                //await productPage.bathSection.hover();
                await productPage.hoverOnSection(productPage.paintPolishSection);
            }
        }

    })

    test('Open Paint and Polish section of product page', async ({ page }) => {
        let data = await CommonWrapper.readCSVFile("./resources/ProductsPaintPolish.txt");
        const mainPage = new MainPage(page);
        const productPage = new ProductPage(page);
        await mainPage.openProductPage();
        await productPage.hoverOnSection(productPage.paintPolishSection);
        //await page.waitForTimeout(5000);
        let subItems: Locator[] = [];
        while (subItems.length < 2) {
            subItems = await productPage.paintPolishSection.locator("//a").all();
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
                await productPage.hoverOnSection(productPage.paintPolishSection);
            }
        }
    })

    test.only('testtest', async ({ page }) => {
        const mainPage = new MainPage(page);
        const productPage = new ProductPage(page);
        await mainPage.openProductPage();
        const productsMainSection = await page.locator("//ul[@id='main-nav-menu']/li[2]//li[@data-item-id]").all();
        let randSection = CommonWrapper.randomInteger(0,10)
        await productsMainSection[randSection].hover();
        await page.waitForTimeout(5000);
        let subItems: Locator[] = [];
            while (subItems.length < 2) {
                subItems = await productsMainSection[randSection].locator("//a").all();
            }
        let randSubitem = CommonWrapper.randomInteger(0,subItems.length-1)
        await subItems[randSubitem].click();
        await page.waitForTimeout(5000);
        
        let subMenuItems: Locator[] = [];
            while (subMenuItems.length < 2) {
                subMenuItems = await page.locator("//div[@id='list-wrapper']//a").all();
            }
        let randSuMenuItem = CommonWrapper.randomInteger(0,subMenuItems.length-1);
        await subMenuItems[randSuMenuItem].click();

        let items: Locator[] = [];
        while (items.length < 2) {
            items = await page.locator("//div[@id='list-wrapper']//a").all();
        }
        let randItem = CommonWrapper.randomInteger(0,items.length-1);
        await items[randItem].click()
        await page.waitForTimeout(5000);

    })


})