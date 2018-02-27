var mongoose = require('mongoose');
// connect db for seed
mongoose.connect('mongodb://localhost:27017/ToDo-Quest')

module.exports.Quest = require('./quest.js')
module.exports.User = require('./user.js')