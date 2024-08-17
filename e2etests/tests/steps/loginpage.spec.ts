import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber";
//import { chromium, Browser, BrowserContext, Page } from 'playwright'; // artik bunu buraad kullanmiyoruz
import { expect } from "@playwright/test";
import { getPage } from "../../corelib/corlieb.spec"; // ve bunu import ettik
import  LoginPage  from "../pages/loginpage";

let loginpage:LoginPage;



 //setDefaultTimeout(1000*60*2);





 let loginPage:LoginPage;

 Given('User is on login page', async function () {
     this.attach('this is start if user is on loging page step.....!');
     loginPage=new LoginPage(getPage(), this.attach);
     await loginPage.gotoLoginPage();
     this.attach('login is successfull');    
     this.parameters.a=10;
 });
 
 When('User enter login details', async function () {
     await loginPage.loginToApp();
     this.attach('logout is successfull')
 });
 
 When('Logout should be successfull', async function () {
     console.log('Logout is success');
     console.log(`login page: value is ${this.parameters.a}`);
 });
 
 Then('This is a dummy step to fail',  async function () {
     expect(1).toBe(2);
 });
  