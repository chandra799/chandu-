let page1_cal=require('../pages/page1_cal');
let d=require('./Jasminedata');
let using=require('jasmine-data-provider');

describe('calculator site',function () {

    beforeEach(function () {
        browser.get('http://juliemr.github.io/protractor-demo/');

    })
using(d.datadrive,function (data, description) {
    

it('calculator testing with multiple setoff data '+description,function () {
    
    page1_cal.cal(data.firstValue,data.secondValue,data.operator);
   
    element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function (text) {
        
        expect(data.result).toEqual(text);
    })
})
});
    afterEach(function () {
        
        console.log('closing the browser');
    })
})