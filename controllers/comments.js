const Book = require('../models/book');
// const { model } = require('../models/book');

module.exports = {
    create
};

function create(req, res) {
    Book.findById(req.params.id, function(err, book) {
        book.comments.push(req.body);
        book.save(function(err) {
            res.redirect(`/books/${book._id}`);
        });
    });
};