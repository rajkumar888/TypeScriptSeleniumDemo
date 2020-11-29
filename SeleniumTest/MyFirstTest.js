"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HomePage_1 = require("./HomePage");
describe("Describe my first script in typescript using jasmine", function () {
    var homepage = new HomePage_1.HomePage();
    it("launch chrome browser and open url ", function () {
        var url = "http://juliemr.github.io/protractor-demo/";
        homepage.openBrowser(url);
    });
    it("verify and print title and heading ", function () {
        homepage.getHeading();
        homepage.clickGobutton();
    });
});
//# sourceMappingURL=MyFirstTest.js.map