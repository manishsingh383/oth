import React from 'react';
import Header from './Header';
import Footer from  './Footer';

class PrivacyPolicy extends React.Component {

	
	render() {
		return(
			 <div className="container-fluid pp">
			 	<Header />
			    <div className="row privacyPloicy">
					<div className="headerFaq">
						<label>Privacy Policy</label>
					</div>

				</div>
				<Footer />
			</div>
			)
	}
}

export default PrivacyPolicy;