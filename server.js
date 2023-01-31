// import modules to file
const { response, application } = require('express');
const express = require('express');
const path = require('path');

// create an instance of express module
const app = express();

// Define a port for the Express server
const port = 3000;

// Inform Express to use EJS engine under 'views' path
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Define middleware to point to 'static' folder
app.use(express.static(path.join(__dirname, 'static')));

// Establish routes
app.get('/', (request, response) => {
  response.render('pages/index', { pageTitle: 'Welcome' });
});

// Server the 'Speakers' page per specified route
app.get('/speakers', (request, response) => {
  response.sendFile(path.join(__dirname, '/static/speakers.html'));
});

// Start the Nodejs server on the specified port
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
