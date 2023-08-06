const express = require('express');
const db = require('./config/config')
const { User, Thought } = require('./models/index');

const app = express();
const port = 3001;



// Sync models and connect to db.
db.once('open', () => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });



