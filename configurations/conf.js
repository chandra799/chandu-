var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html',
    //   captureOnlyFailedSpecs: true
    //   ignoreSkippedSpecs: true
});

exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // specs: ['E:/Protractortraining/Tests/cal_3.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showColors: true, // Use colors in the command line report.
    },

    // Setup the report before any tests start
    beforeLaunch: function () {
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },

    // Assign the test reporter to each running instance
    onPrepare: function () {

        browser.manage().window().maximize();
        jasmine.getEnv().addReporter(reporter);
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));

        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
              savePath: 'target/screenshots'
            })
          );

        jasmine.getEnv().afterEach(function(done){
          browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
              return new Buffer(png, 'base64')
            }, 'image/png')();
            done();
          })
        });

        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './',
            filePrefix: 'xmlresults'
        }));

        var fs = require('fs-extra');
 
fs.emptyDir('screenshots/', function (err) {
        console.log(err);
    });
 
    jasmine.getEnv().addReporter({
        specDone: function(result) {
            if (result.status == 'failed') {
                browser.getCapabilities().then(function (caps) {
                    var browserName = caps.get('browserName');
 
                    browser.takeScreenshot().then(function (png) {
                        var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName+ '.png');
                        stream.write(new Buffer(png, 'base64'));
                        stream.end();
                    });
                });
            }
        }
    });
    
    },
    suites :
    {
        smoke : ['../Tests/cal_2.js'],
        regression : '../Tests/calculator.js',
    },

    // Close the report after all tests finish
    afterLaunch: function (exitCode) {
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    },

    onComplete: function() {
        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();
    
        capsPromise.then(function (caps) {
           browserName = caps.get('browserName');
           browserVersion = caps.get('version');
           platform = caps.get('platform');
    
           var HTMLReport = require('protractor-html-reporter-2');
    
           testConfig = {
               reportTitle: 'Protractor Test Execution Report',
               outputPath: './',
               outputFilename: 'ProtractorTestReport',
               screenshotPath: './screenshots',
               testBrowser: 'chrome',
               browserVersion: '84.0',
               modifiedSuiteName: false,
               screenshotsOnlyOnFailure: false,
               testPlatform: platform
           };
           new HTMLReport().from('xmlresults.xml', testConfig);
       });
    }
};