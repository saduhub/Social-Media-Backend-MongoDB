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

const Reaction = mongoose.model('reaction', reactionSchema);
module.exports = Reaction;