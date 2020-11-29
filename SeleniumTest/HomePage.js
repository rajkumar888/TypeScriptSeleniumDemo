"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
var protractor_1 = require("protractor");
var HomePage = /** @class */ (function () {
    function HomePage() {
        this.heading = protractor_1.element(protractor_1.by.xpath("//h3[text()='Super Calculator']"));
        this.gobutton = protractor_1.element(protractor_1.by.xpath("//*[@id='gobutton']"));
        this.firstbutton = protractor_1.element(protractor_1.by.model('first'));
        this.secondbutton = protractor_1.element(protractor_1.by.model('second'));
    }
    HomePage.prototype.openBrowser = function (url) {
        protractor_1.browser.get(url);
    };
    HomePage.prototype.getHeading = function () {
        this.heading.getText().then(function (text) {
            console.log(text);
        });
    };
    HomePage.prototype.getTtileofpage = function () {
        console.log(protractor_1.browser.getTitle());
        return protractor_1.browser.getTitle();
    };
    HomePage.prototype.clickGobutton = function () {
        this.firstbutton.sendKeys(1);
        this.secondbutton.sendKeys(2);
        this.gobutton.click();
    };
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map