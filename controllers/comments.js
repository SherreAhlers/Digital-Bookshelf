const Book = require('../models/book');

module.exports = {
    create,
    addComment,
    edit,
    updateComment


};

function create(req, res) {
    Book.findById(req.params.id, function(err, book) {
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
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
    console.log("we are hitting here")
    Book.findOne({ 'comments._id': req.params.id }, function(err, book) {
        const comments = book.comments.id(req.params.id);
        if (!comment.userId.equals(req.user._id)) return res.redirect(`/books/${book._id}`);
        comments.text = req.body.text;
        book.save(function(err) {
            res.redirect(`/books/${book._id}`);
        });
    });
};












// function deleteOne(req, res) {
//     Book.findOne({ 'comments._id': req.params.id }, function(err, book) {
//         const commentSubdoc = book.comments.id(req.params.id);
//         if (!commentSubdoc.userId.equals(req.user._id)) return res.redirect(`/books/${book._id}`);
//         commentSubdoc.remove();
//         book.save(function(err) {
//             res.redirect(`/books/${book._id}`);
//         });
//     });
// }