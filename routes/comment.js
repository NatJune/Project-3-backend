var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments');

router.get('/comment', commentsCtrl.index);
router.post('/comment', commentsCtrl.create);
router.put('/comment/:id', commentsCtrl.update);
router.delete('/comment/:id', commentsCtrl.delete);

module.exports = router;