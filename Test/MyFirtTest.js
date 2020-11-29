describe("Describe my first script in typescript using jasmine", function () {
    it("welcome to jasmine coding first test", function () {
        var a = true;
        expect(a).toBe(true);
    });
    it("Welcome to second test in jasmine", function () {
        var a = 10;
        expect(a).toBeDefined("Not defined");
    });
});
describe("Testing", function () {
    it("should pass", function () {
        var msg = "Welcome to TypeScript";
        //I want to print the msg first like a log
        expect(msg).toBe("Welcome to TypeScript111");
    });
});
//# sourceMappingURL=MyFirtTest.js.map