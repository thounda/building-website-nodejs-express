// import modules
const express = require('express');

// Define Express Router object
const router = express.Router();

// Create a function for the router module where args can be passed into function
module.exports = () => {
  // Establish routes
  router.get('/', (request, response) => {
    return response.send(`Feedback page`);
  });

  router.post('/', (request, response) => {
    return response.send(`Feedback form posted`);
  });

  // Return router object results
  return router;
};
