import alt from '../alt';
import ShowModalAction from '../actions/ShowModalAction';

class ShowModalStore {
	constructor() {
		this.bindActions(ShowModalAction);
		this.show = true;
	}
}

export default alt.createStore(ShowModalStore);