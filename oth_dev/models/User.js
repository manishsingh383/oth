var Sequelize = require('sequelize')

module.exports = function(sequelize) {
	var User = sequelize.define('users', {
		user_id: {type: Sequelize.INTEGER(11).UNSIGNED, primaryKey: true, autoIncrement: true },
		username: Sequelize.STRING,
		email: Sequelize.STRING,
		password: Sequelize.STRING,
		phone: Sequelize.INTEGER(10).UNSIGNED
	});
	return {
		User:User
	};	
};

