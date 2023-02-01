// import modules to file
const { response, application } = require('express');
const express = require('express');
const path = require('path');
const FeedbackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');

// create instances for feedback and services objects
const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakersService('./data/speakers.json');

// Create instance for routes
const routes = require('./routes');

// create an instance of express module
const app = express();

// Define a port for the Express server
const port = 3000;

// Inform Express to use EJS engine under 'views' path
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Define middleware to point to 'static' folder
app.use(express.static(path.join(__dirname, 'static')));

// A Catch-All route handlers
app.use(
  '/',
  routes({
    feedbackService,
    speakersService,
  })
);

// Start the Nodejs server on the specified port
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
