import BasePage from "./BasePage.js";
import {LOGIN_ID, TOOL_CARDS, PASS_XPATH,BUTTON_SIGIN, BUTTON_TOOL_USER,BUTTON_TOOL_ADMIN, MENU_LOGOUT} from "../utils/locators.js";
import {By, until} from 'selenium-webdriver';

export default class LoginPage extends BasePage{
  
  async enter_url(url){
    this.goToURL(url);
  }

  async close_url(){
    this.closePage();
  }

  async get_page_title(){
    return await driver.getTitle();
  }

  async get_div_sigin(){
    try{
      await driver.findElement(By.xpath('//*]/div/div/div/div/div[2]/div[1]/div/div[2]'));
      return true;
    }catch(err){
      this.setErrorMessage(err);
      return false;
    }
  }

  async get_cards_tools(){
    try{
      return await driver.findElement(By.xpath('//*]/div/div/div/div/div[2]/div[1]/div/div[2]'));
    }catch(err){
      this.setErrorMessage(err);
      return undefined;
    }
  }

  async get_dashboard_admin(){
    try{
      return await driver.findElement(By.xpath('//*]/div/div/div/div/div[2]/div[1]/div/div[2]'));
    }catch(err){
      this.setErrorMessage(err);
      return undefined;
    }
  }

  async get_logout_pageTitle(){
    try{
      return await driver.findElement(By.xpath('//*]/div/div/div/div/div[2]/div[1]/div/div[2]'));
    }catch(err){
      this.setErrorMessage(err);
      return undefined;
    }
  }

  async login_process(credentials){
    await driver.findElement(By.id(LOGIN_ID)).sendKeys(credentials.user);
    //get input password set credential password in the input
    await driver.findElement(By.xpath(PASS_XPATH)).sendKeys(credentials.password);
    //Click on login button and sleep 3s 3000
    await driver.findElement(By.xpath(BUTTON_SIGIN)).click();
    this.awaitTimeout(3000);
  }

  async select_tool(tool){
    let toolCards = driver.wait(until.elementLocated(By.xpath(TOOL_CARDS)));
    if(toolCards && tool === 'ADMIN'){
      await driver.findElement(By.xpath(BUTTON_TOOL_ADMIN)).click();
    }else if( toolCards && tool === 'USER'){
      await driver.findElement(By.xpath(BUTTON_TOOL_USER)).click();
    }
  }

  async click_logout(){
    await driver.findElement(By.xpath(MENU_LOGOUT)).click();
  }
}
