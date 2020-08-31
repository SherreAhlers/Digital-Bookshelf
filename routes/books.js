const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/books');


router.get('/', booksCtrl.index);
// router.get('/all', booksCtrl.allBooks);
router.get('/new', booksCtrl.new);
router.get('/:id', booksCtrl.show);
router.post('/', booksCtrl.create);
// router.get('/:id/edit', booksCtrl.edit);
// router.get('/:id', booksCtrl.update);
// router.get('/:id', booksCtrl.delete);
// router.post('/:id', booksCtrl.addToUserBooks);


module.exports = router;