var data = {
  rsvp: ['ixd@ucsd.edu']
};



/*
 * GET tasks page.
 */
exports.adminView = function(request, response){
  response.render('rsvp', data);
};



exports.addRSVP = function(request, response) {
var rsvpEmail = request.body.rsvpEmail;

  // print to the terminal whenever the POSt reuqest is made
  console.log(rsvpEmail);


  data.rsvp.push(rsvpEmail); // add to curr data

  // Let us send back some data so that
  // browser knows it worked!
  response.send(rsvpEmail);
};