const Book = require('../models/book');

module.exports = {
    create
};

function create(req, res) {
    Book.findById(req.params.id, function(err, book) {
        // Update req.body to contain user info
        req.body.userId = req.user._id;
        req.body.userName = req.user.name;
        // Add the comment
        book.comments.push(req.body);
        book.save(function(err) {
            res.redirect(`/books/${book._id}`);
        });
    });
}

// function create(req, res) {
//     Book.findById(req.params.id, function(err, book) {
//         book.comments.push(req.body);
//         book.save(function(err) {
//             res.redirect(`/books/${book._id}`);
//         });
//     });
// };