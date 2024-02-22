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

module.exports = router;