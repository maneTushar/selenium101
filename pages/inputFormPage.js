const { By } = require('selenium-webdriver');

class InputFormPage {
    constructor(driver) {
        this.driver = driver;
        this.submitButton = By.xpath('//button[text()="Submit"]');
        this.errorField = By.css('[type="submit"]:invalid');
        this.nameField = By.name('name');
        this.emailField = By.id('inputEmail4');
        this.passwordField = By.name('password')
        this.companyField = By.name('company')
        this.websiteField = By.name('website')
        this.countryDropdown = By.name('country');
        this.cityField = By.id('inputCity')
        this.address1_field = By.id('inputAddress1')
        this.address2_field = By.id('inputAddress2')
        this.stateField = By.id('inputState')
        this.zipField = By.id('inputZip')
        this.successMessage = By.css('p.success-msg');
        this.countryOption = By.xpath('//option[text()="United States"]')
    }

    async clickSubmit() {
        await this.driver.findElement(this.submitButton).click();
    }

    async getRequiredFieldErrorMessage() {
        const errorMessage = await await this.driver.findElement(this.nameField).getAttribute('validationMessage');
        return errorMessage;
    }


    async fillForm(data) {
        await this.driver.findElement(this.nameField).sendKeys(data.name);
        await this.driver.findElement(this.emailField).sendKeys(data.email);
        await this.driver.findElement(this.passwordField).sendKeys(data.password);
        await this.driver.findElement(this.companyField).sendKeys(data.company);
        await this.driver.findElement(this.websiteField).sendKeys(data.website);
        await this.driver.findElement(this.countryDropdown).click();
        await this.driver.findElement(this.countryOption).click();
        await this.driver.findElement(this.cityField).sendKeys(data.city);
        await this.driver.findElement(this.address1_field).sendKeys(data.address1);
        await this.driver.findElement(this.address2_field).sendKeys(data.address2);
        await this.driver.findElement(this.stateField).sendKeys(data.state);
        await this.driver.findElement(this.zipField).sendKeys(data.zip);
    }

    async getSuccessMessage() {
        return await this.driver.findElement(this.successMessage).getText();
    }
}

module.exports = InputFormPage;
