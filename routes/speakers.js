// import modules
const express = require('express');

// Define Express Router object
const router = express.Router();

// Create a function for the router module where args can be passed into function
module.exports = (params) => {
  // Destructure assignment to pass in params
  const { speakersService } = params;

  // Establish routes using async / await
  router.get('/', async (request, response, next) => {
    try {
      const speakers = await speakersService.getList();
      // Fetch artwork details
      const artwork = await speakersService.getAllArtwork();

      // console.log(topSpeakers);

      return response.render('layout', {
        pageTitle: 'Speakers',
        template: 'speakers',
        speakers,
        artwork,
      });
    } catch (err) {
      return next(err);
    }
    // Fetch the Speakers list
  });

  // Get the speaker's details by their shortname
  router.get('/:shortname', async (request, response, next) => {
    try {
      const speaker = await speakersService.getSpeaker(request.params.shortname);
      // console.log(speaker);
      const artwork = await speakersService.getArtworkForSpeaker(request.params.shortname);
      // console.log(artwork);
      return response.render('layout', {
        pageTitle: 'Speakers',
        template: 'speakers-detail',
        speaker,
        artwork,
      });
    } catch (err) {
      return next(err);
    }
  });

  // Return router object results
  return router;
};
