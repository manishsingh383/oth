import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Cart from './components/Cart';
import SignUp from './components/SignUp';
import CartOutside from './components/CartOutside';
import Faqs from './components/Faqs';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';
import howtoavail from './components/FooterHowToAvail';
import ShowModal from './components/ShowModal';


export default (
  <Route handler={App}>
    <Route path='/' handler={Home} />
    <Route path='/login'  handler={Login} />
    <Route path='/cart'   handler={Cart} />
    <Route path='/signUp' handler={SignUp} />
    <Route path='/cartOutside' handler={CartOutside} />
    <Route path='/faqs' handler={Faqs} />
    <Route path='/ppolicy' handler={PrivacyPolicy} />
    <Route path='/contact' handler={Contact} />
    <Route path='/howtoavail' handler={howtoavail} />
     <Route path='/showModal' handler={ShowModal} />
  </Route>
);