const express = require('express');
const db = require('./config/config')
const { User, Thought } = require('./models/index');

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Find all User documents
app.get('/users', async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (err) {
      console.log(Error);
      res.status(500).json({ message: err });
    }
  });
// Create User documents
app.post('/users', (req, res) => {
  try {
    const newUser = new User({ 
      username: req.body.username,
      email: req.body.email,
      thoughts: req.body.thoughts,
      friends: req.body.friends, 
    });
    newUser.save();
    res.status(200).json(newUser);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});
// Update User documents
app.put('/:user', async (req, res) => {
  try {
    // console.log('Updating user:', req.params.user);
    const updatedUser = await User.findOneAndUpdate(
        // Find doc matching username.
        { username: req.params.user },
        // Replaces name with new username.
        { 
          username: req.body.username,
          email: req.body.email,
         },
        // Return updated document.
        { new: true }
      );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }   
    res.status(200).json(updatedUser);
    console.log('Success');
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});
// Delete User documents
app.delete('/:user', async (req, res) => {
  try {
    // console.log('Updating user:', req.params.user);
    const deletedUser = await User.findOneAndDelete({ username: req.params.user });

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    } 

    res.status(200).json(deletedUser);
    console.log('User deleted');
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

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



