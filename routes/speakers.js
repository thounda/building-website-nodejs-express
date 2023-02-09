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
    // console.log(topSpeakers);

    response.render('layout', { pageTitle: 'Speakers', template: 'speakers', speakers });
  });

  router.get('/:shortname', (request, response) => {
    return response.send(`Detail page of ${request.params.shortname}`);
  });

  // Return router object results
  return router;
};
