const { iteratee } = require("lodash")

describe('synchronization',function(){

it('solving Synchronization',function(){
    browser.waitForAngularEnabled(false);
    browser.get('http://www.itgeared.com/demo/1506-ajax-loading.html');
    element(by.css('a[href*="loadAjax"]')).click();

    var EC = protractor.ExpectedConditions;
    browser.wait(EC.invisibilityOf(element(by.id("loader"))));
    element(by.id('results')).getText().then(function(text){
        console.log(text);
    })

})



})