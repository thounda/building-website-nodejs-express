// import Express module to file
const { response } = require("express");
const express = require("express");

// create an instance of express module
const app = express();

// Define a port for the Express server
const port = 3000;

// Establish routes
app.get("/", (request, response) => {
  response.send("Hello Express :)");
});

//Start the Nodejs server on the specified port
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
