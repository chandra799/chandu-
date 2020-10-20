const { isNull } = require("lodash");
const { exit } = require("process");
const { NIL } = require("uuid");

describe('Practicing the form submission', function () {

    function selectItem(product) {

        element.all(by.tagName('app-card')).each(function (item) {
            item.element(by.css('h4 a')).getText().then(function (text) {
                if (text == product) {
                    item.element(by.css('[class="btn btn-info"]')).click();
                }
            })
        })
    }

    it('@1Form Submission positive', function () {

        browser.get('https://rahulshettyacademy.com/angularpractice/');
        browser.driver.manage().window().maximize();
        element(by.name('name')).sendKeys("Student1");
        element(by.css('input[name="email"]')).sendKeys('student1@practice.com');
        element(by.id('exampleInputPassword1')).sendKeys('student1');
        element(by.css('[id="exampleCheck1"]')).click();
        element(by.cssContainingText('[id="exampleFormControlSelect1"] option', "Female")).click();
        element.all(by.name("inlineRadioOptions")).first().click();
        element(by.name('bday')).sendKeys("11/11/2020");
        element(by.buttonText('Submit')).click();
        element(by.css('[class*="success"]')).getText().then(function (text) {
            // expect(text.trim()).textToBePresentInElement("The Form has been submitted successfully!.");
            console.log(text);
        })
        // element(by.cssContainingText('[class*="success"]',"The Form has been submitted successfully!."));
        element(by.linkText("Shop")).click();
    })

    it('@2shopping page automation', function () {

        expect(browser.getTitle()).toBe("ProtoCommerce");
        selectItem("Samsung Note 8");
        selectItem("Nokia Edge");

        element(by.partialLinkText("Checkout")).getText().then(function (text) {
            var a = text.split("(");
            var b = Number(a[1].trim().charAt(0));
            expect(b).toBe(2);
            console.log(b);
        })
        element(by.partialLinkText("Checkout")).click();

    })

    xit('@3Checkout page automation', function () {
         var l,m,n;
         
        element(by.tagName('tr')).element(by.xpath('//td[4]')).getText().then(function(text){
                var res = text.split(".");
                l = Number(res[1].trim());            
                console.log(l);
      
        });
        
        element(by.xpath('//tr[2]//td[4]')).getText().then(function(text){
                var res = text.split(".");
                m = Number(res[1].trim());
                console.log(m);
      
        });

        element(by.xpath('//tr[3]//td[5]')).getText().then(function(text){
            var res=text.split(".");
            n=Number(res[1].trim());        
            console.log(n);
            console.log(l+m);
            expect(n).toBe(l+m);
            
        })

        element(by.xpath('//tr[3]//td[4]')).getText().then(function(text1){
            console.log(text1);
        })
    })

    it('@4checkout page',function(){

        var v,w,x,y,z,k, array;
        element.all(by.xpath('//tr//td[1]')).count().then(function(count){
            console.log(count + " products");
            x = count-1;
        for(var i=1;i<=count-2;i++){

           element(by.xpath('//tbody//tr['+i+']//td[4]')).getText().then(function(text){
                // console.log(text);
                var res=text.split(".");
                  z=Number(res[1].trim()); 
                  console.log(z);
                 array = [i];
                array.push(z);
                    // k += array[i]
                    k = array.length;
                    
        })
               
        }
        
        for(var j=i;j<x;j++){
            console.log(array[j]);
        }

        element(by.xpath('//tr['+x+']//td[5]')).getText().then(function(text){
                var res=text.split(".");
                n=Number(res[1].trim());        
                console.log(n);
                console.log(k);
                expect(n).toBe(k);
                
            })
    
    })
   
        
        // element.all(by.xpath('//tbody//tr')).each(function(item){
        // item.element(by.css('td:nth-child(4)')).getText().then(function(text){
        //     console.log(text);
        //         var res=text.split(".");
        //         var z=Number(res[1].trim());
        //         z=z+z;
        //         console.log(z);        
        // })
        // })
    })

});