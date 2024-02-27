const router = require('express').Router();
const { Thought, User, Reaction } = require('../../models/');
// Find and display all Thought documents
router.get('/allthoughts', async (req, res) => {
  try {
    const thoughts = await Thought.find({}).lean();
    res.render('home', { 
      thoughts, 
      layout: 'main',
      showPayload: false,
      showDisplay: true, 
      showThoughts: true 
    });
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
      userId: `${req.body.username}-user`,
    });
    await newThought.save();
    // Find user by the username that is being used to create thought.
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
    return res.status(404).json({ message: 'User not found' });
    }  
    // Push thought created into thoughts array belonging to user.
    user.thoughts.push(newThought._id);
    await user.save();
    const thoughts = await Thought.find({}).lean();
    res.status(200).json(thoughts);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});
// Update Thought documents
router.put('/:thoughtId', async (req, res) => {
  try {
    const updatedThought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { thoughtText: req.body.newThought },
        { new: true }
    );
    if (!updatedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    }   
    const thoughts = await Thought.find({}).lean();
    res.status(200).json(thoughts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});
// Delete Thought documents
router.delete('/:thought', async (req, res) => {
  try {
    const thought = await Thought.findOne({ _id: req.params.thought });
    const thoughtUsername = thought.username;
    const thoughtObjId = thought._id;
    const user = await User.findOne({username: thoughtUsername});

    if (!user) {
        return res.status(404).json({ message: 'User not found' 
        });
    }
    user.thoughts = user.thoughts.filter((thought) => thought.toString() !== thoughtObjId.toString())
    await user.save();
    const deletedThought = await Thought.findOneAndDelete({ _id: req.params.thought });

    if (!deletedThought) {
      return res.status(404).json({ message: 'Thought not found' });
    } 
    const thoughts = await Thought.find({}).lean();
    res.status(200).json(thoughts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err });
  }
});
// Create reactions to store in reaction array inside each thought.
router.post('/reaction/:thoughtId', async (req, res) => {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      // Create a new Reaction document
      const newReaction = new Reaction({
          reactionBody: req.body.reactionBody, 
          username: req.body.username,
      });
      // Need to save reaction
      await newReaction.save();
      thought.reactions.push(newReaction);
      await thought.save();
      const thoughts = await Thought.find({}).lean();
      res.status(200).json(thoughts);
    }
    catch (err) {
      console.log(err);
      res.status(500).json({ message: err });
    }
  });

// Delete reactions by reaction _id value
router.delete('/reaction/:thoughtId', async (req, res) => {
    try {
      // get thought, access reactions, filter reactions with different reactionId, save
      const reactionId = req.body.reactionId;
      const thought = await Thought.findOne({ _id: req.params.thoughtId});

      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' 
        });
      }
      thought.reactions = thought.reactions.filter((reaction) => reaction._id.toString() !== reactionId);
      await thought.save();
      const deleteReaction = await Reaction.findByIdAndDelete({ _id: reactionId });
      const thoughts = await Thought.find({}).lean();
      res.status(200).json(thoughts);
    }
    catch (err) {
      console.log(err);
      res.status(500).json({ message: err });
    }
  });

module.exports = router;