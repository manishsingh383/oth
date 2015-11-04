import React from 'react';

class HowToAvail extends React.Component {

	render() {
		return (
			<div>
				<div className="availHeader">
						<div>Heres how to avail your gifts</div>
						<div className="col-md-6 col-xs-6 orange"></div>
						<div className="col-md-6 col-xs-6 brown"></div>
				</div>
				<div className="col-xs-12 col-md-6 tiles">
					<div className="col-xs-3">
						<img className="img-responsive" src="img/claimNow.png" />
					</div>
					<div className="col-xs-9 text">
						Go to "Claim Now" & submit your 
						property details and documents
					</div>
				</div>
				<div className="col-xs-12 col-md-6  tiles">
					<div className="col-xs-3">
						<img className="img-responsive" src="img/browse.png" />
					</div>
					<div className="col-xs-9 text">
						Browse through the list of free offers
					</div>
				</div>	
				<div className="col-xs-12 col-md-6  tiles">
					<div className="col-xs-3">
						<img className="img-responsive" src="img/cart.png" />
					</div>
					<div className="col-xs-9 text">
						Add the free offers you like to your 
						cart & checkout
					</div>
				</div>
				<div className="col-xs-12 col-md-6  tiles">
					<div className="col-xs-3">
						<img className="img-responsive" src="img/post.png" />
					</div>
					<div className="col-xs-9 text">
						Post-verification (max 1 - 2 working days), 
						you will receive the discount codes
					</div>
				</div>
			</div>
		)
	}
}


export default HowToAvail;