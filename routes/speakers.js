// import modules
const express = require('express');

// Define Express Router object
const router = express.Router();

// Create a function for the router module where args can be passed into function
module.exports = () => {
  // Establish routes
  router.get('/', (request, response) => {
    return response.send(`Speakers list`);
  });

  router.get('/:shortname', (request, response) => {
    return response.send(`Detail page of ${request.params.shortname}`);
  });

  // Return router object results
  return router;
};
