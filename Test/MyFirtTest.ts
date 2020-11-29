

describe("Describe my first script in typescript using jasmine", ()=>{

    it("welcome to jasmine coding first test", ()=>{
        let a=true
        expect(a).toBe(true);
    })


    it("Welcome to second test in jasmine", ()=>{

        let a=10

        expect(a).toBeDefined("Not defined");
    })

});


describe("Testing", () =>{
    it("should pass", () =>{
   let msg = "Welcome to TypeScript";
    //I want to print the msg first like a log
    expect(msg).toBe("Welcome to TypeScript111")
    })
});