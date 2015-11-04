var swig  = require('swig');
var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var bcrypt = require('bcryptjs');
var session = require('client-sessions');
var app = express();

app.set('port', process.env.PORT || 4000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	cookieName:'session',
	secret:'sdafljhl435kjh534jl1kh43513245j4531jk345',
	duration: 60*1000*43829,
	cookie: {
		maxAge: null,
		ephemeral: true,
		httpOnly: true,
		secure: false
	}
}));

var sequelize  	= new Sequelize('OTH', 'root', 'maxheap@123', {
						host: 'localhost',
						dialect: 'mysql',
						define: {
							timestamps: false
						}
					});

app.post('/authenticate', function(req, res) {
	var model = require('./models/User')(sequelize)
	var Task  = model.User;
	sequelize.sync();

		Task
		.findAll({
			attributes:['user_id','username','password'],
			where: {
				email: req.body.email
			}
		})
		.then(function(user) {
			if(user.length == 0)
				res.json({"exist": false, "error": null, "message": "No User Found"})
			else {
				if(bcrypt.compareSync(req.body.password,user[0].dataValues['password']) == true) {
					req.session.userId = user[0].dataValues['user_id'];
					res.json({"exist":true, "error": null, "message": {"userId": user[0].dataValues['user_id'] ,"userName": user[0].dataValues['username']}})
				}
				else {
					req.session.reset();
					res.json({"exist": false, "error": null, "message": "Incorrect Password"})
				}
			}
		})
		.catch(function(err) {
			res.json({"exist": false, "error": err, "message": "Some Error Occured"})
		})
});

app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('views/index.html', { html: html });
    res.send(page);
  });
});


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});