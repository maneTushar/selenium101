const { Builder } = require('selenium-webdriver');
const DragDropPage = require('../pages/dragDropPage');
const capabilities = require('../utils/lambdatestConfig');

(async function dragDropTest() {
    const driver = await new Builder()
        .usingServer('https://hub.lambdatest.com/wd/hub')
        .withCapabilities(capabilities)
        .build();

    try {
        await driver.get('https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo');

        const page = new DragDropPage(driver);

        await page.setSliderValue(95);

        const value = await page.getSliderOutput();
        
        console.assert(value === '95', `Expected value: 95, but got: ${value}`);
    } finally {
        await driver.quit();
    }
})();
