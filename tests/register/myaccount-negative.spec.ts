import { test, expect, type Page } from '@playwright/test';
import {MainPage} from '../../pages/other-pages/main-page';
import RegisterPage from '../../pages/register-login/register-page';
import WelcomePage from '../../pages/register-login/welcome-page';

test.beforeEach(async ({ page }) => {
    await page.goto('/bg/profile/login');

})

test.describe('Negative tests for register page', () => {

    test('Do not enter email in welcome page', async ({ page }) => {
        const welcomePage = new WelcomePage(page);
        await welcomePage.pressContinueButton();
        expect(await welcomePage.invalidEmailMessage.textContent()).toEqual('Невалиден e-mail');

    })

    test('Enter invalid email', async ({ page }) => {
        const welcomePage = new WelcomePage(page);
        await welcomePage.enterMail('asd@asdafa');
        await welcomePage.pressContinueButton();
        expect(await welcomePage.invalidEmailMessage.textContent()).toEqual('Невалиден e-mail');
    })
    
})

