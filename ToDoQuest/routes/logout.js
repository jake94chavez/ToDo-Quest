var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.destroy();
  res.render('index', { title: 'ToDo-Quest',
  	date: new Date(),
  	user: '',
  	level: ''
  });
});

module.exports = router;
