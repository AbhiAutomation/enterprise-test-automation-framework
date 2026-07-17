import {test,expect} from '@playwright/test'

import { getUserData } from '../data/login-user.data';


test (' loginTest2 ',  async({page})=>{
  await page.goto('/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  const user =getUserData()
  await page.locator('#email').fill(user.email);
  await page.getByRole('textbox', { name: 'Password' }).fill(user.password);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('link', { name: 'Jatin Shharma' })).toBeVisible();


})

