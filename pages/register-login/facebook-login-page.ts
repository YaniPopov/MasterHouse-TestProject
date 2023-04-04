import { Locator, Page } from "@playwright/test";
import {MainPage} from "../other-pages/main-page";
export default class FaceBookloginPage extends MainPage {

    acceptEssentialsCookiesButton: Locator
    email: Locator
    password: Locator
    loginButton: Locator

    constructor(public page: Page) {
        super(page);
        this.acceptEssentialsCookiesButton = page.locator("//button[@data-cookiebanner='accept_only_essential_button']");
        this.email = page.locator("#email");
        this.password = page.locator("#pass");
        //strong[text()='Two-Factor Authentication Required']
        this.loginButton = page.locator("//input[@value='Log In']")
    }

    // async pressAcceptEssentialsCookiesButton(page:Page){
    //     await page.locator("//button[@data-cookiebanner='accept_only_essential_button']").click();
    // }

    // async enterEmail(page:Page, email:string){
    //     await page.locator("#email").type(email);
    // }
    // async enterPass(page:Page, pass:string){
    //     await page.locator("#pass").type(pass);
    // }

    async pressAcceptEssentialsCookiesButton() {
        await this.acceptEssentialsCookiesButton.click();
    }

    async enterEmail(email: string) {
        await this.email.type(email)
    }

    async enterPass(pass: string) {
         await this.password.type(pass)
    }
    async pressLoginButton() {
           await this.loginButton.click()
        

        
    }

}