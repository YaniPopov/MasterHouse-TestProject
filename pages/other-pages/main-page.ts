import { Locator, Page } from "@playwright/test";

export class MainPage {

myAccount: Locator;
products: Locator;

constructor(public page:Page){
    this.myAccount=page.locator("//a[@class='icon-before-user login']")
    this.products= page.locator("//ul[@id='main-nav-menu']/li[2]")
}

async openMyAccount():Promise<void>{
    await this.myAccount.click();
}

async openProductPage(){
    await this.products.click();
}
    
}