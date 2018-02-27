var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Quest = require('./quest');

var UserSchema = new Schema ({
	username: {
		type: String,
		minlength: 8,
		maxlength:20
	},
	passwordDigest: String,
	quests: [Quest.Schema]
})

var User = mongoose.model('User', UserSchema)
module.exports = User