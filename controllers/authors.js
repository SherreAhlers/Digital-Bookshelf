const Author = require('../models/author');
const Book = require('../models/book');

module.exports = {
    new: newAuthor,
    create
};


function create(req, res) {
    Author.create(req.body, function(err, author) {
        res.redirect('/authors/new');
    });
};

function newAuthor(req, res) {
    Author.find({}, function(err, authors) {
        console.log(authors, 'hitting here')
        res.render('authors/new', {
            title: 'Add Author',
            authors
        });
    });
};