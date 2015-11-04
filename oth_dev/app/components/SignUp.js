import React from 'react';
import Header from './Header';
import Footer from  './Footer';

class SignUp extends React.Component {
	render() {
		return(
			<div className="container-fluid loginPage registerPage">
			<Header />	
			<div className="row othLogin">
				<div className="col-md-12 loginhead">Sign up to claim your free offer!</div>
				<div className="col-md-6">
					<center>
						<div className="socialLogin">
							<img src="img/fb.png" /> 
						    <img src="img/gp.png" />
						    <span>Don’t worry we won’t post anything without your permission</span>
						</div>
						<div className="socialLoginMobile">
							<center>
								<div className="row">
									<div className="col-xs-6"><img src="img/mobileFb.png" /></div>
									<div className="col-xs-6"><img src="img/mobileG.png" /></div>
								</div>
								<div className="row permissopnMobile">
									<span>Don’t worry we won’t post anything without your permission</span>
								</div>	 
							</center>
						</div>
					</center>
				</div>
				<div className="col-md-6 l">
						<div className="loginForm">
							<div className="loginFormWrap">
								<input type="text" placeholder="Full Name" />
								<input type="text" placeholder="Email id" />
								<input type="password" placeholder="password" />
								<input type="text" placeholder="Mobile No"  data-toggle="tooltip" data-placement="right" title="Hey, ensure you enter the same number as the one used for your commonfloor account" />
							</div>
							<div className="row">
								<div className="col-xs-6 col-sm-6 signIn">
									<input type="button" value="Sign Up" />
									<span>*mandatory fields</span>
								</div>
								<div className="col-xs-6 col-sm-6 signUp">
									<input className="pull-right" type="button" value="Sign In" />
									<span>Already registered?</span>
								</div>
							</div>
							<div className="mandy">
								
							</div>
						</div>
				</div>
			</div>
			<Footer />
			</div>
			)
	}
}

export default SignUp;