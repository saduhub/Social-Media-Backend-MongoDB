const express = require('express');
const db = require('./config/config')
const { User, Thought } = require('./models/index');

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(require('./controllers/'));
// Finds all Thought documents
app.get('/thoughts', async (req, res) => {
    try {
      const thoughts = await Thought.find({});
      res.status(200).json(thoughts);
    } catch (err) {
      console.log(Error);
      res.status(500).json({ message: err });
    }
  });

// Sync models and connect to db due to the db.once. Also ensures that server is listening only when the db is accessible. 
db.once('open', () => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });



