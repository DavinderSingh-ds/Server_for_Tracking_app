const mongoose = require('mongoose');

// pointSchema collects  longitude latitude, accuracy etc. varibales
const pointSchema = new mongoose.Schema({
    timestamp: Number,
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number
    }
});

const trackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: String,
        default: ''
    },
    locations: [pointSchema]
});

// we want to track only collection of track objects
mongoose.model('Track', trackSchema);