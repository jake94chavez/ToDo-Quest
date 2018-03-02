var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if (req.session.user) {
	  res.render('profile',
	  	{ title: 'ToDo-Quest',
	  	 date: new Date(),
	  	 user: req.session.user.username,
	  	 level: req.session.user.level,
	  	 quests: req.session.user.quests,
	  	 experience: req.session.user.experience
	  	})
	} else {
	  res.render('index',
	  	{ title: 'ToDo-Quest',
	  	date: new Date(),
	  	user: '',
	  	level: ''
	  })
	}
});

module.exports = router;