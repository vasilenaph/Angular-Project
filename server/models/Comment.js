const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User' // Reference to the user who posted the comment
  },
  topic: {
    type: Schema.Types.ObjectId,
    ref: 'Topic' // Reference to the topic this comment belongs to
  },
  createdAt: {
    type: Date,
    default: Date.now
 },
});

module.exports = mongoose.model('Comment', commentSchema);
