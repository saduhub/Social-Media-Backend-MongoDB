const mongoose = require('mongoose');
require('dotenv').config();
// Use mongoose to connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION);
// Export connection
module.exports = mongoose.connection;