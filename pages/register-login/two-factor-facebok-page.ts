import { Page } from "@playwright/test";


export class TwoFactorFacebookAuthPage {

    
    constructor(public page:Page){
        this.page = page;
    }
}