import { HomePage } from "./HomePage";


describe("Describe my first script in typescript using jasmine", ()=>{

    var homepage = new HomePage();



    it("launch chrome browser and open url ", ()=>{

        var url:string = "http://juliemr.github.io/protractor-demo/";

        homepage.openBrowser(url);

        
    })


    it("verify and print title and heading ", ()=>{

      homepage.getHeading();      

      homepage.clickGobutton();
    })

});


