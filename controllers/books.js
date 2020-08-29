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
    Book.findById(req.params.id)
        // .populate('')
    res.render('books/show', { title: 'Book Details', book });
}

function newBook(req, res) {
    res.render('books/new', { title: 'Add Book' });
};

function create(req, res) {
    req.body.isMoveieToo = !!req.body.isMovieToo;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const book = new Book(req.body);
    book.save(function(err) {
        if (err) return res.render('books/new');
        console.log(book);
        res.redirect(`/books/${book._id}`);
    });
}