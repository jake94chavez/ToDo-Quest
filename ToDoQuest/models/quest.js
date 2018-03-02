var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestScehma = new Schema ({
	todo: String,
	importance: {
		type: Number,
		min: 1,
		max: 10,
		default: 1
	},
	difficulty: {
		type: Number,
		min: 1,
		max: 10
	},
	due: Date
})

var Quest = mongoose.model('Quest', QuestScehma);
module.exports = Quest
module.exports.Schema = QuestScehma