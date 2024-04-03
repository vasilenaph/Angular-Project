const Topic = require('../models/Topic');

exports.getAll = () => Topic.find();

exports.getOne = (topicId) => Topic.findById(topicId);


