const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const registrationRoutes = require('./routes/registrationRoutes');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/registration', registrationRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
