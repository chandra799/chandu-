let page1_cal = require('../pages/page1_cal');
const { iteratee } = require('lodash');

describe('different way of calculator page',function(){

    function calc(a,b,c){   
        element(by.model('first')).sendKeys(a);
        element.all(by.tagName("option")).each(function(item){
            item.getAttribute("value").then(function(values){
                if(values==c){
                    item.click();
                }
            })
            })
        element(by.model('second')).sendKeys(b);
        element(by.css('[ng-click="doAddition()"]')).click();
        element(by.css('[class="ng-binding"]')).getText().then(function(text){
            console.log(text);
        })
    }

    beforeEach(function () {
        browser.get('http://juliemr.github.io/protractor-demo/');  
    });

it('calculating with different parameters',function(){
    
    calc(3,5,"ADDITION");
    calc(7,5,"SUBTRACTION");
    calc(2,6,"MULTIPLICATION");
    calc(9,3,"DIVISION");
    calc(8,2,"MODULO");
    
})



})