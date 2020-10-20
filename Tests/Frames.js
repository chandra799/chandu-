const { iteratee } = require("lodash");


describe('Frames',function(){

it('Frames',function(){
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    browser.get('https://rahulshettyacademy.com/AutomationPractice/');
    browser.switchTo().frame('iframe-name');
    element(by.css("a[href*='sign_in']")).getText().then(function(text){
        console.log(text);
        expect(text).toBe("LOGIN");
    })

    element(by.css("a[href*='sign_up']")).getText().then(function(text){
        console.log(text);
        expect(text).toBe("REGISTER")
    })


    })
    

})