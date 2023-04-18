var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/player/:lang?', function(req, res, next) {
  let lang =req.params.lang;
  if(! (lang && lang.match(/ru|en/)))
    res.redirect("/gosa2023/ru")
  res.render('index', { lang });
});
router.get('/control', function(req, res, next) {

  res.render('control', );
});


module.exports = router;
