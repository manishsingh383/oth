import React from 'react';
import Footer from  './Footer';
import HowToAvail from './HowToAvail';
import HomeCompanyLogos from './HomeCompanyLogos';
import HomeAction from '../actions/HomeAction';
import HomeStore from '../stores/HomeStore';



class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = HomeStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		HomeStore.listen(this.onChange);
	}

	componentWillMount() {
		HomeStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	handleClaimNow(){
		HomeAction.clickClaimNow({
			router:this.context.router
		});
	}


  render() {
    return (
        <div className="container-fluid ">
			<div className="row homePage">
				<div className="hpWrap">
					<img className="bgImage img-responsive" src="img/Background.jpg" />
					<div className="onTopHomeImage">
						<center>
							<div className="onTopHomeImageContent">
								<label>
									 Found a house via CommonFloor?
									<span className="tagline">A whole bunch of free house warming gifts await you!</span>
								</label>
								<img className="othLogo" src="img/oth_logo1.png" />
								<label className="poweredBy"> Powered By</label>
								<a target="_blank" href="http://www.commonfloor.com"><img src="img/cf_logo.png" /></a>
							</div>
						</center>
						<div className="companyLogosMobile">
							<HomeCompanyLogos />
						</div>
						<div className="circleHome">
							<center>
								<img src="img/circleH.png" />
							</center>
						</div>
					</div>
				</div>

				<div className="companyLogos">
					<HomeCompanyLogos />
				</div>
				<div className="howToavail" >
					<HowToAvail />
					<div className="col-md-12 aruready">
						<center>
								<label>Are you ready?</label>
								<input type="button" value="Claim Now" onClick={this.handleClaimNow.bind(this)}  />
						</center>
					</div>	
				</div>
			</div>
			<Footer />		
		</div>
    );
  }
}

Home.contextTypes = {
 router: React.PropTypes.func.isRequired
};

export default Home;