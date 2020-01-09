const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    //schema for a test data
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required : true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('models', testSchema);