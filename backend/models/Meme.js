const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Meme schema
const MemeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = Meme = mongoose.model('meme', MemeSchema);