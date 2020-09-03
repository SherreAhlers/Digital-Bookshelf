const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');


router.post('/books/:id/comments', isLoggedIn, commentsCtrl.create);
router.post('/comments', isLoggedIn, commentsCtrl.addComment);

router.put('/comments/:id', isLoggedIn, commentsCtrl.updateComment);
router.get('/:id/edit', isLoggedIn, commentsCtrl.edit);

router.delete('/comments/:id', isLoggedIn, commentsCtrl.deleteComment)




function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;