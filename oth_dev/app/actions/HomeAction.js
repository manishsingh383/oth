import alt from '../alt';
import {assign} from 'underscore';

class HomeActions{
	constructor() {
		this.generateActions(
			'clickClaimNow'
		);
	}
}

export default alt.createActions(HomeActions);