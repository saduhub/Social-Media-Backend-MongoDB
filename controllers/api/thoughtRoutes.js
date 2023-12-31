const router = require('express').Router();
const { Thought, User, Reaction } = require('../../models/');
// Find all Thought documents
router.get('/all', async (req, res) => {
    try {
      const thoughts = await Thought.find({});
      res.status(200).json(thoughts);
    } catch (err) {
      console.log(Error);
      res.status(500).json({ message: err });
    }
  });
// Create Thought documents and save reference to user.
router.post('/', async (req, res) => {
  try {
    const newThought = new Thought({ 
      thoughtText: req.body.thoughtText,
      username: req.body.username,
      userId: req.body.userId,
    });
    // Add error handling here later.
    newThought.save();
    // Find user by the username that is being used to create thought.
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
    return res.status(404).json({ message: 'User not found' });
    }  
    // Push thought created into thoughts array belonging to user.
    user.thoughts.push(newThought._id);
    user.save();
    res.status(200).json(newThought);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});
// Update Thought documents
router.put('/:userId', async (req, res) => {
  try {
    console.log('Updating thought:', req.params.userId);
    const updatedThought = await Thought.findOneAndUpdate(
        { userId: req.params.userId },
        { thoughtText: req.body.thoughtText },
        { new: true }
    );
    if (!updatedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }   
    res.status(200).json(updatedThought);
    console.log('Success');
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});
// Delete Thought documents
router.delete('/:userId', async (req, res) => {
  try {
    const thought = await Thought.findOne({ userId: req.params.userId });
    const thoughtUsername = thought.username;
    const thoughtObjId = thought._id;
    // console.log(thoughtUsername);
    // console.log(thoughtObjId);
    const user = await User.findOne({username: thoughtUsername});

    if (!user) {
        return res.status(404).json({ message: 'User not found' 
        });
    }
    console.log(user);
    user.thoughts = user.thoughts.filter((thought) => thought.toString() !== thoughtObjId.toString())
    // console.log(user.thoughts);
    user.save();

    const deletedThought = await Thought.findOneAndDelete({ userId: req.params.userId });

    if (!deletedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    } 
    res.status(200).json(deletedThought);
    console.log('Thought deleted');
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});
// Create reactions to store in reaction array inside each thought.
router.post('/reaction/:userId', async (req, res) => {
    try {
      const thought = await Thought.findOne({ userId: req.params.userId });

      // Create a new Reaction document
      const newReaction = new Reaction({
          reactionBody: req.body.reactionBody, 
          username: req.body.username,
      });
      console.log(newReaction);
      // Need to save reaction
      newReaction.save();
      thought.reactions.push(newReaction);
      // Add error handling here later.
      thought.save();
      res.status(200).json(thought);
    }
    catch (err) {
      console.log(err);
      res.status(500).json({ message: err });
    }
  });

// Delete reactions by readctionId value
router.delete('/reaction/:userId', async (req, res) => {
    try {
      // get thought, access reactions, filter reactions with different reactionId, save
      const reactionId = req.body.reactionId;
      const thought = await Thought.findOne({ userId: req.params.userId});

      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' 
        });
      }
      thought.reactions = thought.reactions.filter((reaction) => reaction._id.toString() !== reactionId);
      thought.save();
      const deleteReaction = await Reaction.findByIdAndDelete({ _id: req.body.reactionId });
      res.status(200).json(deleteReaction);
    }
    catch (err) {
      
    }
  });

module.exports = router;