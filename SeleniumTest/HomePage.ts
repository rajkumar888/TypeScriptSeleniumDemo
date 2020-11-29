import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';
import {browser, element, by, protractor, $$, $} from 'protractor';
import { DriverProvider } from 'protractor/built/driverProviders';


export class HomePage{

    heading = element(by.xpath("//h3[text()='Super Calculator']"));

    gobutton = element(by.xpath("//*[@id='gobutton']"));

    firstbutton = element(by.model('first'));

    secondbutton =  element(by.model('second'));

    
    openBrowser(url: string){

        browser.get(url);

   }

   getHeading(){

    this.heading.getText().then(text =>{
        console.log(text);
    });

   }
   

   getTtileofpage(){

    console.log(browser.getTitle())
    return browser.getTitle();
   }

   
   clickGobutton(){

    this.firstbutton.sendKeys(1)

    this.secondbutton.sendKeys(2)

    this.gobutton.click();
      }

}