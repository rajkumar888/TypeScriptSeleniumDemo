"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Launch Browser and verify the Title', function () {
    it('should have a title', function () {
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        expect(protractor_1.browser.getTitle()).toBe("Super Calculator");
    });
    it('should add one and two', function () {
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        protractor_1.element(protractor_1.by.model('first')).sendKeys(1);
        protractor_1.element(protractor_1.by.model('second')).sendKeys(2);
        protractor_1.element(protractor_1.by.id('gobutton')).click();
        expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).
            toEqual('5'); // This is wrong!
    });
});
//# sourceMappingURL=Specs.js.map