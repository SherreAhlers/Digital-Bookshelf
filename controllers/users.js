const User = require('../models/user');

module.exports = {
    index,
    addComment
    // delComment
};

function index(req, res, next) {
    console.log(req.query)
        // Make the query object to use with Student.find based up
        // the user has submitted the search form or now
    let modelQuery = req.query.name ? { name: new RegExp(req.query.title, 'i') } : {};
    // Default to sorting by name
    let sortKey = req.query.name || 'name';
    User.find(modelQuery)
        .sort(sortKey).exec(function(err, users) {
            if (err) return next(err);
            // Passing search values, name & sortKey, for use in the EJS
            res.render('index', { users, name: req.query.name, sortKey });
        });
}

function addComment(req, res, next) {
    // This is VERY IMPORTANT TO REMEMBER
    // req.user IS this Mongoose doc for the logged in user
    req.user.comments.push(req.body);
    req.user.save(function(err) {
        res.redirect('/users');
    });
}

// function delComent(req, res, next) {

// }