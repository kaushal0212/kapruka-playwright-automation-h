import {test, expect} from '@playwright/test';
import { ScrollPage } from '../../pages/ScrollPage';

test.describe('Kapruka Scroll to event', ()=>{
    test('Scroll to Search', async ({page}) =>{
        const scrollPage = new ScrollPage(page);
        await scrollPage.goto();
        await scrollPage.scrollToBestSellingGifts()
        await scrollPage.isLoaded()

})

 test('Scroll to popular Search', async ({page}) =>{
        const scrollPage = new ScrollPage(page);
        await scrollPage.gotoEvent();
        await scrollPage.scrollToPopularSearch()
        await scrollPage.isLoadedPopularSearch()
      
})
})
