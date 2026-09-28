import { test, expect } from '@playwright/test';
import { LoginPage_SOLID } from '../../pages/LoginPage_SOLID';
import dotenv from 'dotenv';

//process → Node.js global object.
//process.env → contains environment variables.

const TEST_EMAIL=process.env.TEST_EMAIL;
const TEST_PASSWORD=process.env.TEST_PASSWORD;

//We use this as an early validation to make sure
//  the email and password were actually loaded before starting the test.
//If TEST_EMAIL is missing OR TEST_PASSWORD is missing → stop execution and show a clear error.
//to set run command 

if (!TEST_EMAIL || !TEST_PASSWORD) {
  throw new Error('TEST_EMAIL and TEST_PASSWORD must be set');
}

test.describe("Kapruka Login Test", ()=>{

    test.skip('valid user should login successfully', async ({page})=>{
        const loginPage = new LoginPage_SOLID( page)
        await loginPage.goto();
        await loginPage.isLoaded()
        await loginPage.login(TEST_EMAIL, TEST_PASSWORD);
        


    
    })

    test("google web page",async ({page})=>{
        await page.goto("https://www.google.com/")
    })
})