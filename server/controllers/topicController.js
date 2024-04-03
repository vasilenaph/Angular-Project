const { Topic } = require('../models');

function getTopics(req, res, next) {
    Topic.find()
        .populate('userId')
        .then(topics => res.json(topics))
        .catch(next);
}

function getTopic(req, res, next) {
    const { topicId } = req.params;

    Topic.findById(topicId)
        .populate({
            path : 'topics',
            populate : {
              path : 'userId'
            }
          })
        .then(topic => res.json(topic))
        .catch(next);
}

module.exports = {
    getTopics,
    getTopic,
}
