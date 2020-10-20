const { iteratee } = require("lodash")

describe('Alerts',function(){

it('Alerts',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://rahulshettyacademy.com/AutomationPractice/');
    element(by.id('alertbtn')).click();
    browser.switchTo().alert().dismiss().then(function(){
    browser.sleep(3000);
    })
    

})


})