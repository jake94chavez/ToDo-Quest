var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// connect db for dev environment
mongoose.connect('mongodb://localhost:27017/ToDo-Quest')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);


// bcrypt user handler
app.post('/signup',
	function(req, res){
	let username = req.body.username;

	bcrypt.hash(req.body.password, null, null, function(err, hash){
		var user = new User({username:username, password:hash})
		user.save().then(function(newUser){
			console.log('Successfuly added '+username+' to the database!')
			req.session.regenerate(function(){
				res.redirect('/index');
				req.session.user = user;
			})
		})
	});
})

app.post('/login',
	function(req, res){
		let username = req.body.username;
		let enteredPassword = req.body.password;

		new User({username: username}).fetch().then(function(found){
			if (found){
				console.log('User\'s username was found in the databse!')

				bcrypt.compare(enteredPassword, found.get('password'), function(err, res){
					if (res){
						req.session.regenerate(function(){
							console.log('password matches! redirecting...')
							response.redirect('/index')
							req.session.found = found.username;
						});
					} else {
						console.log('password did not match... redirecting to signup');
						res.redirect('/signup')
					}
				})
			} else {
				console.log('username did not match... redirecting to signup');
				res.redirect('/signup');
			}
		})
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
