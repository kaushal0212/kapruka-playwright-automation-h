import { Page, Locator, expect } from "@playwright/test";
import { BasePage_SOLID } from "./BasePage_SOLID";

export class ScrollPage extends BasePage_SOLID {
  readonly bestSellingGifts: Locator;
  readonly popularSearch: Locator;
  constructor(page: Page) {
    super(page);
    this.bestSellingGifts = page.getByText("Gifts to Sri Lanka - Best Sellers",{ exact: true },
    );
    
    this.popularSearch = page.getByRole("heading", {
      name: "Popular Searches Today:",
      level: 3,
    });
  }

  async isLoaded(): Promise<void> {
    await expect(this.bestSellingGifts).toBeVisible();
  }

  async isLoadedPopularSearch(): Promise<void> {
    await expect(this.popularSearch).toBeVisible();
  }

  async scrollToBestSellingGifts(): Promise<void> {
    await this.scrollToElement(this.bestSellingGifts); // Option 1
    // await this.scrollDirectlyToElement(this.bestSellingGifts); // Option 2
  }

  async scrollToPopularSearch(): Promise<void> {
    await this.scrollToElement(this.popularSearch); //
    // await this.scrollDirectlyToElement(this.bestSellingGifts); // Option 2
  }
  async goto(): Promise<void> {
    await this.navigateTo("/");
   
  }
   async gotoEvent(): Promise<void> {
    
    await this.navigateTo("shops/events_home.jsp");
  }

  
}
