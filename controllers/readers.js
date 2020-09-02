const Reader = require('../models/reader');
const Book = require('../models/book');

module.exports = {
    index,
    addComment
    // delComment
};

function index(req, res, next) {
    console.log(req.query)
        // Make the query object to use with Student.find based up
        // the user has submitted the search form or now
    let modelQuery = req.query.title ? { title: new RegExp(req.query.title, 'i') } : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'title';
    Reader.find(modelQuery)
        .sort(sortKey).exec(function(err, readers) {
            if (err) return next(err);
            // Passing search values, name & sortKey, for use in the EJS
            res.render('books/index', { readers, name: req.query.name, sortKey });
        });
};

function addComment(req, res, next) {
    // This is VERY IMPORTANT TO REMEMBER
    // req.user IS this Mongoose doc for the logged in user
    req.user.comments.push(req.body);
    req.user.save(function(err) {
        res.redirect('/books');
    });
}

// function delComent(req, res, next) {

// }