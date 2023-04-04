import { Locator, Page } from "@playwright/test";
import {MainPage} from "../other-pages/main-page";
export default class RegisterPage extends MainPage {


    firstName: Locator;
    lastName: Locator;
    password: Locator;
    confirmPassword: Locator;
    termsAndConditionsCheckbox: Locator;
    firstNameCantBeEmpty: Locator;
    lastNameCantBeEmpty: Locator;
    emailCantBeEmpty: Locator;
    registerButton:Locator

    constructor(public page: Page) {
        super(page)
        this.firstName = page.locator("#first_name");
        this.lastName = page.locator("#last_name");
        this.password = page.locator("#userpass");
        this.confirmPassword = page.locator("#userpass_confirmation");
        //this.termsAndConditionsCheckbox = page.locator("#terms_and_conditions");
        this.termsAndConditionsCheckbox = page.locator("//input[@id='terms_and_conditions']/following-sibling::span[1]")
        this.firstNameCantBeEmpty = page.locator("//input[@id='first_name']/following-sibling::em[1]");
        this.lastNameCantBeEmpty = page.locator("//input[@id='last_name']/following-sibling::em[1]");
        this.registerButton = page.locator("//button[@type='submit']");
        this.emailCantBeEmpty = page.locator("//input[@id='email']/following-sibling::em[1]")
    }




    async enterFirstName(firstName: string) {
        await this.firstName.type(firstName)
    }

    async enterLastName(lastName: string) {
        await this.lastName.type(lastName)
    }

    async enterPassword(password: string) {
        await this.password.type(password)
    }

    async enterConfirmPassword(confirmPassword: string) {
        await this.confirmPassword.type(confirmPassword)
    }

    async checkTermsAndConditions() {
        await this.termsAndConditionsCheckbox.check()
    }

    async pressRegisterBuuton(){
        await this.registerButton.click();
    }




}