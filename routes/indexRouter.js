var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:lang?', function(req, res, next) {
  let lang =req.params.lang;
  if(! (lang && lang.match(/$(ru|en)^/)))
    res.redirect("/gosa2023/ru")
  res.render('index', { lang });
});


module.exports = router;
