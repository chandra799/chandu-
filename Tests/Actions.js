const { iteratee } = require("lodash")

describe('Actions & windows',function(){

it('Actions',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://www.upwork.com/');
    // element(by.css('[name="q"]')).click();
    browser.actions().mouseMove(element(by.css('[name="q"]'))).sendKeys('Automation').perform();
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    browser.actions().sendKeys(protractor.Key.ENTER).perform();

    console.log(element.all(by.css('[class="flex-1 m-0 overflow-auto"]')).count());
    element.all(by.css('[class="flex-1 m-0 overflow-auto"]')).first().click();
})



})