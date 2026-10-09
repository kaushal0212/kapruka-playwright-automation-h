
import{test,expect} from '@playwright/test';
import path from 'path';
test.describe('Different Screenshot generation', ()=>{
//Basic screen shot
test('Basic screenshot png',async ({page})=>
{
    await page.goto('https://playwright.dev');
    await page.screenshot({path:'screenshots/basicpng.png'})
});
//Fullpage screenshot
test('full Basic screenshot png',async ({page})=>
{
    await page.goto('https://playwright.dev');
    await page.screenshot({path:'screenshots/fullpage.png',
        fullPage:true})

})
test('Basic screenshot jpg',async ({page})=>
{
    await page.goto('https://playwright.dev');
    await page.screenshot({path:'screenshots/basicjpg.jpg',
        type:'jpeg',
        quality:80 }) // 1-100

})
test('Omited(transpatent) background screenshot',async ({page})=>
{
    await page.goto('https://playwright.dev');
    await page.screenshot({path:'screenshots/transparentScreenshot.png',
       omitBackground:true,
    fullPage:true})

})

 test('clipped screenshot',async({page})=>
 {
    await page.goto('https://playwright.dev');
    await page.screenshot({path:'screenshots/clipScreenshot.png',
        clip:{x:0,y:0,width:800,height:600
        }
      })

})
test('Buffer storage screenshot ',async ({page})=>{
    await page.goto('https://playwright.dev/');
    const buffer=await page.screenshot();
    expect(buffer).toBeInstanceOf(Buffer)
    expect(buffer.length).toBeGreaterThan(0)

})
test('Locator screenshot ',async ({page})=>{
    await page.goto('https://playwright.dev/');
    const locator=await page.getByRole('link', { name: 'Docs' }).screenshot({path:'screenshots/locatorScreenshot.png'});
    
})
});