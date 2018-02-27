var db = require('./models');

var questTest = [
	{
		todo: 'take out the trash',
		importance: 5,
		difficulty: 3,
		due: new Date()
	}
];

// db.Quest.remove({}, function(err, quests){
// 	if(err) {
// 		console.log('Error occured in remove', err);
// 	} else {
// 		console.log('removed all quests');

// 		db.Quest.create(questTest, function(err, quests){
// 			if(err) { return console.log('ERROR', err); }
// 			console.log('all quests:', quests);
// 			console.log('created', quests.length, 'quests');
// 			process.exit();
// 		});
// 	}
// });

var userTest = [
	{
		username: 'SouthwestSauce',
		passwordDigest: '',
		quests: [
			{
				todo: 'take out the trash',
				importance: 5,
				difficulty: 3,
				due: new Date()
			}
		]
	}
];

db.User.remove({}, function(err, users){
	if(err) {
		console.log('Error occured in remove', err);
	} else {
		console.log('removed all users');

		db.User.create(userTest, function(err, users){
			if(err) {return console.log('ERROR', err) }
			console.log('all users: ', users);
			console.log('created', users.length, 'users');
			process.exit();
		})
	}
})