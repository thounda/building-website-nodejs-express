// import modules
const express = require('express');
const speakerRoute = require('./speakers');
const feedbackRoute = require('./feedback');

// Define Express Router object
const router = express.Router();

// Create a function for the router module where args can be passed into function
module.exports = (params) => {
  // Get the speakersService
  const { speakersService } = params;

  // Establish routes
  router.get('/', async (request, response, next) => {
    /*
    // Insert a visit counter with conditional logic - Used just for demonstration in this section
    if (!request.session.visitcount) {
      request.session.visitcount = 0;
    } 
    request.session.visitcount += 1;
    console.log(`Number of visits ${request.session.visitcount}`);

    // set try / catch block
*/

    // Set the Try/Catch block
    try {
      // Fetch the Speakers list and artwork data
      const artwork = await speakersService.getAllArtwork();
      const topSpeakers = await speakersService.getList();
      // console.log(topSpeakers);

      return response.render('layout', {
        pageTitle: 'Welcome',
        template: 'index',
        topSpeakers,
        artwork,
      });
    } catch (err) {
      return next(err);
    }
  });

  router.use('/speakers', speakerRoute(params));
  router.use('/feedback', feedbackRoute(params));

  return router;
};
