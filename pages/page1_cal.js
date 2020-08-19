let calpage = function(){

let firstNum_input = element(by.model('first'));
let secondNum_input = element(by.model('second'));
let operator_button = element(by.model('operator'));
let go_button = element(by.css('[id="gobutton"]'));
let verify_text = element(by.css('[class="ng-binding"]'));

this.firstNum = function (firstNo) {
    firstNum_input.sendKeys(firstNo);
};

this.secondNum = function (secondNo) {
    secondNum_input.sendKeys(secondNo);
};

this.operator_Add = function () {
    element(by.model('operator')).click();
    element(by.css('[value="ADDITION"]')).click();   
};

this.operator_Sub = function () {
    element(by.model('operator')).click();
    element(by.css('[value="SUBTRACTION"]')).click();   
};

this.operator_Mul = function () {
    element(by.model('operator')).click();
    element(by.css('[value="MULTIPLICATION"]')).click();   
};

this.operator_Div = function () {
    element(by.model('operator')).click();
    element(by.css('[value="DIVISION"]')).click();   
};

this.operator_Mod = function () {
    element(by.xpath('//*[@ng-model="operator"]//option[3]')).click(); 
};

this.go = function () {
     go_button.click();
};

this.verify = function (output) {
    let result=verify_text.getText();
    expect(result.getText()).toEqual(output);
};

this.link = function (url) {
    browser.get(url);
};

};

module.exports= new calpage();