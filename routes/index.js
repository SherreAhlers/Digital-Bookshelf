var express = require('express');
var router = express.Router();
const passport = require('passport');


router.get('/', function(req, res, next) {
    res.render('index', { title: 'Digital Bookshelf' });
});

router.get('/', function(req, res, next) {
    res.redirect('/readers');
});

router.get('/auth/google', passport.authenticate(
    'google', { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
    'google', {
        successRedirect: '/readers',
        failureRedirect: '/readers'
    }
));

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});



module.exports = router;