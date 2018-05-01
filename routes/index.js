var router = require('express').Router();
var db = require('../models/');
var Tweet = db.model('tweet');

router.get("/tweets", function(req, res, next) {
  res.json([]);
})

module.exports = router;
