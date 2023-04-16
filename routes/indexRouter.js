var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let lang =req.params.lang;
  //if(! (lang && lang.match(/$(ru|en)^/)))
    lang="ru"
  res.render('index', { lang });
});
router.get('/ru', function(req, res, next) {
  let lang =req.params.lang;
  //if(! (lang && lang.match(/$(ru|en)^/)))
  lang="ru"
  res.render('index', { lang });
});
router.get('/en', function(req, res, next) {

  lang="en"
  res.render('index', { lang });
});

module.exports = router;
