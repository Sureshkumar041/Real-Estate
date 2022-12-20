const express = require('express');
const app = express(),
path = require("path")

const cors = require('cors');
require('dotenv').config();
const connect = require('./config/database');

// Set middleware
app.use(cors());
app.use(express.json());

// API ...
app.use('/', require('./routes/route'));

//
app.set("public", "./public");
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use("/", express.static(path.join(__dirname, "public")))
app.use( "/uploads",express.static(path.join(__dirname, "/uploads"), { maxAge: 7 * 86400000 }));
//

// Set port , listen for request
const { port } = process.env;
app.listen(port, () => console.log("Server running successfully in ", port));

// Database Connction
connect()