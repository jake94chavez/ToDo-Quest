var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if (req.session.user) {
	  res.render('index', { title: 'ToDo-Quest', date: new Date(), user: req.session.user.username })
	} else {
	  res.render('index', { title: 'ToDo-Quest', date: new Date(), user: '' })
	}
});

module.exports = router;
