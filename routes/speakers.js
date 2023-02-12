// import modules
const express = require('express');

// Define Express Router object
const router = express.Router();

// Create a function for the router module where args can be passed into function
module.exports = (params) => {
  // Destructure assignment to pass in params
  const { speakersService } = params;

  // Establish routes using async / await
  router.get('/', async (request, response) => {
    // Fetch the Speakers list
    const speakers = await speakersService.getList();
    // Fetch artwork details
    const artwork = await speakersService.getAllArtwork();

    // console.log(topSpeakers);

    response.render('layout', { pageTitle: 'Speakers', template: 'speakers', speakers, artwork });
  });

  // Get the speaker's details by their shortname
  router.get('/:shortname', async (request, response) => {
    const speaker = await speakersService.getSpeaker(request.params.shortname);
    // console.log(speaker);
    const artwork = await speakersService.getArtworkForSpeaker(request.params.shortname);
    // console.log(artwork);
    response.render('layout', {
      pageTitle: 'Speakers',
      template: 'speakers-detail',
      speaker,
      artwork,
    });
  });

  // Return router object results
  return router;
};
