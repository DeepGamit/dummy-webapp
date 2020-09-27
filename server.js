const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

require('dotenv').config();

app.use(cors());

// Parse Requests of content-type - application/json
app.use(bodyParser.json());

// Parse Requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Home Page route
app.get("/", (req, res) => {
    res.send('Welcome to Web Application');
});

//Import Routes
const userRoute = require('./routes/user_routes');
app.use('/v1/user', userRoute);

const db = require("./database/sequelize");
db.sequelize.sync({ force: true }).then(() => {
    console.log(`Database Connected.`);
});

// Set port, Listen for Requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
