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
	level: {
		type: Number,
		default: 0
	},
	experience: {
		type: Number,
		default: 0
	},
	quests: [Quest.Schema]
})

var User = mongoose.model('User', UserSchema)
module.exports = User