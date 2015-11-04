import alt from '../alt';
import LoginFormActions from '../actions/LoginFormActions';

class LoginFormStore {
	constructor() {
		this.bindActions(LoginFormActions);
		this.email = '';
		this.password = '';
		this.helpBlock = '';
	}

	onLoginFormSuccess(successData) {
		successData.router.transitionTo('/cart')
	}

	onLoginFormFail(errorMessage) {
		this.nameVaidationState = 'has-error';
		this.helpBlock = errorMessage;
	}

	onInvalidEmail() {
		this.helpBlock = 'Please Enter an Email id';
	}

	onInvalidPassword() {
		this.helpBlock = 'Please Enter a Password';
	}

	onUpdateEmail(event) {
		this.helpBlock = '';
		this.email = event.target.value;
	}

	onUpdatePassword(event) {
		this.helpBlock = '';
		this.password = event.target.value;
	}

	onSignUpRedirtect(redirect){
		redirect.router.transitionTo('/signUp');
	}
}

export default alt.createStore(LoginFormStore);