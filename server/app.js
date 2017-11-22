import express from 'express';
import volleyball from 'volleyball';
import bodyParser from 'body-parser';
// Defining the Port Variable
const port = process.env.PORT || 3000;

// Set up the express app
const app = express();

// Log requests to the console.
app.use(volleyball);

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of Awesomeness.',
}));

app.listen(port);

export default app;