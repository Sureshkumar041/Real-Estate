const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const connect = require('./config/database');

// Set middleware
app.use(cors());
app.use(express.json());
app.use('/', require('./routes/route'));
app.use('/', require('./routes/route'));
app.use('/',require('./routes/route'))


// Set port , listen for request
const { port } = process.env;
app.listen(port, () => console.log("Server running successfully in ", port));

// Database Connction
connect()