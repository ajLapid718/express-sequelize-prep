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

router.get("/tweets/:id", function(req, res, next) {
  let targetId = req.params.id;
  Tweet.findById(targetId).then(function(article) {
    res.json(article);
  }).catch(err => console.log(err));  
})

module.exports = router;
