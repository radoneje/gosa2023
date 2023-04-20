var express = require('express');
const state = require("./../public/gosa2023/state.json");
var router = express.Router();
const fs=require('fs/promises')
const path=require('fs/promises')
/* GET home page. */
router.get('/player/:lang?', function(req, res, next) {
  let lang =req.params.lang;
  if(! (lang && lang.match(/ru|en/)))
    res.redirect("/gosa2023/player/ru")
  res.render('index', { lang });
});
router.get('/control', function(req, res, next) {

  res.render('control', );
});
router.get('/info', function(req, res, next) {

  res.render('info', );
});
router.get('/state', function(req, res, next) {

  let state=require("./../public/gosa2023/state.json")
  res.json(state)
});
router.get('/setState/:id', function(req, res, next) {
  let state=require("./../public/gosa2023/state.json")
  state.items.forEach(async (i)=>{
    if(i.id==req.params.id) {
      state.state = i.id;
      await fs.writeFile(__dirname+"/../public/gosa2023/state.json", JSON.stringify(state))
      res.json(require("./../public/gosa2023/state.json"))
    }
  })

  res.json(require("./../public/gosa2023/state.json"))
});



module.exports = router;
