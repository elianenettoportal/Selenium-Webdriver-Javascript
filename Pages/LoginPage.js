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
