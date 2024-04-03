const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const carSchema = new mongoose.Schema({
    carName: {
        type: String,
        required: true
    },
    carModel: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    color: {
        type: String,
    },
    year: {
        type: String,
    },
    engine: {
        type: String,
    },
    fuel: {
        type: String,
    },
    description: {
        description: String
    },
    rentalPrice: {
        type: Number,
        required: false
    },
    available: {
        type: Boolean,
        default: false
    },
    renters: [{
        type: ObjectId,
        ref: "User"
    }]
});

module.exports = mongoose.model('Car', carSchema);


