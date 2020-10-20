const { iteratee } = require("lodash");

describe("Alerts, confirm, prompt testing",function(){

    beforeEach(function ()      
    {
        browser.waitForAngularEnabled(false);
        browser.get("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
    });

it("Alerts Testing",function(){
    
    element(by.name("alert")).click();
    browser.sleep(2000);
    let ale = browser.switchTo().alert();
    ale.getText().then(function (text) {
        console.log(text);
    })
    ale.accept();

})

it("confirmation Testing",function(){

    element(by.name("confirmation")).click();
    browser.sleep(2000);
    let conf= browser.switchTo().alert();
    conf.getText().then(function (text) {
        console.log(text);
    })
    conf.accept();
})

it("prompt Testing",function(){

    element(by.name("prompt")).click();
    browser.sleep(2000);
    let prompt= browser.switchTo().alert();
    prompt.sendKeys("chandra");
    prompt.accept();
})


});