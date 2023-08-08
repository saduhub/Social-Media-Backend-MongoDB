const router = require('express').Router();
const { User } = require('../../models/');
// Find all User documents
router.get('/all', async (req, res) => {
    try {
      const users = await User.find({});
      res.status(200).json(users);
    } catch (err) {
      console.log(Error);
      res.status(500).json({ message: err });
    }
  });
// Create User documents
router.post('/createUser', (req, res) => {
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
router.put('/:user', async (req, res) => {
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
router.delete('/:user', async (req, res) => {
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

module.exports = router;
