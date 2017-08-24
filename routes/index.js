const express = require('express');
const router = express.Router();


router.get('/',(req,res,next) => {
  res.render('index');
});
router.get('/connect', (req,res,next) => {
  res.render('connect');
});

module.exports = router;
