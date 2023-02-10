// import modules
const express = require('express');

// Define Express Router object
const router = express.Router();

// Create a function for the router module where args can be passed into function
module.exports = (params) => {
  // Destructing assignment
  const { feedbackService } = params;
  // Establish routes
  router.get('/', async (request, response, next) => {
    try {
      const feedback = await feedbackService.getList();
      return response.json(feedback);
    } catch (err) {
      return next(err);
    }
  });

  router.post('/', (request, response) => {
    return response.send(`Feedback form posted`);
  });

  // Return router object results
  return router;
};
