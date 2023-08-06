const dayjs = require('dayjs')
const mongoose = require('mongoose')

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: new mongoose.Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, 
        // Format the timestamp on query.
        get: function(unix) {
            return dayjs(unix).format('YYYY-MM-DD HH:mm:ss');
        } 
    },
  });

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now, 
        // Format the timestamp on query.
        get: function(unix) {
            return dayjs(unix).format('YYYY-MM-DD HH:mm:ss');
        } 
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
  });

thoughtSchema
  .virtual('reactionCount')
  .get(function() {
    return this.reactions.length;
  })

const Thought = mongoose.model('thought', thoughtSchema);
module.exports = Thought;