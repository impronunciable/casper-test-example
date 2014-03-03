
/**
 * Result page
 */

casper.waitForSelector('.output canvas', function(){
  
  // Capture the canvas
  this.captureSelector(casper.CAPTURES_DIR + 'sin.png', '.output canvas');
  casper.test.done();

});
