var db = require('./models');

var questTest = [
	{
		todo: 'take out the trash',
		importance: 5,
		difficulty: 3,
		due: new Date()
	}
];

db.Quest.remove({}, function(err, quests){
	if(err) {
		console.log('Error occured in remove', err);
	} else {
		console.log('removed all quests');

		db.Quest.create(questTest, function(err, quests){
			if(err) { return console.log('ERROR', err); }
			console.log('all quests:', quests);
			console.log('created', quests.length, 'quests');
			process.exit();
		});
	}
});