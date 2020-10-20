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
    element(by.model('operator')).element(by.css('[value="DIVISION"]')).click();   
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

this.add1 = function(a,b){
    firstNum_input.sendKeys(a);
    element(by.model('operator')).element(by.css('[value="ADDITION"]')).click();
    secondNum_input.sendKeys(b);
    go_button.click();
    return (a+b);
}

this.sub1 = function(c,d){
    firstNum_input.sendKeys(c);
    element(by.model('operator')).element(by.css('[value="SUBTRACTION"]')).click();
    secondNum_input.sendKeys(d);
    go_button.click();
    return(c-d);
}

this.mul1 = function(e,f){
    firstNum_input.sendKeys(e);
    element(by.model('operator')).element(by.css('[value="MULTIPLICATION"]')).click();
    secondNum_input.sendKeys(f);
    go_button.click();
    return(e*f);
}

this.div1 = function(g,h){
    firstNum_input.sendKeys(g);
    element(by.model('operator')).element(by.css('[value="DIVISION"]')).click();
    secondNum_input.sendKeys(h);
    go_button.click();
    return(g/h);
}

this.mod1 = function(i,j){
    firstNum_input.sendKeys(i);
    element(by.xpath('//*[@ng-model="operator"]//option[3]')).click();
    secondNum_input.sendKeys(j);
    go_button.click();
    return(i%j);
}

this.cal = function (a,b,c) {
    firstNum_input.sendKeys(a);
    element(by.model('operator')).element(by.css('[value='+c+']')).click();
    // element(by.xpath('//*[@ng-model="operator"]//option['+c+']')).click();
    secondNum_input.sendKeys(b);
    go_button.click();
    
}
};

module.exports= new calpage();