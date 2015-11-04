import React from 'react';
import Header from './Header';
import Footer from  './Footer';

class Contact extends React.Component {

	
	render() {
		return(
			 <div className="container-fluid pp">
			 	<Header />
			    <div className="row privacyPloicy">
					<div className="headerFaq">
						<label>Contact</label>
					</div>

				</div>
				<Footer />
			</div>
			)
	}
}

export default Contact;