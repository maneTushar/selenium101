const { By, Actions, Builder } = require("selenium-webdriver");

class DragDropPage {
  constructor(driver) {
    this.driver = driver;
    this.slider = By.css('input[value="15"]');
    this.sliderValue = By.id("range");
    this.rangeOutput = By.id("rangeSuccess");
  }

  async setSliderValue(value) {
    const slider = await this.driver.findElement(this.slider);
    const sliderRect = await slider.getRect();

    let currentX = sliderRect.x;
    const stepSize = 15;
    let rangeValue = await this.getSliderOutput();
    while (rangeValue.trim() !== "95") {
      currentX += stepSize;
      const actions = await this.driver.actions();
      await actions
        .move({ origin: sliderHandle })
        .press()
        .move({
          x: parseInt(currentX),
          y: parseInt(sliderRect.y + sliderRect.height / 2),
        }) 
        .release()
        .perform();

      rangeValue = await this.getSliderOutput();
      console.log("Current slider value:", rangeValue);

      if (parseInt(rangeValue.trim(), 10) > 95) {
        break;
      }
    }
  }

  async getSliderValue() {
    return await this.driver.findElement(this.sliderValue).getText();
  }

  async getSliderOutput() {
    return await this.driver.findElement(this.rangeOutput).getText();
  }
}

module.exports = DragDropPage;
