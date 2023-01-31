// import modules
const express = require('express');
const speakerRoute = require('./speakers');
const feedbackRoute = require('./feedback');

// Define Express Router object
const router = express.Router();

// Create a function for the router module where args can be passed into function
module.exports = () => {
  // Establish routes
  router.get('/', (request, response) => {
    response.render('pages/index', { pageTitle: 'Welcome' });
  });

  router.use('/speakers', speakerRoute());
  router.use('/feedback', feedbackRoute());

  return router;
};
