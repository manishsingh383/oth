import alt from '../alt';
import {assign} from 'underscore';

class LoginFormActions {
	constructor() {
		this.generateActions(
				'loginFormSuccess',
				'loginFormFail',
				'invalidEmail',
				'invalidPassword',
				'updateEmail',
				'updatePassword',
				'signUpRedirtect'
			);
	}

	login(credentials) {
		$.ajax({
			type: 'POST',
			url: '/authenticate',
			data: {email: credentials.email, password: credentials.password}
		})
		  .done((data) => {
		  	if(data.exist == false) {
		  		this.actions.loginFormFail(data.message);
		  	}
		  	else {
		  		assign(credentials, data)
		  		this.actions.loginFormSuccess(credentials);
		  	}
		  })
		  .fail((jqXhr) => {
		  	this.actions.loginFormFail(data.message);
		  });
	}
}

export default alt.createActions(LoginFormActions);