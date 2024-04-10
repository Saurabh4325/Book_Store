const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;


app.use(express.urlencoded({ extended: true }));

const router = require('./routes/booksRoutes.js');
const router1 = require('./routes/pageRoutes.js');

const cors = require('cors');

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static('public'));

// Set EJS as the view engine and specify the views directory
app.set('view engine', 'ejs');
app.set('views', './views');

// Route setup
app.use(router1);
app.use('/books', router);

// Start the server
app.listen(port, () => {
    console.log("Server is running at http://localhost:" + port);
});
