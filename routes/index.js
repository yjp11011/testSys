var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.send("<h1>welcome to express</h1>");
=======
  res.render('index', { title: 'Express' });
>>>>>>> f5963a19fa2f6dd2c297ffd5345b2d3b77a4c394
});

module.exports = router;
