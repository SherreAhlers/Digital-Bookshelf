const Reader = require('../models/reader');
const Book = require('../models/book');

module.exports = {
    index

};

function index(req, res, next) {
    let modelQuery = req.query.title ? { title: new RegExp(req.query.title, 'i') } : {};
    let sortKey = req.query.sort || 'title';
    Reader.find(modelQuery)
        .sort(sortKey).exec(function(err, readers) {
            if (err) return next(err);
            res.render('books/index', { users, title: req.query.name, sortKey });
        });
};




















// function deleteComment(req, res) {
//     Book.findOne({ 'comments._id': req.params.id }, function(err, book) {
//         const commentSubdoc = book.comments.id(req.params.id);
//         if (!commentSubdoc.userId.equals(req.user._id)) return res.redirect(`/books/${book._id}`);
//         commentSubdoc.remove();
//         book.save(function(err) {
//             res.redirect(`/books/${book._id}`);
//         });
//     });
// }