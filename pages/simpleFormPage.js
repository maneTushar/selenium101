const { By } = require('selenium-webdriver');

class SimpleFormPage {
    constructor(driver) {
        this.driver = driver;
        this.messageBox = By.id('user-message');
        this.showMessageButton = By.id('showInput');
        this.outputMessage = By.id('message');
    }

    async enterMessage(message) {
        await this.driver.findElement(this.messageBox).sendKeys(message);
    }

    async clickShowMessage() {
        await this.driver.findElement(this.showMessageButton).click();
    }

    async getDisplayedMessage() {
        return await this.driver.findElement(this.outputMessage).getText();
    }
}

module.exports = SimpleFormPage;
