const mongoose = require('mongoose');


const readerSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String
}, {
    timestamps: true
});


module.exports = mongoose.model('Reader', readerSchema);