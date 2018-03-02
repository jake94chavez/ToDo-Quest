var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var session = require('express-session');

var db = require('./models');

var index = require('./routes/index');
var users = require('./routes/users');
var signup = require('./routes/signup');
var login = require('./routes/login');
var userexists = require('./routes/userexists');
var profile = require('./routes/profile');
var logout = require('./routes/logout');
var api = require('./routes/api');

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
app.use(session({secret: 'keyoard cat', cookie: {maxage: 60000}}));

app.use('/', index);
app.use('/users', users);
app.use('/signup', signup);
app.use('/login', login);
app.use('/userexists', userexists)
app.use('/profile', profile)
app.use('/logout', logout)


// bcrypt user handler
var User = require('./models/user')
app.post('/signup',
	function(req, res){
	let username = req.body.username;
	db.User.find({username: username}).then(function(found){
		if (found.length > 0) {
			res.redirect('/userexists')
		} else {	
			bcrypt.genSalt(10, function(err, salt) {
				bcrypt.hash(req.body.password, salt, function(err, hash){
					var user = new User({username:username, passwordDigest:hash})
					user.save().then(function(newUser){
						console.log('Successfuly added '+username+' to the database!')
						req.session.regenerate(function(){
							req.session.user = user;
							console.log(req.session.user);
							res.redirect('/')
						})
					})
				});
			})
		}
	})
})

app.post('/login',
	function(req, response){
		let username = req.body.username;
		let enteredPassword = req.body.password;

		db.User.find({username: username}).then(function(found){
			if (found.length > 0){
				console.log('User\'s username was found in the databse!')
				var user = found[0]

				bcrypt.compare(enteredPassword, found[0].passwordDigest, function(err, res){
					if (res){
						req.session.regenerate(function(){
							console.log('password matches! redirecting...')
							req.session.user = user
							req.session.found = found.username;
							response.redirect('/')
						});
					} else {
						console.log('password did not match... redirecting to signup');
						response.redirect('/login')
					}
				})
			} else {
				console.log('username did not match... redirecting to signup');
				response.redirect('/login');
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
