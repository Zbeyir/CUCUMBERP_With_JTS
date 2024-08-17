import { Page } from "playwright";
import * as loginPageLoc from "../locators/loginpageloc.json";
import BasePage from "../pages/basepage";
import { ICreateAttachment, ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager";

export default class LoginPage extends BasePage {

    constructor(page: Page, log:ICreateAttachment) {
        super(page, log);
    }

    async gotoLoginPage(){
        await this.page.locator(loginPageLoc.loginLink.locator, loginPageLoc.loginLink.locatorOptions).click(loginPageLoc.loginLink.actOptions);
    }

    async loginToApp() {
        this.log('i am about to login.....!')
        await this.enter(loginPageLoc.emailField, process.env.user_name!);
        await this.enter(loginPageLoc.passwordField, process.env.password!);
        await this.click(loginPageLoc.loginBtn);        
    }

    async logout(){
        await this.click(loginPageLoc.logoutLink);
        await this.click(loginPageLoc.continueBtn,true);
    }

}