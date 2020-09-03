var router = require('express').Router();
const readersCtrl = require('../controllers/readers');
const { NotExtended } = require('http-errors');

// GET /students
// router.get('/all', readersCtrl.index);
router.get('/', function(req, res, next) {
    res.redirect('/books');
});


module.exports = router;