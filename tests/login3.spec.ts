import {test,expect} from '@playwright/test'

import { getUserData } from '../data/login-user.data';
import { LoginPage } from '../pages/LoginPage';


test (' loginTest3 ',  async({page})=>{
  const userdata= getUserData();
  const loginPage = new LoginPage(page);
 
  await  loginPage.goto();
  await  loginPage.doLoginWith(userdata.email,userdata.password);
 await expect(page.getByRole('link', { name: 'Jatin Shharma' })).toBeVisible();


})

