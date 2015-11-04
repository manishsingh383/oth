import alt from '../alt';
import HomeAction from '../actions/HomeAction';

class HomeStore {
	constructor() {
		this.bindActions(HomeAction);
	}

	onClickClaimNow(redirect){
		redirect.router.transitionTo('/login');
	}
}

export default alt.createStore(HomeStore);