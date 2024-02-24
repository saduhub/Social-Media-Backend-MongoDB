const router = require('express').Router();
const { User, Thought } = require('../models');

// Get home page
router.get('/', async (req, res) => {
    try {
      res.render('home' , { 
        layout: 'main',
        isHomePage: true 
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get user create page
router.get('/createuser', async (req, res) => {
    try {
      const users = await User.find({}).lean();
      res.render('home', { 
        users, 
        layout: 'main',
        showPayload: true,
        showDisplay: true,
        showUsers: true,
        // Render partial
        createUserAction: true  
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get thought create page
router.get('/createthought', async (req, res) => {
    try {
      const thoughts = await Thought.find({}).lean();
      res.render('home', { 
        thoughts, 
        layout: 'main',
        showPayload: true,
        showDisplay: true,
        showThoughts: true,
        createThoughtAction: true  
      });
    } catch (err) {
      res.status(500).json(err);
    }
});
// Get reaction create page
router.get('/createreaction', async (req, res) => {
    try {
      const thoughts = await Thought.find({}).lean();
      res.render('home', { 
        thoughts, 
        layout: 'main',
        showPayload: true,
        showDisplay: true,
        showThoughts: true,
        createReactionAction: true  
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

// Get user delete page
router.get('/deleteuser', async (req, res) => {
    try {
      const users = await User.find({}).lean();
      res.render('home', { 
        users, 
        layout: 'main',
        showPayload: true,
        showDisplay: true,
        showUsers: true,
        // Render partial
        deleteUserAction: true  
      });
    } catch (err) {
      res.status(500).json(err);
    }
});
// Get thought delete page
router.get('/deletethought', async (req, res) => {
    try {
      const thoughts = await Thought.find({}).lean();
      res.render('home', { 
        thoughts, 
        layout: 'main',
        showPayload: true,
        showDisplay: true,
        showThoughts: true,
        deleteThoughtAction: true  
      });
    } catch (err) {
      res.status(500).json(err);
    }
});
// Get friend remove page
router.get('/removefriend', async (req, res) => {
    try {
      const users = await User.find({}).lean();
      res.render('home', { 
        users, 
        layout: 'main',
        showPayload: true,
        showDisplay: true,
        showUsers: true,
        removeFriendAction: true  
      });
    } catch (err) {
      res.status(500).json(err);
    }
});
// Get friend add page
router.get('/addfriend', async (req, res) => {
    try {
      const users = await User.find({}).lean();
      res.render('home', { 
        users, 
        layout: 'main',
        showPayload: true,
        showDisplay: true,
        showUsers: true,
        addFriendAction: true  
      });
    } catch (err) {
      res.status(500).json(err);
    }
});
// Get delete reaction page
router.get('/deleteReaction', async (req, res) => {
    try {
      const thoughts = await Thought.find({}).lean();
      res.render('home', { 
        thoughts, 
        layout: 'main',
        showPayload: true,
        showDisplay: true,
        showThoughts: true,
        deleteReactionAction: true  
      });
    } catch (err) {
      res.status(500).json(err);
    }
});
// Get user update page
router.get('/updateUser', async (req, res) => {
    try {
      const users = await User.find({}).lean();
      res.render('home', { 
        users, 
        layout: 'main',
        showPayload: true,
        showDisplay: true,
        showUsers: true,
        updateUserAction: true  
      });
    } catch (err) {
      res.status(500).json(err);
    }
});
// Get thought update page
router.get('/updateThought', async (req, res) => {
    try {
      const thoughts = await Thought.find({}).lean();
      res.render('home', { 
        thoughts, 
        layout: 'main',
        showPayload: true,
        showDisplay: true,
        showThoughts: true,
        updateThoughtAction: true  
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;