// import modules to file
const { response, application } = require('express');
const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');

const FeedbackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');

// create instances for feedback and services objects
const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakersService('./data/speakers.json');

// Create instance for routes
const routes = require('./routes');
const { request } = require('http');

// create an instance of express module
const app = express();

// Define a port for the Express server
const port = 3000;

// Trust cookies that are passed thru a reversed proxy
app.set('trust proxy', 1);

// Set cookie-session middleware
app.use(
  cookieSession({
    name: 'session',
    keys: ['LMisWcAPp7zh4Jz', '0kMa0Btar4Y19tH'],
  })
);

// Inform Express to use EJS engine under 'views' path
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Define variable that is set during app start up
app.locals.siteName = 'ROUX Meetups';

// Define middleware to point to 'static' folder
app.use(express.static(path.join(__dirname, 'static')));

/* This is an example showing how to throw error in async app
//  Example to, intentionally, throw error in logic - but won't work in an async application
app.get('/throw', (request, response, next) => {
  setTimeout(() => {
    return next(new Error('Something did throw!'));
  }, 500);
});
*/

// Define a global template variable
app.use(async (request, response, next) => {
  try {
    const names = await speakersService.getNames();
    response.locals.speakerNames = names;
    // console.log(response.locals);
    return next();
  } catch (err) {
    return next(err);
  }
});

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
