const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    rating: { type: Number, min: 1, max: 5, default: 5 },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Reader'
    }
}, {
    timestamps: true
});

const bookSchema = new Schema({
    title: { type: String, required: true },
    yearPublished: {
        type: Number,
        default: function() {
            return new Date().getFullYear();
        },
        min: 1800,
        max: 2021
    },
    category: {
        type: String,
        enum: ['Fiction', 'Non-Fiction', 'Fantasy', 'Action', 'Drama', 'Comedy', 'Biography'],
        required: true
    },

    isMovieToo: { type: Boolean, default: false },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Reader'
    },
    comments: [commentSchema]

}, {
    timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);