import webdriver from 'selenium-webdriver';

export default class BasePage{
    constructor(){
        const driver = new webdriver.Builder().forBrowser('chrome').build();
        driver.manage().setTimeouts({implicit: (10000)});
        global.driver = driver;
        const errormessage = '';
    }

    async goToURL(url){
        await driver.get(url);
    }

    async closePage(){
        driver.quit();
    }

    async awaitTimeout(time){
        await driver.manage().setTimeouts( { implicit: time} );
    }

    async setErrorMessage(error) {
        console.log('ERROR', error);
        this.errormessage = error;
    }

    async getErrorMessage() {
        return this.errormessage;
    }

}
