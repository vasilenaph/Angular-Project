const mongoose = require('mongoose');
const { Schema } = mongoose;

const topicSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  content: {
    type: String
  },
});

module.exports = mongoose.model('Topic', topicSchema);
