import { Page, Locator, expect } from "@playwright/test";
import { BasePage_SOLID } from "./BasePage_SOLID";
import { config } from "../config/environment";

export class CurrencyPage extends BasePage_SOLID {
  readonly currencyDropDown: Locator;
  //readonly selectCurrency: Locator;

  constructor(page: Page) {
    super(page);
    this.currencyDropDown = page.getByRole("combobox", {name:"Select Currency",exact:true});
  }

  async selectCurrency(currency: 'GBP'|'USD') :Promise<void>{
    await this.currencyDropDown.waitFor({state:'visible'});
    await Promise.all([this.page.waitForLoadState('load'),
        this.currencyDropDown.selectOption({label: currency})
    ])
  }

  async verifyCurrency(expected:string):Promise<void>{
    await expect(this.currencyDropDown).toHaveValue(expected)
  }
  async goto(): Promise<void> {
    await this.navigateTo(`/`);
  }
  async isLoaded(): Promise<void> {
    await expect(this.currencyDropDown).toBeVisible();
    await expect(this.currencyDropDown).toHaveText(["GBP", "USD"]);
  }
}
