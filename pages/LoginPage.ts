import { Page, Locator } from "@playwright/test";
export class LoginPage {
  page: Page;

  signInLinkLocator: Locator;
  emailTextBoxLocator: Locator;
  passwordTextBoxLocator: Locator;
  signInButtonLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    ( this.signInLinkLocator = page.getByRole("link", { name: "Sign in" })),
      this.emailTextBoxLocator =  page.locator('#email'),
      this.passwordTextBoxLocator =page.getByRole('textbox', { name: 'Password' }),
      this.signInButtonLocator =  page.getByRole('button', { name: 'Sign in' })
  }

  async goto() {
    console.log("Navigating...");
    await this.page.goto('/');
    console.log("Navigation completed");
  }

  async doLoginWith(emailAdress: string, password: string) {
    await this.signInLinkLocator.click()
    await this.emailTextBoxLocator.fill(emailAdress)
    await this.passwordTextBoxLocator.fill(password)
    await this.signInButtonLocator.click()
  }
}
