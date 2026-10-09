import {test,expect} from '@playwright/test'
import { CurrencyPage } from '../pages/CurrencyPage';

test.describe('kapruka currency dropdown',()=>    {

test.skip('Switch from GBP to USD',async({page})=>
{
    const currencyPage = new CurrencyPage(page);
    // await page.pause()
    await currencyPage.goto();
    await page.pause()
    await currencyPage.isLoaded()
     
    await currencyPage.selectCurrency('USD')
    await currencyPage.verifyCurrency('USD')
    

})

})