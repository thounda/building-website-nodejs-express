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
    // Set a Try/ Catch block to handle errors
    try {
      // Fetch the Speakers list and artwork data
      const artwork = await speakersService.getAllArtwork();
      const topSpeakers = await speakersService.getList();

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
