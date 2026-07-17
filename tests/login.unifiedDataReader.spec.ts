import { test, expect } from "@playwright/test";

import { readData } from "../utils/dataReader";

const DATA_FILE = "./test-data/LoginData.csv";

const testData = readData (DATA_FILE,'user_info');

test.describe("Login Tests", () => {

    for(const user of  testData)
    {
    test(`Login -${user.email} `, async ({ page }) => {
      await page.goto("/");
      await page.getByRole("link", { name: "Sign in" }).click();
      await page.locator("#email").fill(user.email);
      await page.getByRole("textbox", { name: "Password" }).fill(user.password);
      await page.getByRole("button", { name: "Sign in" }).click();
      await expect(
        page.getByRole("link", { name: "Jatin Shharma" })
      ).toBeVisible();
    });


    }
  
  
});
