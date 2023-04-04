import test, { expect } from "@playwright/test";
import RegisterPage from "../../pages/register-login/register-page";

test.beforeEach(async ({ page }) => {
    await page.goto('/bg/profile/registration');
})

test.describe('Register neative scenarios', () => {

    test('Open My Account page', async ({ page }) => {
        const registerPage = new RegisterPage(page)
        await registerPage.checkTermsAndConditions();
        await registerPage.pressRegisterBuuton();
        expect(await registerPage.firstNameCantBeEmpty.textContent()).toEqual("Не може да е празно");
        expect(await registerPage.lastNameCantBeEmpty.textContent()).toEqual("Не може да е празно");
        expect(await registerPage.emailCantBeEmpty.textContent()).toEqual("Не може да е празно");
        const color = await registerPage.termsAndConditionsCheckbox.evaluate((e) => {
            return window.getComputedStyle(e).getPropertyValue("border-color")
        })
        const hexColor = rgbToHex(color.toString())
        expect(hexColor).toEqual("da2720");


    })


})

function rgbToHex(color:string){
    const colorSplit = color.split("(")[1].split(")")[0];
    const a = colorSplit.split(",")
    var b = a.map(function(x){             //For each array element
        x = parseInt(x).toString(16);      //Convert to a base16 string
        return (x.length==1) ? "0"+x : x;  //Add zero if we get only one character
        
    })
    
    const c = b.join("");
    
    return c;
}