var express = require('express');
var router = express.Router();
var expertsCtrl = require('../controllers/experts');
var admin = require("firebase-admin");
var serviceAccount = require("../project-3-c0409-firebase-adminsdk-cvx4g-2cc3122e84.json");

router.get('/', isAuthenticated, expertsCtrl.index);
router.post('/', isAuthenticated, expertsCtrl.create);
router.put('/:id', isAuthenticated, expertsCtrl.update);
router.delete('/:id', isAuthenticated, expertsCtrl.delete);


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
  

  
  async function isAuthenticated(req, res, next) {
      const token = req.get('Authorization');
      if(!token) return res.status(401).json({error: 'user needs to be logged in first'})
      const user = await admin.auth().verifyIdToken(token.replace('Bearer ', ''));
      console.log(user)
      req.user = user;
      next();
  }
module.exports = router;