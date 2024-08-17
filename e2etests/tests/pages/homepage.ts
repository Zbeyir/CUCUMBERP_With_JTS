
import { Page } from "playwright";
import { expect } from "playwright/test";
import * as homePageLoc from "../locators/homepageloc.json";

import BasePage from "../pages/basepage";
import { ICreateAttachment, ICreateLog } from "@cucumber/cucumber/lib/runtime/attachment_manager";

export default class HomePage extends BasePage{

    constructor(page:Page, log:ICreateAttachment) {
        super(page, log)
    }

    async waitForEditAcInfo(){
        await this.page.locator(homePageLoc.EditAcLink.locator).waitFor(homePageLoc.EditAcLink.actionOptons);
        expect(this.page.locator(homePageLoc.EditAcLink.locator)).toBeVisible();
    }

}
