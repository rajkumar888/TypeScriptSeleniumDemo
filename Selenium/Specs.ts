import {browser, element, by, protractor, $$, $} from 'protractor';

  describe('Launch Browser and verify the Title', function() {
    it('should have a title', () => {
      browser.get('http://juliemr.github.io/protractor-demo/');
  
      expect(browser.getTitle()).toBe("Super Calculator");

    });




    it('should add one and two', () =>{
      browser.get('http://juliemr.github.io/protractor-demo/');
      element(by.model('first')).sendKeys(1);
      element(by.model('second')).sendKeys(2);
  
      element(by.id('gobutton')).click();
  
      expect(element(by.binding('latest')).getText()).
          toEqual('5'); // This is wrong!
    });


    
    

  });



    


