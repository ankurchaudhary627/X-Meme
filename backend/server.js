// Import packages
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');

// Import routes
const memes = require('./routes/api/memes');

// Import swagger doc
const swaggerDoc = require('./swagger.json');

const app = express();

// Body-parser Middleware
app.use(bodyParser.json());

// Use cors
app.use(cors());

// Setup swagger-ui
app.use('/swagger-ui', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// Import db uri
const dbURI = require('./config/keys').mongoURI;

// connect to mongo
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

// Use routes
app.use('/', memes);

// Handling invalid routes
app.use('/*', (req, res) => {
  res.status(404).json({
    'message': 'Page not found'
  });
})

// Define port to be used
const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`server started on PORT ${port}`));