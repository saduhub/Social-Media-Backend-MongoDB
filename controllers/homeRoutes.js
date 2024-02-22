const router = require('express').Router();

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

module.exports = router;