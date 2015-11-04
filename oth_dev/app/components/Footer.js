import React from 'react';
import ShowModal  from './ShowModal'

class Footer extends React.Component {

	clickShowz(){
		// ShowModal.render();
		//React.renderComponent(<ShowModal />);
	}

	render() {
		return(
			<div className="row OthFooterSection">
				<center>
					<div className="col-md-12 col-xs-12 footer1">
						<ul>
							<li><a href="/faqs">FAQs</a></li>
							<li><a href="/ppolicy">Privacy Policy</a></li>
							<li><a href="#" onClick={this.clickShow.bind(this)} >How To Avail</a></li>
							<li><a href="/contact">Contact</a></li>
						</ul>
					</div>
					<div className="col-md-12 col-sm-12 footer2">
							<div >
								Copyright © 2007-15 
								 <a target="_blank" href="http://www.commonfloor.com" className="cfFooter"> CommonFloor.com </a>   
								All rights reserved.
							</div>
					</div>
				</center>
			</div>
			)
	}
}

export default Footer;






