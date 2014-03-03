
/**
 * Homepage
 */

casper.start(casper.BASE_URL, function(){

  // Submit the search form
  this.fill('#calculate', {
    i: 'sin(x)'
  }, true);

  // Wait for the result page
  casper.waitForUrl(/input/, function(){
    casper.test.assertHttpStatus(200);
    casper.test.assertEquals(this.getElementAttribute('#i', 'value') ,"sin(x)");

    casper.test.done();
  });
 
});

casper.run();
