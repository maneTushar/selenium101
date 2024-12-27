const { Builder } = require('selenium-webdriver');
const SimpleFormPage = require('../pages/simpleFormPage');
const capabilities = require('../utils/lambdatestConfig');

(async function simpleFormTest() {
    const driver = await new Builder()
        .usingServer('https://hub.lambdatest.com/wd/hub')
        .withCapabilities(capabilities)
        .build();

    try {
        // Navigate to Simple Form Demo
        await driver.get('https://www.lambdatest.com/selenium-playground/simple-form-demo');

        const page = new SimpleFormPage(driver);

        // Validate URL
        const currentUrl = await driver.getCurrentUrl();
        if (!currentUrl.includes('simple-form-demo')) {
            throw new Error('URL validation failed.');
        }

        // Enter and display message
        const message = 'Welcome to LambdaTest';
        await page.enterMessage(message);
        await page.clickShowMessage();

        // Validate displayed message
        const displayedMessage = await page.getDisplayedMessage();
        console.assert(displayedMessage === message, 'Message mismatch!');
    } finally {
        await driver.quit();
    }
})();
