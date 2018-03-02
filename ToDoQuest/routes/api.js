var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var db = require('../models');

router.post('/quest', (req, res) => {
  let username = req.session.user.username
  db.User.find({username: username}).then(function(){
    let quest = new db.User.Quest(req.body);
    quest.save((err, createdQuestObject) => {  //.save, saves the info
      if (err) {
          res.status(500).send(err);
      }                                        //numeric codes that tie in with the success and error in ajax
      res.status(200).send(createdQuestObject);
    });
  });
});
