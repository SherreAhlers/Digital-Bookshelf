const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    firstName: { type: String, required: true, unique: true },
    lastName: { type: String, required: true, unique: true }

}, {
    timestamps: true
});

module.exports = mongoose.model('Author', authorSchema);