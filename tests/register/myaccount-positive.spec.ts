import test, { expect } from "@playwright/test";
import {MainPage} from "../../pages/other-pages/main-page";
import { ExternalLoginPopup } from "../../pages/register-login/enum-external-popup";
import FaceBookloginPage from "../../pages/register-login/facebook-login-page";
import WelcomePage from "../../pages/register-login/welcome-page";

test.beforeEach(async ({ page }) => {
    await page.goto('/bg/profile/login');
    //await page.goto('/bg/profile/login', { waitUntil: 'networkidle' }); Check performance with this one. Noticed
    //tests are a bit slower. Make a small research
})

test.describe('Facebook login popup opens', () => {

    test('Login with FaceBook widnow opens', async ({ page }) => {
        const welcomePage = new WelcomePage(page);
        //const facebookPage = await welcomePage.openloginWithfacebookWindow();
        const facebookPage = await welcomePage.openExternalLoginWindow(ExternalLoginPopup.Facebook)
        await expect((facebookPage as FaceBookloginPage).email).toBeVisible();

    })

    test('Proceed to login in FaceBook login window', async ({ page }) => {
        const welcomePage = new WelcomePage(page);
        //const facebookPage = await welcomePage.openloginWithfacebookWindow();
        const facebookPage = await welcomePage.openExternalLoginWindow(ExternalLoginPopup.Facebook)
        if (facebookPage instanceof FaceBookloginPage) {
            await facebookPage.pressAcceptEssentialsCookiesButton();
            await facebookPage.enterEmail("MailMail");
            await facebookPage.enterPass("PassPass")
            await facebookPage.pressLoginButton();
        }
        //TODO

    })

    test('Login with Google window opens', async ({ page }) => {
        const welcomePage = new WelcomePage(page);
        //const googlePage = await welcomePage.openLoginWithGoogleWindow();
        const googlePage = await welcomePage.openExternalLoginWindow(ExternalLoginPopup.Google)
        expect(googlePage.page.url()).toContain('https://accounts.google.com/');
    })
})