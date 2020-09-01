var router = require('express').Router();
const readersCtrl = require('../controllers/readers');
const { NotExtended } = require('http-errors');

// GET /students
router.get('/all', readersCtrl.index);
router.get('/', function(req, res, next) {
    res.redirect('/books');
});


// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
router.post('/comments', isLoggedIn, readersCtrl.addComment);

// DELETE /facts/:id
// router.delete('/comments/:id', users.delComment);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}


module.exports = router;