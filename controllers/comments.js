const Book = require('../models/book');

module.exports = {
    create,
    addComment,
    edit,
    updateComment,
    deleteComment


};

function create(req, res) {
    Book.findById(req.params.id, function(err, book) {
        req.body.user = req.user
        console.log(book, 'THIS IS THE BOOK!')
        console.log(req.body, 'This is req.body')
        book.comments.push(req.body);
        book.save(function(err) {
            res.redirect(`/books/${book._id}`);
        });
    });
};

function addComment(req, res, next) {
    req.user.comments.push(req.body);
    req.user.save(function(err) {
        res.redirect('/books');
    });
}


function edit(req, res) {
    Book.findById(req.params.id, function(err, book) {
        if (!book.user.equals(req.user._id)) return res.redirect('/books');
        res.render('books/edit', { book });
    });
}

function updateComment(req, res) {
    Book.findOne({ 'comments._id': req.params.id }, function(err, book) {
        const comment = book.comments.id(req.params.id);
        if (!comment.user.equals(req.user._id)) return res.redirect(`/books/${book._id}`);
        comment.content = req.body.content; // this is where the edit takes place
        book.save(function(err) {
            res.redirect(`/books/${book._id}`);
        });
    });
};

function deleteComment(req, res) {
    Book.findOne({ 'comments._id': req.params.id }, function(err, book) {
        console.log(req.params.id)
        const comment = book.comments.id(req.params.id);
        if (!comment.user.equals(req.user._id)) return res.redirect(`/books/${book._id}`);
        comment.content = req.body.content;
        comment.remove();
        book.save(function(err) {
            res.redirect(`/books/${book._id}`);
        });
    });
}