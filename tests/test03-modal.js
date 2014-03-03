
/**
 * Modal
 */

casper.click('.subpod-interactive');

casper.waitForSelector('#subpod_cdf.left', function(){

  // Take a screenshot of the whole page
  casper.capture(casper.CAPTURES_DIR + 'modal.png');
  
  // Close the modal
  casper.click('#subpod_cdf a.close');
});

casper.waitWhileVisible('#lightboxOverlay', function(){
  casper.test.done();
});
