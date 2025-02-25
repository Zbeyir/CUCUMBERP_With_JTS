import { Given, When, Then, setDefaultTimeout, Before, After, BeforeAll, AfterAll, Status, BeforeStep, AfterStep } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium, firefox } from "playwright";
import { expect } from "@playwright/test";
import dotenv from "dotenv";

setDefaultTimeout(1000 * 60 * 2);

let browser: Browser;
let bCtx: BrowserContext;
let page: Page;

BeforeAll(async function () {

    dotenv.config({
        path: `${process.cwd()}/config/.env.${process.env.environment ?? 'qa'}`
    });

    let browserType = process.env.browser ?? "chrome";

    switch (browserType) {
        case 'chrome':
        case 'gc':
            browser = await chromium.launch({ headless: false, channel: "chrome", args: ['--start-maximized'] });
            break;
        case 'firefox':
        case 'ff':
            browser = await firefox.launch({ headless: false, args: ['--start-maximized'] });
            break;
        case 'edge':
        case 'msedge':
            browser = await chromium.launch({ headless: false, channel: "msedge", args: ['--start-maximized'] });
            break;
        default:
            throw new Error(`invalid browser type ${browserType} is passed..! pls correct it.`);
    }
    
});

Before(async function (scenario) {
    bCtx = await browser.newContext({ viewport: null, javaScriptEnabled: true });
    page = await bCtx.newPage();
    this.attach(`----------------- ${scenario.pickle.name} is started.............!`);
    await page.goto(process.env.app_url!);
});

After(async function (scenario) {
    this.attach(`----------------- ${scenario.pickle.name} is ended.............!`);
    this.attach(`SCENARIO STATUS IS >>>>>>>>>> ${scenario.result?.status} >>>>>>`);
    if (scenario.result?.status == Status.FAILED) {

        // this.attach('this is a sample text of string');

        // const obj = {
        //     fname: "equality",
        //     lname: "tech",
        //     zip: 500000
        // }
        // this.attach(JSON.stringify(obj), 'application/json');

        // this.attach(`i am taking screenshot....!`);

        const img = await page.screenshot({
            path: `./reports/${scenario.pickle.name}.png`
        });

        this.attach(img, 'image/png');
        
    }

    await page.close();
    await bCtx.close();
});

BeforeStep(async function (scenario) {
    this.attach(`----------------- ${scenario.pickleStep.text} is started.............!`);
});

AfterStep(async function (scenario) {
    this.attach(`----------------- ${scenario.pickleStep.text} is ended.............!`);
});

AfterAll(async function () {
    await browser.close();
});

export function getPage(): Page {
    return page;
}

//export {page};