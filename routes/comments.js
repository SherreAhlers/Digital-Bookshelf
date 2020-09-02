const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');


router.post('/books/:id/comments', commentsCtrl.create);

router.get('/books/:id/edit', commentsCtrl.edit);
// router.post('/:id', commentsCtrl.update);
// router.get('/:id', commentsCtrl.delete);

module.exports = router;