// import modules
const express = require('express');
const speakerRoute = require('./speakers');
const feedbackRoute = require('./feedback');

// Define Express Router object
const router = express.Router();

// Create a function for the router module where args can be passed into function
module.exports = (params) => {
  // Establish routes
  router.get('/', (request, response) => {
    /*
    // Insert a visit counter with conditional logic - Used just for demonstration in this section
    if (!request.session.visitcount) {
      request.session.visitcount = 0;
    }
    request.session.visitcount += 1;
    console.log(`Number of visits ${request.session.visitcount}`);
*/
    response.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/speakers', speakerRoute(params));
  router.use('/feedback', feedbackRoute(params));

  return router;
};
