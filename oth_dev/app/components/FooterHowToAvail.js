import React from 'react';
import Header from './Header';
import Footer from  './Footer';
import HowToAvail from  './HowToAvail';

class FooterHowToAvail extends React.Component {

	
	render() {
		return(
			 <div className="container-fluid pp">
			 	<Header />
			 	<div className="row hta">
			 		<HowToAvail />
			 	</div>
			    
				<Footer />
			</div>
			)
	}
}

export default FooterHowToAvail;