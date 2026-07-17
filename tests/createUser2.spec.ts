import { test, expect } from '@playwright/test';
import { createFakeCutomerData } from '../data/customerinfo.data';

test('Create Account test ', async ({ page }) => {
  await page.goto('https://automationpractice.techwithjatin.com/');
  await expect(page.getByRole('link', { name: 'Automation Practice' })).toBeVisible();

  await page.getByRole('link', { name: 'Sign in' }).click();
  await expect(page.getByRole('link', { name: 'Automation Practice' })).toBeVisible();
  
  await page.locator('#email_create').fill(createFakeCutomerData().email);
  await page.getByRole('button', { name: ' Create an account' }).click();
  await expect(page.getByRole('heading', { name: 'Your personal information' })).toBeVisible();

  await page.getByRole('radio', { name: 'Mr.' }).check();
  await page.getByRole('textbox', { name: 'First name *' }).click();
  await page.getByRole('textbox', { name: 'First name *' }).fill(createFakeCutomerData().firstName);
  await page.getByRole('textbox', { name: 'Last name *' }).fill(createFakeCutomerData().lastName);

  await page.getByRole('textbox', { name: 'Password *' }).fill(createFakeCutomerData().password);
  await page.locator('#days').selectOption('14');
  await page.locator('#months').selectOption('2');
  await page.locator('#years').selectOption('1990');
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  await page.locator('#years').selectOption('2025');
  await page.getByRole('button', { name: 'Register ' }).click();
  await expect(page.getByRole('link', { name: 'Automation Practice' })).toBeVisible();

  await page.getByText('Your account has been created.').click();
  await expect(page.getByText('Your account has been created.')).toBeVisible();
});