const { Builder } = require('selenium-webdriver');
const InputFormPage = require('../pages/inputFormPage');
const capabilities = require('../utils/lambdatestConfig');

(async function inputFormTest() {
    const driver = await new Builder()
        .usingServer('https://hub.lambdatest.com/wd/hub')
        .withCapabilities(capabilities)
        .build();

    try {
        // Navigate to Input Form Demo
        await driver.get('https://www.lambdatest.com/selenium-playground/input-form-demo');

        const page = new InputFormPage(driver);

        // Attempt to submit without filling the form
        await page.clickSubmit();
        const errorMessage = await page.getRequiredFieldErrorMessage();
        
        console.assert(errorMessage === 'Please fill out this field.', `Unexpected error message: ${errorMessage}`);

        // Fill out the form and submit
        const formData = {
            name: 'Test User',
            email: 'test.user@example.com',
            password:'test123',
            company:'test',
            website :'https://www.lambdatest.com/selenium-playground/input-form-demo',
            country: 'United States',
            city:'test',
            address1:'test',
            address2:'test',
            state:'test',
            zip:'125648'
        };
        await page.fillForm(formData);
        await page.clickSubmit();

        // Validate success message
        const successMessage = await page.getSuccessMessage();
        console.assert(successMessage.includes('Thanks for contacting us'), 'Success message validation failed.');
    } finally {
        await driver.quit();
    }
})();
