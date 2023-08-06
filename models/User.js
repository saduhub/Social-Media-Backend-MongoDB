// Mongoose used to create schemas in mongoDB
const mongoose = require('mongoose');

// Define schema using mongoose Schema class.
const userSchema = new mongoose.Schema({
    // Define properties of User with types.
    username: {
        type: String,
        unique: true,
        required: true,
        // Helps with clean and consistent data storage.
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        // Used test suite to check.
        validate: {
            validator: (email) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            },
            message: 'Invalid email',
        },
    },
    // One to many
    thoughts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'thought'
    }],
    // Self reference. Recursive, as it is a one to many, but it is self referencing.
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
    // Use built in date method to get current date
    lastAccessed: { type: Date, default: Date.now },
  });

userSchema
  .virtual('friendCount')
  .get(function() {
    return this.friends.length;
  })
// Schema is defined, but a model needs to be compiled based on the schema (Mapped by Mongoose).
const User = mongoose.model('user', userSchema);
module.exports = User;