const express = require('express');
require('dotenv').config();
// Require MongoClient class (Object needed for connection).
const { MongoClient } = require('mongodb');
const { User, Thought } = require('./models/index');
const app = express();
const port = 3001;
// Connection address. 
const connection = process.env.DB_CONNECTION;
// New instance of connection sing MongoClient driver. 
const client = new MongoClient(connection);
// Will store connection to database.
let db;
// Database name
const dbName = 'socialDB';
// Connect method to connect to Mongo.
client.connect()
  .then(() => {
    console.log('Mongo Connected');
    // Make new database instance (drops?)
    db = client.db(dbName);
    // Start express
    app.listen(port, () => {
      console.log(`Listening at port ${port}`);
    });
  })
    //Whichever connection fails
  .catch((err) => {
    console.error('Error: ', err.message);
  });



