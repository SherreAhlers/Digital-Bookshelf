const Book = require('../models/book');


module.exports = {
    index,
    show,
    new: newBook,
    create
    // addToUserBooks
    // allBooks
    // edit
};

function index(req, res) {
    Book.find({}, function(err, books) {
        res.render('books/index', { title: 'All Books', books });
    });
};

function show(req, res) {
    console.log('we are hitting here')
    Book.findById(req.params.id, function(err, book) {
            res.render('books/show', { title: 'Book Details', book });
        })
        // .populate('')
}

function newBook(req, res) {
    res.render('books/new', { title: 'Add Book' });
};

function create(req, res) {
    req.body.isMovieToo = !!req.body.isMovieToo;
    console.log(req.body)
        // for (let key in req.body) {
        //     if (req.body[key] === '') delete req.body[key];
        // }
    req.body.user = req.user._id;
    const book = new Book(req.body);
    book.save(function(err) {
        // console.log(err);
        if (err) return res.redirect('books/new');
        res.redirect(`/books/${book._id}`);
    });
};

// function create(req, res) {
//     req.body.isMovieToo = !!req.body.isMovieToo;
//     console.log(req.body)
//         // for (let key in req.body) {
//         //     if (req.body[key] === '') delete req.body[key];
//         // }
//     req.body.user = req.user._id;
//     const book = new Book(req.body);
//     book.save(function(err) {
//         // console.log(err);
//         if (err) return res.redirect('books/new');
//         res.redirect(`/users/all/${book._id}`);
//     });
// };


















// function edit(req, res) {
//     Book.findById(req.params.id, function(err, book) {
//         if (!book.user.equals(req.user._id))
//             return res.redirect('/books');
//         res.render('books/edit' { book });
//     });
// };

// function addToUserBooks(req, res) {
//     Book.findById(req.params.id, function(err, book) {
//         if (book.userReading.id(req.user._id)) return res.redirct('/books');
//         book.userReading.push(req.user._id);
//         book.save(function(err) {
//             res.render('books/edit', { book });
//         });
//     })
// };

// function allUserBooks(req, res) {
//     let bookQuery = req.query.title ? { name: new RegExp(req.query.title, 'i') } : {};
//     Book.find(bookQuery, function(err, books) {
//         res.render('/books/index', {
//             books,
//             user: req.user,
//             nameSearch: req.query.name
//         });
//     });
// };