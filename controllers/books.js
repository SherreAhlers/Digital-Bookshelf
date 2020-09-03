const Book = require('../models/book');

module.exports = {
    index,
    show,
    new: newBook,
    create
};

function index(req, res) {
    Book.find({}, function(err, books) {
        res.render('books/index', { title: 'All Books', books });
    });
};

function show(req, res) {
    Book.findById(req.params.id, function(err, book) {
        res.render('books/show', { title: 'Book Details', book });
    });
}

function newBook(req, res) {
    res.render('books/new', { title: 'Add Book' });
};

function create(req, res) {
    req.body.isMovieToo = !!req.body.isMovieToo;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    req.body.user = req.user._id;
    const book = new Book(req.body);
    book.save(function(err) {
        if (err) return res.redirect('books/new');
        res.redirect(`/books/${book._id}`);
    });
};