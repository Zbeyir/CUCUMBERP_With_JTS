import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
//import { chromium, Browser, BrowserContext, Page } from 'playwright'; // artik bunu buraad kullanmiyoruz
import { expect } from "@playwright/test";
import { getPage } from "../../corelib/corlieb.spec"; // ve bunu import ettik
import LoginPage from "../pages/loginpage";
import HomePage from "../pages/homepage";

let homePage:HomePage;
let loginPage:LoginPage;

let loginpage:LoginPage;

//setDefaultTimeout(1000*60*2);

Then('Home page should be displayed', async function () {
  homePage=new HomePage(getPage(), this.attach);
  await homePage.waitForEditAcInfo();
  console.log(`home page: value is ${this.parameters.a}`);
});

When('Upon logout', async function () {
  loginPage=new LoginPage(getPage(), this.attach);
  await loginPage.logout();
  this.attach(`logout is done....!`);
  console.log(`home page: value is ${this.parameters.a}`);
});

