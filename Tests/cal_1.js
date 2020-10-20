let page1_cal = require('../pages/page1_cal');
const { iteratee, slice, trim, after } = require('lodash');
const { hasUncaughtExceptionCaptureCallback } = require('process');
let d = require('./data');

describe('chain locator, repeater',function(){

    beforeEach(function(){
        page1_cal.link('http://juliemr.github.io/protractor-demo/');
    });

it('chain locator_Div', function(){
    
     page1_cal.div1(d.inputData.firstvalue1,d.inputData.secondvalue1)
     page1_cal.verify(d.inputData.output1);

    element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text){
        expect(d.inputData.output1).toEqual(text);
    })


});

it('chain locator_Mul', function(){

    page1_cal.mul1(d.inputData.firstvalue2,d.inputData.secondvalue2)
    page1_cal.verify(d.inputData.output2);

     element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text){
        expect(d.inputData.output2).toEqual(text);
     })

    });

it('chain locator_Sub', function(){

     page1_cal.sub1(d.inputData.firstvalue3,d.inputData.secondvalue3)
     page1_cal.verify(d.inputData.output3);

     element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text){
        expect(d.inputData.output3).toEqual(text);
     })

});

it('chain locator_Add', function(){

     page1_cal.add1(d.inputData.firstvalue4,d.inputData.secondvalue4);
     page1_cal.verify(d.inputData.output4);

     element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text){
        expect(d.inputData.output4).toEqual(text);
     })

});

it('verifying the table data',function(){

    // element(by.repeater('result in memory')).element(by.css('td:nth-child(2)')).getText().then(function(text){
    // console.log(text);
    // console.log(text.charAt(0));
    // console.log(text.charAt(4));
    // console.log(trim(text.slice(1,3)));
    // if(text.contains('+')){
    //     console.log("true");
    // }
    // })

    element.all(by.repeater('result in memory')).each(function(item){

        item.element(by.css('td:nth-child(3)')).getText().then(function(text){
            console.log(text);
            console.log("---------------------");
        })
    })

    // element.all(by.repeater('result in memory')).first().element(by.css('td:nth-child(3)')).getText().then(function(text){
    //     console.log(text);
    // })

    // element.all(by.repeater('result in memory')).get(0).element(by.css('td:nth-child(3)')).getText().then(function(text){
    //     console.log(text);
    // })

    // element.all(by.repeater('result in memory')).last().element(by.css('td:nth-child(3)')).getText().then(function(text){
    //     console.log(text);
    // })

})

    afterEach(function(){
        // browser.close();
        console.log("closing the browser");
    });

});