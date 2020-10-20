const { iteratee } = require("lodash");
const { hasUncaughtExceptionCaptureCallback } = require("process");

describe('Practicing the form submission',function(){

it('Form Submission positive',function(){

    browser.get('https://rahulshettyacademy.com/angularpractice/');
    browser.driver.manage().window().maximize();
    element(by.name('name')).sendKeys("Student1");
    element(by.css('input[name="email"]')).sendKeys('student1@practice.com');
    element(by.id('exampleInputPassword1')).sendKeys('student1');
    element(by.css('[id="exampleCheck1"]')).click();
    element(by.cssContainingText('[id="exampleFormControlSelect1"] option',"Female")).click();
    element.all(by.name("inlineRadioOptions")).first().click();
    element(by.name('bday')).sendKeys("11/11/2020");
    element(by.buttonText('Submit')).click();
    element(by.css('[class*="success"]')).getText().then(function(text){
        // expect(text.trim()).textToBePresentInElement("The Form has been submitted successfully!.");
        console.log(text);
    })
    // element(by.cssContainingText('[class*="success"]',"The Form has been submitted successfully!."));
})

it('Negative Tests of Form Submission',function(){

    browser.get('https://rahulshettyacademy.com/angularpractice/');
    browser.driver.manage().window().maximize();
    element(by.name('name')).sendKeys("S");
    element(by.css('input[name="email"]')).sendKeys('student1@practice.com');
    element(by.css('[class="alert alert-danger"]')).getText().then(function(text){
        expect(text).toBe("Name should be at least 2 characters");
        console.log(text);
    })

})

it('Negative Tests for name field',function(){
    browser.get('https://rahulshettyacademy.com/angularpractice/');
    browser.driver.manage().window().maximize();
    element(by.name('name')).sendKeys("");
    element(by.id('exampleInputPassword1')).sendKeys('s');
    element.all(by.css('[class="alert alert-danger"]')).count().then(function(count){
        console.log(count);
    })
    element.all(by.css('[class="alert alert-danger"]')).first().getText().then(function(text){
        expect(text).toBe("Name is required");
        console.log(text);
    })
    element(by.css('input[name="email"]')).sendKeys("");
    element(by.id('exampleInputPassword1')).clear();
    element(by.id('exampleInputPassword1')).sendKeys('s');
    element.all(by.css('[class="alert alert-danger"]')).last().getText().then(function(text){
        expect(text).toBe("Email is required");
        console.log(text);
    })
})

})