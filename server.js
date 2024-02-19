const express = require('express');
const db = require('./config/config')
const routes = require('./controllers');

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Sync models and connect to db due to the db.once. Also ensures that server is listening only when the db is accessible. 
db.once('open', () => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
});



