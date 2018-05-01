var router = require('express').Router();
var db = require('../models/');
var Tweet = db.model('tweet');

router.get("/tweets", function(req, res, next) {
  if (req.query.hashtag) {
    let hashtagToSearchFor = req.query.hashtag;
    Tweet.findByHashtag(hashtagToSearchFor).then(function(tweets) {
      res.json(tweets);
    });
  } else {
    Tweet.findAll().then(function(tweets) {
      res.json(tweets);
    }).catch(err => console.log(err));
  }
});

module.exports = router;
