var router = require('express').Router();
const readersCtrl = require('../controllers/readers');
const { NotExtended } = require('http-errors');

router.get('/', function(req, res, next) {
    res.redirect('/books');
});


module.exports = router;