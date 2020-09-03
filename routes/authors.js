const express = require('express');
const router = express.Router();
const authorsCtrl = require('../controllers/authors');

router.get('/authors/new', authorsCtrl.new);
router.post('/authors', authorsCtrl.create);
router.post('/books/:id/authors', authorsCtrl.addToAuthors);