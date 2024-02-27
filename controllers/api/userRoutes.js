const router = require('express').Router();
const { User, Thought } = require('../../models/');
// Find all User documents
router.get('/allusers', async (req, res) => {
  try {
    const users = await User.find({}).lean();
    res.render('home', { 
      users, 
      layout: 'main',
      showPayload: false,
      showDisplay: true,
      showUsers: true  
    });
  } catch (err) {
    console.log(Error);
    res.status(500).json({ message: err });
  }
});
// Create User Documents
router.post('/', async (req, res) => {
  try {
    const newUser = new User({ 
      username: req.body.username,
      email: req.body.email,
      thoughts: req.body.thoughts,
      friends: req.body.friends, 
    });
    await newUser.save();
    const users = await User.find({}).lean();
    res.status(200).json(users);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});
// Update User documents
router.put('/:user', async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
        // Find doc matching username.
        { username: req.params.user },
        // Replaces name with new username.
        { 
          username: req.body.newUsername,
          email: req.body.newEmail,
         },
        // Return updated document.
        // { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }   
    const users = await User.find({}).lean();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});
// Delete User documents and User thoughts
router.delete('/:user', async (req, res) => {
  try {
    const userThoughts = await Thought.deleteMany({username: req.params.user})
    // console.log('Updating user:', req.params.user);
    const deletedUser = await User.findOneAndDelete({ _id: req.params.user });

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    } 
    // Need to refresh on client side?
    const users = await User.find({}).lean();
    res.render('home', { 
        users, 
        layout: 'main',
        showPayload: true,
        showDisplay: true,
        showUsers: true  
    });
    console.log('User and Thoughts deleted');
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});

// Add friends
router.post('/add/:user', async (req, res) => {
    try {
      // console.log('Adding friend to user:', req.params.user);
      const user = await User.findOne({ username: req.params.user });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }   
      //   Becuase of the user schema, mongoose automatically knows that id's pushed are object id's.
      user.friends.push(req.body.addId);
      user.save();
      // res.status(200).json(user);
      console.log('Added Friend');
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err });
    }
  });
// Remove friends
router.delete('/remove/:user', async (req, res) => {
    try {
      console.log('Removing friend from user:', req.params.user);
      const user = await User.findOne({ username: req.params.user });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }   
    // Only keep id's that do not match userId.
      user.friends = user.friends.filter((friend) => friend.toString() !== req.body.userId)
      user.save();
      res.status(200).json(user);
      console.log('Removed Friend');
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: err });
    }
  });

module.exports = router;
