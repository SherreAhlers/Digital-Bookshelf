const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/books/:id/comments', commentsCtrl.create);