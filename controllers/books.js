const Book = require('../models/book');
const Author = require('../models/author');


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
        .populate('writers').exec(function(err, book) {
            Author.find({ _id: { $nin: book.writers } }, function(err, authors) {
                console.log(authors);
                res.render('books/show', { title: 'Book Detail', book, authors });
            });
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

















// function allSearchBooks(req, res) {
//     let bookQuery = req.query.title ? { title: new RegExp(req.query.title, 'i') } : {};
//     Book.find(bookQuery, function(err, books) {
//         res.render('/books/index', {
//             books,
//             reader: req.user,
//             nameSearch: req.query.title
//         });
//     });
// };