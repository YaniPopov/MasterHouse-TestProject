import test, { expect } from "@playwright/test";
import {MainPage} from "../../pages/other-pages/main-page";
import ProductPage from "../../pages/product-pages/product-page";
import FaceBookloginPage from "../../pages/register-login/facebook-login-page";
import WelcomePage from "../../pages/register-login/welcome-page";

test.beforeEach(async ({ page }) => {
    await page.goto('/');
})

test.describe('Main navigation', () => {
    test('Open My Account page', async ({page}) => {
        const mainPage = new MainPage(page);
        const welcomePage = new WelcomePage(page);
        await mainPage.openMyAccount();
        await expect(welcomePage.email).toBeVisible();
        await expect(page).toHaveURL('/bg/profile/login');
    })

    test('Open Products', async ({page}) => {
        const mainPage = new MainPage(page);
        const productPage = new ProductPage(page);
        await mainPage.openProductPage();
        await expect(productPage.bathSection).toBeVisible();
    })
    

})