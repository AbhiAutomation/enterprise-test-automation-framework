import { test, expect } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";
import { readData } from "../utils/dataReader";

const DATA_FILE = "./test-data/LoginDataNew.json";

const testData = readData(DATA_FILE) as Array<{
  email: string;
  password: string;
  expected: string;
}>;

test.describe("Login tests using LoginPage", () => {
  for (const user of testData) {
    test(`validates login for ${user.email}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.doLoginWith(user.email, user.password);

      if (user.expected === "Success") {
        await expect(
          page.getByRole("link", { name: "Jatin Shharma" })
        ).toBeVisible();
      } else {
        const errorMessage = page.locator("div.alert.alert-danger li");
        await expect(errorMessage).toHaveText("Authentication failed.");
      }
    });
  }
});
