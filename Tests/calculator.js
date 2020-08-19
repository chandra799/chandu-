
let page1_cal = require('../pages/page1_cal')

describe('demo calculator test',function(){

    it('addition test',function(){

        // browser.get('http://juliemr.github.io/protractor-demo/');
        page1_cal.link('http://juliemr.github.io/protractor-demo/');

        // browser.sleep(3000);
        // element(by.model('first')).sendKeys('2');
        page1_cal.firstNum('4');
       
        page1_cal.operator_Add();
        // element(by.model('second')).sendKeys('5');
       page1_cal.secondNum('6');

        // element(by.css('[id="gobutton"]')).click();
        page1_cal.go();

        // browser.sleep(3000);
        // let result1=element(by.css('[class="ng-binding"]'));
        // expect(result1.getText()).toEqual('7');
        page1_cal.verify('10');

        });
        
        // console.log(result.getText());
it('substraction',function () {
    let firstSub='9';
    let secondSub='4';

    page1_cal.firstNum(firstSub);
    page1_cal.operator_Sub();
    page1_cal.secondNum(secondSub);
    page1_cal.go();
    page1_cal.verify('5');
    
});
it('multiplication',function () {
    
   let firstMul='4';
   let secondMul='5';

   page1_cal.firstNum(firstMul);
   page1_cal.operator_Mul();
   page1_cal.secondNum(secondMul);
   page1_cal.go();
   page1_cal.verify('20');
    
});
it('division',function () {
    
    let firstDiv='9';
    let secondDiv='3';

    page1_cal.firstNum(firstDiv);
    page1_cal.operator_Div();
    page1_cal.secondNum(secondDiv);
    page1_cal.go();
    page1_cal.verify('3');
    
});
    
it('modulus',function () {
    let firstMod='10';
    let secondMod='2';

    page1_cal.firstNum(firstMod);
    page1_cal.operator_Mod();
    page1_cal.secondNum(secondMod);
    page1_cal.go();
    page1_cal.verify('1');
});

});