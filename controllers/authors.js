const Author = require('../models/author');
const Book = require('../models/book');
// const { NetworkAuthenticationRequire } = require('http-errors');


module.exports = {
    new: newAuthor,
    create,
    addToAuthors
};


function create(req, res) {
    Author.create(req.body, function(err, author) {
        res.redirect('/authors/new');
    });
};

function newAuthor(req, res) {
    Author.find({}, function(err, authors) {
        res.render('authors/new', {
            title: 'Add Author',
            authors
        });
    });
};

function addToAuthors(req, res) {
    Book.findById(req.params.id, function(err, books) {
        book.writers.push(req.body.authorId);
        book.save(function(err) {
            res.redirect(`/books/${book._id}`);
        });
    });
};