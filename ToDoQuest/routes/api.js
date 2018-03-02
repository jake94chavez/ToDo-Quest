var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../models');

router.get('/users', function api_index (req, res) {
	db.User.find(function(err, users){
		if (err) {
			console.log('index error:' + err);
			res.sendStatus(500);
		}
		res.json(users)
	})
})
router.post('/user/quests/', (req, res) => {
  let username = req.session.user.username
  db.User.find({username: username}).then(function(found){
  	if (found.length > 0) {
	  let newQuest = new db.Quest(req.body);
	  console.log(db.User.find({username: username}))
	  db.User.find({username: username}).quests.push(newQuest)//((err, createdQuestObject) => {  //.save, saves the info
	//     if (err) {
	//         res.status(500).send(err);
	//     }                                        //numeric codes that tie in with the success and error in ajax
	//     res.status(200).send(createdQuestObject);
	//   });
	// } else {
	// 	res.redirect('/')
	}
  });
});

module.exports= router;