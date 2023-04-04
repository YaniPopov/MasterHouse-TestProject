import { Locator, Page } from "@playwright/test";
import {MainPage} from "../other-pages/main-page";
import { ExternalLoginPopup } from "./enum-external-popup";
import FaceBookloginPage from "./facebook-login-page";
import { GoogleLoginPage } from "./google-login-page";
export default class WelcomePage extends MainPage {

    email: Locator;
    continueButton: Locator;
    invalidEmailMessage: Locator;
    loginFacebook: Locator;
    loginGoogle: Locator;
    //waitForevent;
    facebookLoginPage!: FaceBookloginPage;

    constructor(public page: Page) {
        super(page)
        this.email = page.locator("#useremail");
        this.continueButton = page.locator("button[type='submit']");
        this.invalidEmailMessage = page.locator("//input[@id='useremail']/following-sibling::em[1]")
        this.loginFacebook = page.locator("//a[@class='icon-before-facebook facebook']");
        this.loginGoogle = page.locator("//a[@class='google']");
        //this.waitForevent = page.waitForEvent('popup');
    }

    async enterMail(email: string): Promise<void> {
        await this.email.type(email)
    }

    async pressLoginWithFacebookButton() {
        await this.loginFacebook.click();
    }

    async pressLoginWithgoogleButton() {
        await this.loginGoogle.click();
    }


    async pressContinueButton(): Promise<void> {
        await this.continueButton.click()
    }

    async openExternalLoginWindow(exteranlLoginType:ExternalLoginPopup){
        await this.page.waitForLoadState('domcontentloaded')
        const logPopup = this.page.waitForEvent('popup');
        switch (exteranlLoginType){
            case ExternalLoginPopup.Facebook:
                await this.loginFacebook.click();
                const popupF = await logPopup;
                return new FaceBookloginPage(popupF)
            case ExternalLoginPopup.Google: 
                await this.loginGoogle.click();
                const popupG = await logPopup;
                return new GoogleLoginPage(popupG)
        }
        
    }
}