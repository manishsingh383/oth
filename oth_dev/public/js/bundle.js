(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

var HomeActions = function HomeActions() {
	_classCallCheck(this, HomeActions);

	this.generateActions('clickClaimNow');
};

exports['default'] = _alt2['default'].createActions(HomeActions);
module.exports = exports['default'];

},{"../alt":4,"underscore":"underscore"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

var LoginFormActions = (function () {
	function LoginFormActions() {
		_classCallCheck(this, LoginFormActions);

		this.generateActions('loginFormSuccess', 'loginFormFail', 'invalidEmail', 'invalidPassword', 'updateEmail', 'updatePassword', 'signUpRedirtect');
	}

	_createClass(LoginFormActions, [{
		key: 'login',
		value: function login(credentials) {
			var _this = this;

			$.ajax({
				type: 'POST',
				url: '/authenticate',
				data: { email: credentials.email, password: credentials.password }
			}).done(function (data) {
				if (data.exist == false) {
					_this.actions.loginFormFail(data.message);
				} else {
					(0, _underscore.assign)(credentials, data);
					_this.actions.loginFormSuccess(credentials);
				}
			}).fail(function (jqXhr) {
				_this.actions.loginFormFail(data.message);
			});
		}
	}]);

	return LoginFormActions;
})();

exports['default'] = _alt2['default'].createActions(LoginFormActions);
module.exports = exports['default'];

},{"../alt":4,"underscore":"underscore"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

var ShowModalAction = (function () {
	function ShowModalAction() {
		_classCallCheck(this, ShowModalAction);
	}

	_createClass(ShowModalAction, [{
		key: 'showClickData',
		value: function showClickData() {
			// alert( $('.clickBtn').val());
		}
	}]);

	return ShowModalAction;
})();

exports['default'] = _alt2['default'].createActions(ShowModalAction);
module.exports = exports['default'];

},{"../alt":4,"underscore":"underscore"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

exports['default'] = new _alt2['default']();
module.exports = exports['default'];

},{"alt":"alt"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(_reactRouter.RouteHandler, null)
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;
module.exports = exports['default'];

},{"react":"react","react-router":"react-router"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Cart = (function (_React$Component) {
	_inherits(Cart, _React$Component);

	function Cart() {
		_classCallCheck(this, Cart);

		_get(Object.getPrototypeOf(Cart.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Cart, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				'hello from cart'
			);
		}
	}]);

	return Cart;
})(_react2['default'].Component);

exports['default'] = Cart;
module.exports = exports['default'];

},{"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var CartOutside = (function (_React$Component) {
	_inherits(CartOutside, _React$Component);

	function CartOutside() {
		_classCallCheck(this, CartOutside);

		_get(Object.getPrototypeOf(CartOutside.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(CartOutside, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'container-fluid ' },
				_react2['default'].createElement(
					'div',
					{ className: 'row OthHeaderSection' },
					_react2['default'].createElement(
						'div',
						{ className: 'header1' },
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-6 col-md-6' },
							_react2['default'].createElement(
								'div',
								{ className: 'col-sm-12 imgLogoWrap' },
								_react2['default'].createElement(
									'a',
									{ href: '/' },
									_react2['default'].createElement('img', { src: 'img/oth_logo.jpg' }),
									' '
								)
							)
						),
						_react2['default'].createElement('div', { className: 'col-md-6 col-sm-6' })
					),
					_react2['default'].createElement(
						'div',
						{ className: 'borderHeader' },
						_react2['default'].createElement('div', { className: 'col-md-6 col-xs-6 orange' }),
						_react2['default'].createElement('div', { className: 'col-md-6 col-xs-6 brown' })
					),
					_react2['default'].createElement(
						'div',
						{ className: 'header2' },
						_react2['default'].createElement(
							'div',
							{ className: 'filterWrapper' },
							_react2['default'].createElement(
								'center',
								null,
								_react2['default'].createElement(
									'ul',
									{ className: 'filterMenu' },
									'Category >',
									_react2['default'].createElement(
										'li',
										null,
										'Home Loans'
									),
									_react2['default'].createElement(
										'li',
										null,
										'Furnitures'
									),
									_react2['default'].createElement(
										'li',
										null,
										'Home Services'
									),
									_react2['default'].createElement(
										'li',
										null,
										'Relocation'
									),
									_react2['default'].createElement(
										'li',
										null,
										'Appliances'
									),
									_react2['default'].createElement(
										'li',
										null,
										'Health & Fitness'
									),
									_react2['default'].createElement(
										'li',
										{ className: 'lilast' },
										_react2['default'].createElement(
											'select',
											null,
											_react2['default'].createElement(
												'option',
												null,
												'Others'
											)
										)
									)
								)
							)
						)
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'row offersPageDT' },
					_react2['default'].createElement(
						'div',
						{ className: 'offerTilesWrap' },
						_react2['default'].createElement(
							'div',
							{ className: 'col-md-4' },
							_react2['default'].createElement(
								'div',
								{ className: 'offerImgWrap' },
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 col-md-12 mobileImgWrap' },
									_react2['default'].createElement('img', { className: 'offerImg', src: 'img/offerImg.png' })
								),
								_react2['default'].createElement(
									'div',
									{ className: 'offerImgTopInfo col-xs-6' },
									_react2['default'].createElement(
										'div',
										{ className: 'logoWrap' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-7 offerText' },
											'GET RS.5000 OFF ON FURNITURE SHOPPING'
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-5' },
											_react2['default'].createElement('img', { className: 'pull-right', src: 'img/ulLogo.png' })
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'showOnHover' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-8 vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-4 btnAddCart' },
											_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
										)
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 mobileOfferInfoDetails' },
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12  offerText' },
										'GET RS.5000 OFF ON FURNITURE SHOPPING',
										_react2['default'].createElement(
											'div',
											{ className: 'vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12 ' },
										_react2['default'].createElement('img', { src: 'img/ulLogo.png' })
									),
									_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-md-4' },
							_react2['default'].createElement(
								'div',
								{ className: 'offerImgWrap' },
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 col-md-12 mobileImgWrap' },
									_react2['default'].createElement('img', { className: 'offerImg', src: 'img/offerImg.png' })
								),
								_react2['default'].createElement(
									'div',
									{ className: 'offerImgTopInfo col-xs-6' },
									_react2['default'].createElement(
										'div',
										{ className: 'logoWrap' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-7 offerText' },
											'GET RS.5000 OFF ON FURNITURE SHOPPING'
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-5' },
											_react2['default'].createElement('img', { className: 'pull-right', src: 'img/ulLogo.png' })
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'showOnHover' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-8 vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-4 btnAddCart' },
											_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
										)
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 mobileOfferInfoDetails' },
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12  offerText' },
										'GET RS 5000 OFF ON FURNITURE SHOPPING',
										_react2['default'].createElement(
											'div',
											{ className: 'vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12 ' },
										_react2['default'].createElement('img', { src: 'img/ulLogo.png' })
									),
									_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-md-4' },
							_react2['default'].createElement(
								'div',
								{ className: 'offerImgWrap' },
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 col-md-12 mobileImgWrap' },
									_react2['default'].createElement('img', { className: 'offerImg', src: 'img/offerImg.png' })
								),
								_react2['default'].createElement(
									'div',
									{ className: 'offerImgTopInfo col-xs-6' },
									_react2['default'].createElement(
										'div',
										{ className: 'logoWrap' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-7 offerText' },
											'GET RS.5000 OFF ON FURNITURE SHOPPING'
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-5' },
											_react2['default'].createElement('img', { className: 'pull-right', src: 'img/ulLogo.png' })
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'showOnHover' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-8 vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-4 btnAddCart' },
											_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
										)
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 mobileOfferInfoDetails' },
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12  offerText' },
										'GET RS.5000 OFF ON FURNITURE SHOPPING',
										_react2['default'].createElement(
											'div',
											{ className: 'vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12 ' },
										_react2['default'].createElement('img', { src: 'img/ulLogo.png' })
									),
									_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
								)
							)
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'offerTilesWrap' },
						_react2['default'].createElement(
							'div',
							{ className: 'col-md-4' },
							_react2['default'].createElement(
								'div',
								{ className: 'offerImgWrap' },
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 col-md-12 mobileImgWrap' },
									_react2['default'].createElement('img', { className: 'offerImg', src: 'img/offerImg.png' })
								),
								_react2['default'].createElement(
									'div',
									{ className: 'offerImgTopInfo col-xs-6' },
									_react2['default'].createElement(
										'div',
										{ className: 'logoWrap' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-7 offerText' },
											'GET RS.5000 OFF ON FURNITURE SHOPPING'
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-5' },
											_react2['default'].createElement('img', { className: 'pull-right', src: 'img/ulLogo.png' })
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'showOnHover' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-8 vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-4 btnAddCart' },
											_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
										)
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 mobileOfferInfoDetails' },
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12  offerText' },
										'GET RS.5000 OFF ON FURNITURE SHOPPING',
										_react2['default'].createElement(
											'div',
											{ className: 'vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12 ' },
										_react2['default'].createElement('img', { src: 'img/ulLogo.png' })
									),
									_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-md-4' },
							_react2['default'].createElement(
								'div',
								{ className: 'offerImgWrap' },
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 col-md-12 mobileImgWrap' },
									_react2['default'].createElement('img', { className: 'offerImg', src: 'img/offerImg.png' })
								),
								_react2['default'].createElement(
									'div',
									{ className: 'offerImgTopInfo col-xs-6' },
									_react2['default'].createElement(
										'div',
										{ className: 'logoWrap' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-7 offerText' },
											'GET RS.5000 OFF ON FURNITURE SHOPPING'
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-5' },
											_react2['default'].createElement('img', { className: 'pull-right', src: 'img/ulLogo.png' })
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'showOnHover' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-8 vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-4 btnAddCart' },
											_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
										)
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 mobileOfferInfoDetails' },
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12  offerText' },
										'GET RS.5000 OFF ON FURNITURE SHOPPING',
										_react2['default'].createElement(
											'div',
											{ className: 'vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12 ' },
										_react2['default'].createElement('img', { src: 'img/ulLogo.png' })
									),
									_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-md-4' },
							_react2['default'].createElement(
								'div',
								{ className: 'offerImgWrap' },
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 col-md-12 mobileImgWrap' },
									_react2['default'].createElement('img', { className: 'offerImg', src: 'img/offerImg.png' })
								),
								_react2['default'].createElement(
									'div',
									{ className: 'offerImgTopInfo col-xs-6' },
									_react2['default'].createElement(
										'div',
										{ className: 'logoWrap' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-7 offerText' },
											'GET RS.5000 OFF ON FURNITURE SHOPPING'
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-5' },
											_react2['default'].createElement('img', { className: 'pull-right', src: 'img/ulLogo.png' })
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'showOnHover' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-8 vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-4 btnAddCart' },
											_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
										)
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 mobileOfferInfoDetails' },
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12  offerText' },
										'GET RS.5000 OFF ON FURNITURE SHOPPING',
										_react2['default'].createElement(
											'div',
											{ className: 'vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12 ' },
										_react2['default'].createElement('img', { src: 'img/ulLogo.png' })
									),
									_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
								)
							)
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'offerTilesWrap' },
						_react2['default'].createElement(
							'div',
							{ className: 'col-md-4' },
							_react2['default'].createElement(
								'div',
								{ className: 'offerImgWrap' },
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 col-md-12 mobileImgWrap' },
									_react2['default'].createElement('img', { className: 'offerImg', src: 'img/offerImg.png' })
								),
								_react2['default'].createElement(
									'div',
									{ className: 'offerImgTopInfo col-xs-6' },
									_react2['default'].createElement(
										'div',
										{ className: 'logoWrap' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-7 offerText' },
											'GET RS.5000 OFF ON FURNITURE SHOPPING'
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-5' },
											_react2['default'].createElement('img', { className: 'pull-right', src: 'img/ulLogo.png' })
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'showOnHover' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-8 vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-4 btnAddCart' },
											_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
										)
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 mobileOfferInfoDetails' },
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12  offerText' },
										'GET RS.5000 OFF ON FURNITURE SHOPPING',
										_react2['default'].createElement(
											'div',
											{ className: 'vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12 ' },
										_react2['default'].createElement('img', { src: 'img/ulLogo.png' })
									),
									_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-md-4' },
							_react2['default'].createElement(
								'div',
								{ className: 'offerImgWrap' },
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 col-md-12 mobileImgWrap' },
									_react2['default'].createElement('img', { className: 'offerImg', src: 'img/offerImg.png' })
								),
								_react2['default'].createElement(
									'div',
									{ className: 'offerImgTopInfo col-xs-6' },
									_react2['default'].createElement(
										'div',
										{ className: 'logoWrap' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-7 offerText' },
											'GET RS.5000 OFF ON FURNITURE SHOPPING'
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-5' },
											_react2['default'].createElement('img', { className: 'pull-right', src: 'img/ulLogo.png' })
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'showOnHover' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-8 vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-4 btnAddCart' },
											_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
										)
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 mobileOfferInfoDetails' },
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12  offerText' },
										'GET RS.5000 OFF ON FURNITURE SHOPPING',
										_react2['default'].createElement(
											'div',
											{ className: 'vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12 ' },
										_react2['default'].createElement('img', { src: 'img/ulLogo.png' })
									),
									_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-md-4' },
							_react2['default'].createElement(
								'div',
								{ className: 'offerImgWrap' },
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 col-md-12 mobileImgWrap' },
									_react2['default'].createElement('img', { className: 'offerImg', src: 'img/offerImg.png' })
								),
								_react2['default'].createElement(
									'div',
									{ className: 'offerImgTopInfo col-xs-6' },
									_react2['default'].createElement(
										'div',
										{ className: 'logoWrap' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-7 offerText' },
											'GET RS.5000 OFF ON FURNITURE SHOPPING'
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-5' },
											_react2['default'].createElement('img', { className: 'pull-right', src: 'img/ulLogo.png' })
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'showOnHover' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-8 vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-md-4 btnAddCart' },
											_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
										)
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 mobileOfferInfoDetails' },
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12  offerText' },
										'GET RS.5000 OFF ON FURNITURE SHOPPING',
										_react2['default'].createElement(
											'div',
											{ className: 'vp' },
											'Validity Period:',
											_react2['default'].createElement(
												'span',
												null,
												'25th Feb, 2015'
											)
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'col-xs-12 ' },
										_react2['default'].createElement('img', { src: 'img/ulLogo.png' })
									),
									_react2['default'].createElement('input', { type: 'button', value: 'Add to Cart' })
								)
							)
						)
					)
				),
				_react2['default'].createElement(_Footer2['default'], null)
			);
		}
	}]);

	return CartOutside;
})(_react2['default'].Component);

CartOutside.contextTypes = {
	router: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = CartOutside;
module.exports = exports['default'];

},{"./Footer":11,"./Header":14,"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var Contact = (function (_React$Component) {
	_inherits(Contact, _React$Component);

	function Contact() {
		_classCallCheck(this, Contact);

		_get(Object.getPrototypeOf(Contact.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Contact, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'container-fluid pp' },
				_react2['default'].createElement(_Header2['default'], null),
				_react2['default'].createElement(
					'div',
					{ className: 'row privacyPloicy' },
					_react2['default'].createElement(
						'div',
						{ className: 'headerFaq' },
						_react2['default'].createElement(
							'label',
							null,
							'Contact'
						)
					)
				),
				_react2['default'].createElement(_Footer2['default'], null)
			);
		}
	}]);

	return Contact;
})(_react2['default'].Component);

exports['default'] = Contact;
module.exports = exports['default'];

},{"./Footer":11,"./Header":14,"react":"react"}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var FBLogin = (function (_React$Component) {
	_inherits(FBLogin, _React$Component);

	function FBLogin() {
		_classCallCheck(this, FBLogin);

		_get(Object.getPrototypeOf(FBLogin.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(FBLogin, [{
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "col-md-6" },
				_react2["default"].createElement(
					"center",
					null,
					_react2["default"].createElement(
						"div",
						{ className: "socialLogin" },
						_react2["default"].createElement("img", { src: "img/fb.png" }),
						_react2["default"].createElement("img", { src: "img/gp.png" }),
						_react2["default"].createElement(
							"span",
							null,
							"Don’t worry we won’t post anything without your permission"
						)
					),
					_react2["default"].createElement(
						"div",
						{ className: "socialLoginMobile" },
						_react2["default"].createElement(
							"center",
							null,
							_react2["default"].createElement(
								"div",
								{ className: "row" },
								_react2["default"].createElement(
									"div",
									{ className: "col-xs-6" },
									_react2["default"].createElement("img", { src: "img/mobileFb.png" })
								),
								_react2["default"].createElement(
									"div",
									{ className: "col-xs-6" },
									_react2["default"].createElement("img", { src: "img/mobileG.png" })
								)
							),
							_react2["default"].createElement(
								"div",
								{ className: "row permissopnMobile" },
								_react2["default"].createElement(
									"span",
									null,
									"Don’t worry we won’t post anything without your permission"
								)
							)
						)
					)
				)
			);
		}
	}]);

	return FBLogin;
})(_react2["default"].Component);

exports["default"] = FBLogin;
module.exports = exports["default"];

},{"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var Faqs = (function (_React$Component) {
	_inherits(Faqs, _React$Component);

	function Faqs() {
		_classCallCheck(this, Faqs);

		_get(Object.getPrototypeOf(Faqs.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Faqs, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'container-fluid faq' },
				_react2['default'].createElement(_Header2['default'], null),
				_react2['default'].createElement(
					'div',
					{ className: 'row faqs' },
					_react2['default'].createElement(
						'div',
						{ className: 'headerFaq' },
						_react2['default'].createElement(
							'label',
							null,
							'Frequentely Asked Questions'
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'questionTitle' },
						_react2['default'].createElement(
							'label',
							null,
							'About ',
							_react2['default'].createElement(
								'span',
								null,
								'On The House'
							)
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'panel-group', id: 'accordion', role: 'tablist', 'aria-multiselectable': 'true' },
						_react2['default'].createElement(
							'div',
							{ className: 'panel panel-default' },
							_react2['default'].createElement(
								'div',
								{ className: 'panel-heading', role: 'tab', id: 'headingOne' },
								_react2['default'].createElement(
									'h4',
									{ className: 'panel-title' },
									_react2['default'].createElement(
										'a',
										{ role: 'button', 'data-toggle': 'collapse', 'data-parent': '#accordion', href: '#collapseOne', 'aria-expanded': 'true', 'aria-controls': 'collapseOne' },
										_react2['default'].createElement('div', { className: 'circleFaq' }),
										'What is on the hOuse?'
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ id: 'collapseOne', className: 'panel-collapse collapse in', role: 'tabpanel', 'aria-labelledby': 'headingOne' },
								_react2['default'].createElement(
									'div',
									{ className: 'panel-body' },
									'An initiative from CF, where the seeker who has newly shortlisted and bought or rented a property through CF will be able to select the discount offers from our select branded partners in Home Improvement, Furniture, Furnishings , Home loan, Electronics space.'
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'panel panel-default' },
							_react2['default'].createElement(
								'div',
								{ className: 'panel-heading', role: 'tab', id: 'headingTwo' },
								_react2['default'].createElement(
									'h4',
									{ className: 'panel-title' },
									_react2['default'].createElement(
										'a',
										{ className: 'collapsed', role: 'button', 'data-toggle': 'collapse', 'data-parent': '#accordion', href: '#collapseTwo', 'aria-expanded': 'false', 'aria-controls': 'collapseTwo' },
										_react2['default'].createElement('div', { className: 'circleFaq' }),
										'House Does it work?'
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ id: 'collapseTwo', className: 'panel-collapse collapse', role: 'tabpanel', 'aria-labelledby': 'headingTwo' },
								_react2['default'].createElement(
									'div',
									{ className: 'panel-body' },
									'When you find your house on CF, come to the OTH home page and give us the property details. Once it is verified, we would like to say thanks by offering discount coupons for your new home.'
								)
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'panel panel-default' },
							_react2['default'].createElement(
								'div',
								{ className: 'panel-heading', role: 'tab', id: 'headingThree' },
								_react2['default'].createElement(
									'h4',
									{ className: 'panel-title' },
									_react2['default'].createElement(
										'a',
										{ className: 'collapsed', role: 'button', 'data-toggle': 'collapse', 'data-parent': '#accordion', href: '#collapseThree', 'aria-expanded': 'false', 'aria-controls': 'collapseThree' },
										_react2['default'].createElement('div', { className: 'circleFaq' }),
										'Do i need to register to claim the coupons?'
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ id: 'collapseThree', className: 'panel-collapse collapse', role: 'tabpanel', 'aria-labelledby': 'headingThree' },
								_react2['default'].createElement(
									'div',
									{ className: 'panel-body' },
									'Yes, you must have an existing account to claim these coupon codes. You can also sign in from Facebook or Google+ account.'
								)
							)
						)
					)
				),
				_react2['default'].createElement(_Footer2['default'], null)
			);
		}
	}]);

	return Faqs;
})(_react2['default'].Component);

Faqs.contextTypes = {
	router: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = Faqs;
module.exports = exports['default'];

},{"./Footer":11,"./Header":14,"react":"react"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ShowModal = require('./ShowModal');

var _ShowModal2 = _interopRequireDefault(_ShowModal);

var Footer = (function (_React$Component) {
	_inherits(Footer, _React$Component);

	function Footer() {
		_classCallCheck(this, Footer);

		_get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Footer, [{
		key: 'clickShow',
		value: function clickShow() {
			// ShowModal.render();
			//React.renderComponent(<ShowModal />);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'row OthFooterSection' },
				_react2['default'].createElement(
					'center',
					null,
					_react2['default'].createElement(
						'div',
						{ className: 'col-md-12 col-xs-12 footer1' },
						_react2['default'].createElement(
							'ul',
							null,
							_react2['default'].createElement(
								'li',
								null,
								_react2['default'].createElement(
									'a',
									{ href: '/faqs' },
									'FAQs'
								)
							),
							_react2['default'].createElement(
								'li',
								null,
								_react2['default'].createElement(
									'a',
									{ href: '/ppolicy' },
									'Privacy Policy'
								)
							),
							_react2['default'].createElement(
								'li',
								null,
								_react2['default'].createElement(
									'a',
									{ href: '#', onClick: this.clickShow.bind(this) },
									'How To Avail'
								)
							),
							_react2['default'].createElement(
								'li',
								null,
								_react2['default'].createElement(
									'a',
									{ href: '/contact' },
									'Contact'
								)
							)
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'col-md-12 col-sm-12 footer2' },
						_react2['default'].createElement(
							'div',
							null,
							'Copyright © 2007-15',
							_react2['default'].createElement(
								'a',
								{ target: '_blank', href: 'http://www.commonfloor.com', className: 'cfFooter' },
								' CommonFloor.com '
							),
							'All rights reserved.'
						)
					)
				)
			);
		}
	}]);

	return Footer;
})(_react2['default'].Component);

exports['default'] = Footer;
module.exports = exports['default'];

},{"./ShowModal":21,"react":"react"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _HowToAvail = require('./HowToAvail');

var _HowToAvail2 = _interopRequireDefault(_HowToAvail);

var FooterHowToAvail = (function (_React$Component) {
	_inherits(FooterHowToAvail, _React$Component);

	function FooterHowToAvail() {
		_classCallCheck(this, FooterHowToAvail);

		_get(Object.getPrototypeOf(FooterHowToAvail.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(FooterHowToAvail, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'container-fluid pp' },
				_react2['default'].createElement(_Header2['default'], null),
				_react2['default'].createElement(
					'div',
					{ className: 'row hta' },
					_react2['default'].createElement(_HowToAvail2['default'], null)
				),
				_react2['default'].createElement(_Footer2['default'], null)
			);
		}
	}]);

	return FooterHowToAvail;
})(_react2['default'].Component);

exports['default'] = FooterHowToAvail;
module.exports = exports['default'];

},{"./Footer":11,"./Header":14,"./HowToAvail":17,"react":"react"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsLoginFormActions = require('../actions/LoginFormActions');

var _actionsLoginFormActions2 = _interopRequireDefault(_actionsLoginFormActions);

var _storesLoginFormStore = require('../stores/LoginFormStore');

var _storesLoginFormStore2 = _interopRequireDefault(_storesLoginFormStore);

var FormLogin = (function (_React$Component) {
	_inherits(FormLogin, _React$Component);

	function FormLogin(props) {
		_classCallCheck(this, FormLogin);

		_get(Object.getPrototypeOf(FormLogin.prototype), 'constructor', this).call(this, props);
		this.state = _storesLoginFormStore2['default'].getState();
		this.onChange = this.onChange.bind(this);
	}

	_createClass(FormLogin, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_storesLoginFormStore2['default'].listen(this.onChange);
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			_storesLoginFormStore2['default'].unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'handleSubmit',
		value: function handleSubmit() {
			mixins: [Navigation];
			var email = this.state.email.trim();
			var password = this.state.password;

			if (!email) {
				_actionsLoginFormActions2['default'].invalidEmail();
				this.refs.emailTextField.getDOMNode().focus();
			}

			if (!password) {
				_actionsLoginFormActions2['default'].invalidPassword();
				this.ref.passwordTextField.getDOMNode().focus();
			}

			if (email && password) {
				_actionsLoginFormActions2['default'].login({
					email: email,
					password: password,
					router: this.context.router
				});
			}
		}
	}, {
		key: 'handleSignUp',
		value: function handleSignUp() {
			_actionsLoginFormActions2['default'].signUpRedirtect({
				router: this.context.router
			});
		}
	}, {
		key: 'removeWarning',
		value: function removeWarning() {
			_actionsLoginFormActions2['default'].removeWarning();
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'col-md-6 l' },
				_react2['default'].createElement(
					'div',
					{ className: 'loginForm' },
					_react2['default'].createElement(
						'div',
						{ className: 'loginFormWrap' },
						_react2['default'].createElement(
							'p',
							{ style: { color: 'red' }, className: 'help-block' },
							this.state.helpBlock
						),
						_react2['default'].createElement('input', { type: 'text', ref: 'emailTextField', placeholder: 'Email id', value: this.state.email, onChange: _actionsLoginFormActions2['default'].updateEmail }),
						_react2['default'].createElement('input', { type: 'password', ref: 'passwordTextField', placeholder: 'password', value: this.state.password, onChange: _actionsLoginFormActions2['default'].updatePassword })
					),
					_react2['default'].createElement(
						'span',
						null,
						_react2['default'].createElement(
							'a',
							{ className: 'fp', href: '' },
							'Forgot Password?'
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'row' },
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-6 col-sm-6 signIn' },
							_react2['default'].createElement('input', { type: 'button', value: 'Sign In', onClick: this.handleSubmit.bind(this) }),
							_react2['default'].createElement(
								'span',
								null,
								'*mandatory fields'
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-6 col-sm-6 signUp' },
							_react2['default'].createElement('input', { className: 'pull-right', type: 'button', value: 'Sign Up', onClick: this.handleSignUp.bind(this) }),
							_react2['default'].createElement(
								'span',
								null,
								'not registered yet?'
							)
						)
					),
					_react2['default'].createElement('div', { className: 'mandy' })
				)
			);
		}
	}]);

	return FormLogin;
})(_react2['default'].Component);

FormLogin.contextTypes = {
	router: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = FormLogin;
module.exports = exports['default'];

},{"../actions/LoginFormActions":2,"../stores/LoginFormStore":26,"react":"react"}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Header = (function (_React$Component) {
	_inherits(Header, _React$Component);

	function Header() {
		_classCallCheck(this, Header);

		_get(Object.getPrototypeOf(Header.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(Header, [{
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "row OthHeaderSection" },
				_react2["default"].createElement(
					"div",
					{ className: "header1" },
					_react2["default"].createElement(
						"div",
						{ className: "col-xs-6 col-md-6" },
						_react2["default"].createElement(
							"div",
							{ className: "col-sm-12 imgLogoWrap" },
							_react2["default"].createElement(
								"a",
								{ href: "/" },
								_react2["default"].createElement("img", { src: "img/oth_logo.jpg", style: { width: 35 + "%" } }),
								" "
							)
						)
					),
					_react2["default"].createElement("div", { className: "col-md-6 col-sm-6" })
				),
				_react2["default"].createElement(
					"div",
					{ className: "borderHeader" },
					_react2["default"].createElement("div", { className: "col-md-6 col-xs-6 orange" }),
					_react2["default"].createElement("div", { className: "col-md-6 col-xs-6 brown" })
				),
				_react2["default"].createElement("div", { className: "header2 " })
			);
		}
	}]);

	return Header;
})(_react2["default"].Component);

exports["default"] = Header;
module.exports = exports["default"];

},{"react":"react"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _HowToAvail = require('./HowToAvail');

var _HowToAvail2 = _interopRequireDefault(_HowToAvail);

var _HomeCompanyLogos = require('./HomeCompanyLogos');

var _HomeCompanyLogos2 = _interopRequireDefault(_HomeCompanyLogos);

var _actionsHomeAction = require('../actions/HomeAction');

var _actionsHomeAction2 = _interopRequireDefault(_actionsHomeAction);

var _storesHomeStore = require('../stores/HomeStore');

var _storesHomeStore2 = _interopRequireDefault(_storesHomeStore);

var Home = (function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home(props) {
		_classCallCheck(this, Home);

		_get(Object.getPrototypeOf(Home.prototype), 'constructor', this).call(this, props);
		this.state = _storesHomeStore2['default'].getState();
		this.onChange = this.onChange.bind(this);
	}

	_createClass(Home, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			_storesHomeStore2['default'].listen(this.onChange);
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			_storesHomeStore2['default'].unlisten(this.onChange);
		}
	}, {
		key: 'onChange',
		value: function onChange(state) {
			this.setState(state);
		}
	}, {
		key: 'handleClaimNow',
		value: function handleClaimNow() {
			_actionsHomeAction2['default'].clickClaimNow({
				router: this.context.router
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'container-fluid ' },
				_react2['default'].createElement(
					'div',
					{ className: 'row homePage' },
					_react2['default'].createElement(
						'div',
						{ className: 'hpWrap' },
						_react2['default'].createElement('img', { className: 'bgImage img-responsive', src: 'img/Background.jpg' }),
						_react2['default'].createElement(
							'div',
							{ className: 'onTopHomeImage' },
							_react2['default'].createElement(
								'center',
								null,
								_react2['default'].createElement(
									'div',
									{ className: 'onTopHomeImageContent' },
									_react2['default'].createElement(
										'label',
										null,
										'Found a house via CommonFloor?',
										_react2['default'].createElement(
											'span',
											{ className: 'tagline' },
											'A whole bunch of free house warming gifts await you!'
										)
									),
									_react2['default'].createElement('img', { className: 'othLogo', src: 'img/oth_logo1.png' }),
									_react2['default'].createElement(
										'label',
										{ className: 'poweredBy' },
										' Powered By'
									),
									_react2['default'].createElement(
										'a',
										{ target: '_blank', href: 'http://www.commonfloor.com' },
										_react2['default'].createElement('img', { src: 'img/cf_logo.png' })
									)
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'companyLogosMobile' },
								_react2['default'].createElement(_HomeCompanyLogos2['default'], null)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'circleHome' },
								_react2['default'].createElement(
									'center',
									null,
									_react2['default'].createElement('img', { src: 'img/circleH.png' })
								)
							)
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'companyLogos' },
						_react2['default'].createElement(_HomeCompanyLogos2['default'], null)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'howToavail' },
						_react2['default'].createElement(_HowToAvail2['default'], null),
						_react2['default'].createElement(
							'div',
							{ className: 'col-md-12 aruready' },
							_react2['default'].createElement(
								'center',
								null,
								_react2['default'].createElement(
									'label',
									null,
									'Are you ready?'
								),
								_react2['default'].createElement('input', { type: 'button', value: 'Claim Now', onClick: this.handleClaimNow.bind(this) })
							)
						)
					)
				),
				_react2['default'].createElement(_Footer2['default'], null)
			);
		}
	}]);

	return Home;
})(_react2['default'].Component);

Home.contextTypes = {
	router: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = Home;
module.exports = exports['default'];

},{"../actions/HomeAction":1,"../stores/HomeStore":25,"./Footer":11,"./HomeCompanyLogos":16,"./HowToAvail":17,"react":"react"}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var HomeCompanyLogos = (function (_React$Component) {
	_inherits(HomeCompanyLogos, _React$Component);

	function HomeCompanyLogos() {
		_classCallCheck(this, HomeCompanyLogos);

		_get(Object.getPrototypeOf(HomeCompanyLogos.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(HomeCompanyLogos, [{
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"center",
				null,
				_react2["default"].createElement(
					"div",
					{ className: "col-xs-12 col-md-2 partners" },
					"Partner:"
				),
				_react2["default"].createElement(
					"div",
					{ className: "col-xs-3 col-md-2" },
					_react2["default"].createElement("img", { className: "img-responsive", src: "img/ulLogo.png" })
				),
				_react2["default"].createElement(
					"div",
					{ className: "col-xs-3 col-md-2" },
					_react2["default"].createElement("img", { className: "img-responsive", src: "img/homelane.png" })
				),
				_react2["default"].createElement(
					"div",
					{ className: "col-xs-3 col-md-2" },
					_react2["default"].createElement("img", { className: "img-responsive", src: "img/furlenco.png" })
				),
				_react2["default"].createElement(
					"div",
					{ className: "col-xs-3 col-md-2 hdfc" },
					_react2["default"].createElement("img", { className: "img-responsive", src: "img/hdfc.png" })
				),
				_react2["default"].createElement(
					"div",
					{ className: "col-xs-12 col-md-2 viewMore" },
					_react2["default"].createElement(
						"a",
						{ href: "/cartOutside" },
						"View more offers>>"
					)
				)
			);
		}
	}]);

	return HomeCompanyLogos;
})(_react2["default"].Component);

exports["default"] = HomeCompanyLogos;
module.exports = exports["default"];

},{"react":"react"}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var HowToAvail = (function (_React$Component) {
	_inherits(HowToAvail, _React$Component);

	function HowToAvail() {
		_classCallCheck(this, HowToAvail);

		_get(Object.getPrototypeOf(HowToAvail.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(HowToAvail, [{
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				null,
				_react2["default"].createElement(
					"div",
					{ className: "availHeader" },
					_react2["default"].createElement(
						"div",
						null,
						"Heres how to avail your gifts"
					),
					_react2["default"].createElement("div", { className: "col-md-6 col-xs-6 orange" }),
					_react2["default"].createElement("div", { className: "col-md-6 col-xs-6 brown" })
				),
				_react2["default"].createElement(
					"div",
					{ className: "col-xs-12 col-md-6 tiles" },
					_react2["default"].createElement(
						"div",
						{ className: "col-xs-3" },
						_react2["default"].createElement("img", { className: "img-responsive", src: "img/claimNow.png" })
					),
					_react2["default"].createElement(
						"div",
						{ className: "col-xs-9 text" },
						"Go to \"Claim Now\" & submit your property details and documents"
					)
				),
				_react2["default"].createElement(
					"div",
					{ className: "col-xs-12 col-md-6  tiles" },
					_react2["default"].createElement(
						"div",
						{ className: "col-xs-3" },
						_react2["default"].createElement("img", { className: "img-responsive", src: "img/browse.png" })
					),
					_react2["default"].createElement(
						"div",
						{ className: "col-xs-9 text" },
						"Browse through the list of free offers"
					)
				),
				_react2["default"].createElement(
					"div",
					{ className: "col-xs-12 col-md-6  tiles" },
					_react2["default"].createElement(
						"div",
						{ className: "col-xs-3" },
						_react2["default"].createElement("img", { className: "img-responsive", src: "img/cart.png" })
					),
					_react2["default"].createElement(
						"div",
						{ className: "col-xs-9 text" },
						"Add the free offers you like to your cart & checkout"
					)
				),
				_react2["default"].createElement(
					"div",
					{ className: "col-xs-12 col-md-6  tiles" },
					_react2["default"].createElement(
						"div",
						{ className: "col-xs-3" },
						_react2["default"].createElement("img", { className: "img-responsive", src: "img/post.png" })
					),
					_react2["default"].createElement(
						"div",
						{ className: "col-xs-9 text" },
						"Post-verification (max 1 - 2 working days), you will receive the discount codes"
					)
				)
			);
		}
	}]);

	return HowToAvail;
})(_react2["default"].Component);

exports["default"] = HowToAvail;
module.exports = exports["default"];

},{"react":"react"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _FBLogin = require('./FBLogin');

var _FBLogin2 = _interopRequireDefault(_FBLogin);

var _FormLogin = require('./FormLogin');

var _FormLogin2 = _interopRequireDefault(_FormLogin);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var Login = (function (_React$Component) {
	_inherits(Login, _React$Component);

	function Login() {
		_classCallCheck(this, Login);

		_get(Object.getPrototypeOf(Login.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Login, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'container-fluid loginPage' },
				_react2['default'].createElement(_Header2['default'], null),
				_react2['default'].createElement(
					'div',
					{ className: 'row othLogin' },
					_react2['default'].createElement(
						'div',
						{ className: 'col-md-12 loginhead' },
						'Sign in to edit your availed offers!'
					),
					_react2['default'].createElement(_FBLogin2['default'], null),
					_react2['default'].createElement(_FormLogin2['default'], null)
				),
				_react2['default'].createElement(_Footer2['default'], null)
			);
		}
	}]);

	return Login;
})(_react2['default'].Component);

exports['default'] = Login;
module.exports = exports['default'];

},{"./FBLogin":9,"./Footer":11,"./FormLogin":13,"./Header":14,"react":"react"}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var OfferPopup = (function (_React$Component) {
	_inherits(OfferPopup, _React$Component);

	function OfferPopup() {
		_classCallCheck(this, OfferPopup);

		_get(Object.getPrototypeOf(OfferPopup.prototype), "constructor", this).apply(this, arguments);
	}

	_createClass(OfferPopup, [{
		key: "render",
		value: function render() {
			return _react2["default"].createElement(
				"div",
				{ className: "row modalSection userOfferPopup" },
				_react2["default"].createElement(
					"div",
					{ className: "col-md-6 aop_imgWrap" },
					_react2["default"].createElement("img", { src: "img/imgOffer.png" })
				),
				_react2["default"].createElement(
					"div",
					{ className: "col-md-6 " },
					_react2["default"].createElement(
						"div",
						{ className: "offerHead" },
						"Get Rs. 500 off on  purchase of furniture"
					),
					_react2["default"].createElement(
						"div",
						null,
						_react2["default"].createElement("img", { src: "img/ulLogo.png" })
					),
					_react2["default"].createElement(
						"div",
						{ className: "logoText" },
						"Urban ladder is a online furniture company."
					),
					_react2["default"].createElement(
						"div",
						{ className: "ov" },
						"Offer Value:",
						_react2["default"].createElement(
							"label",
							null,
							"Rs 500 Off"
						)
					),
					_react2["default"].createElement("input", { type: "button", className: "addTCart", value: "Add To Cart" }),
					_react2["default"].createElement(
						"div",
						{ className: "vp" },
						"Validity Period:",
						_react2["default"].createElement(
							"label",
							null,
							"25th Feb,2016"
						)
					),
					_react2["default"].createElement(
						"div",
						{ className: "vr" },
						"Validity Region:",
						_react2["default"].createElement(
							"label",
							null,
							"Pan India through website/App"
						)
					),
					_react2["default"].createElement(
						"div",
						{ className: "redeem" },
						"How to Reddem the offer:",
						_react2["default"].createElement(
							"span",
							null,
							"asdsdaakjsdbaskjdb asdmasdk asd ad asd asd as das dasd asd sa as"
						),
						_react2["default"].createElement(
							"p",
							{ className: "termshead" },
							"Terms of this offer"
						),
						_react2["default"].createElement(
							"p",
							{ className: "termstext" },
							"asndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd oasndasdi asdknasd aoksd asdkasd askdkoasd o"
						)
					)
				)
			);
		}
	}]);

	return OfferPopup;
})(_react2["default"].Component);

exports["default"] = OfferPopup;
module.exports = exports["default"];

},{"react":"react"}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var PrivacyPolicy = (function (_React$Component) {
	_inherits(PrivacyPolicy, _React$Component);

	function PrivacyPolicy() {
		_classCallCheck(this, PrivacyPolicy);

		_get(Object.getPrototypeOf(PrivacyPolicy.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(PrivacyPolicy, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'container-fluid pp' },
				_react2['default'].createElement(_Header2['default'], null),
				_react2['default'].createElement(
					'div',
					{ className: 'row privacyPloicy' },
					_react2['default'].createElement(
						'div',
						{ className: 'headerFaq' },
						_react2['default'].createElement(
							'label',
							null,
							'Privacy Policy'
						)
					)
				),
				_react2['default'].createElement(_Footer2['default'], null)
			);
		}
	}]);

	return PrivacyPolicy;
})(_react2['default'].Component);

exports['default'] = PrivacyPolicy;
module.exports = exports['default'];

},{"./Footer":11,"./Header":14,"react":"react"}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsShowModalAction = require('../actions/ShowModalAction');

var _actionsShowModalAction2 = _interopRequireDefault(_actionsShowModalAction);

var _storesShowModalStore = require('../stores/ShowModalStore');

var _storesShowModalStore2 = _interopRequireDefault(_storesShowModalStore);

var _OfferPopup = require('./OfferPopup');

var _OfferPopup2 = _interopRequireDefault(_OfferPopup);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var ShowModal = (function (_React$Component) {
	_inherits(ShowModal, _React$Component);

	function ShowModal() {
		_classCallCheck(this, ShowModal);

		_get(Object.getPrototypeOf(ShowModal.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(ShowModal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			$(this.refs.modal.getDOMNode()).modal({
				show: false
			});
		}
	}, {
		key: 'clickShow',
		value: function clickShow() {
			// ShowModalAction.showClickData()
			$(this.refs.modal.getDOMNode()).modal("show");
		}

		// clickClose(){
		// 	 $(this.refs.modal.getDOMNode()).modal("hide");
		// }

	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				null,
				_react2['default'].createElement(
					'a',
					{ href: '#', onClick: this.clickShow.bind(this) },
					'How To Avail'
				),
				_react2['default'].createElement(
					'div',
					{ id: 'othModalLg', role: 'dialog', ref: 'modal', className: 'modal fade' },
					_react2['default'].createElement(
						'div',
						{ className: 'modal-dialog modal-lg' },
						_react2['default'].createElement(
							'div',
							{ className: 'modal-content' },
							_react2['default'].createElement(
								'button',
								{ type: 'button', className: 'close', 'data-dismiss': 'modal' },
								'×'
							),
							_react2['default'].createElement(
								'div',
								{ className: 'modal-body' },
								_react2['default'].createElement(_OfferPopup2['default'], null)
							)
						)
					)
				),
				_react2['default'].createElement(_Footer2['default'], null)
			);
		}
	}]);

	return ShowModal;
})(_react2['default'].Component);

ShowModal.contextTypes = {
	router: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = ShowModal;
module.exports = exports['default'];

},{"../actions/ShowModalAction":3,"../stores/ShowModalStore":27,"./Footer":11,"./OfferPopup":19,"react":"react"}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var SignUp = (function (_React$Component) {
	_inherits(SignUp, _React$Component);

	function SignUp() {
		_classCallCheck(this, SignUp);

		_get(Object.getPrototypeOf(SignUp.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(SignUp, [{
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'container-fluid loginPage registerPage' },
				_react2['default'].createElement(_Header2['default'], null),
				_react2['default'].createElement(
					'div',
					{ className: 'row othLogin' },
					_react2['default'].createElement(
						'div',
						{ className: 'col-md-12 loginhead' },
						'Sign up to claim your free offer!'
					),
					_react2['default'].createElement(
						'div',
						{ className: 'col-md-6' },
						_react2['default'].createElement(
							'center',
							null,
							_react2['default'].createElement(
								'div',
								{ className: 'socialLogin' },
								_react2['default'].createElement('img', { src: 'img/fb.png' }),
								_react2['default'].createElement('img', { src: 'img/gp.png' }),
								_react2['default'].createElement(
									'span',
									null,
									'Don’t worry we won’t post anything without your permission'
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'socialLoginMobile' },
								_react2['default'].createElement(
									'center',
									null,
									_react2['default'].createElement(
										'div',
										{ className: 'row' },
										_react2['default'].createElement(
											'div',
											{ className: 'col-xs-6' },
											_react2['default'].createElement('img', { src: 'img/mobileFb.png' })
										),
										_react2['default'].createElement(
											'div',
											{ className: 'col-xs-6' },
											_react2['default'].createElement('img', { src: 'img/mobileG.png' })
										)
									),
									_react2['default'].createElement(
										'div',
										{ className: 'row permissopnMobile' },
										_react2['default'].createElement(
											'span',
											null,
											'Don’t worry we won’t post anything without your permission'
										)
									)
								)
							)
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'col-md-6 l' },
						_react2['default'].createElement(
							'div',
							{ className: 'loginForm' },
							_react2['default'].createElement(
								'div',
								{ className: 'loginFormWrap' },
								_react2['default'].createElement('input', { type: 'text', placeholder: 'Full Name' }),
								_react2['default'].createElement('input', { type: 'text', placeholder: 'Email id' }),
								_react2['default'].createElement('input', { type: 'password', placeholder: 'password' }),
								_react2['default'].createElement('input', { type: 'text', placeholder: 'Mobile No', 'data-toggle': 'tooltip', 'data-placement': 'right', title: 'Hey, ensure you enter the same number as the one used for your commonfloor account' })
							),
							_react2['default'].createElement(
								'div',
								{ className: 'row' },
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 col-sm-6 signIn' },
									_react2['default'].createElement('input', { type: 'button', value: 'Sign Up' }),
									_react2['default'].createElement(
										'span',
										null,
										'*mandatory fields'
									)
								),
								_react2['default'].createElement(
									'div',
									{ className: 'col-xs-6 col-sm-6 signUp' },
									_react2['default'].createElement('input', { className: 'pull-right', type: 'button', value: 'Sign In' }),
									_react2['default'].createElement(
										'span',
										null,
										'Already registered?'
									)
								)
							),
							_react2['default'].createElement('div', { className: 'mandy' })
						)
					)
				),
				_react2['default'].createElement(_Footer2['default'], null)
			);
		}
	}]);

	return SignUp;
})(_react2['default'].Component);

exports['default'] = SignUp;
module.exports = exports['default'];

},{"./Footer":11,"./Header":14,"react":"react"}],23:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

_reactRouter2['default'].run(_routes2['default'], _reactRouter2['default'].HistoryLocation, function (Handler) {
  _react2['default'].render(_react2['default'].createElement(Handler, null), document.getElementById('app'));
});

},{"./routes":24,"react":"react","react-router":"react-router"}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _componentsApp = require('./components/App');

var _componentsApp2 = _interopRequireDefault(_componentsApp);

var _componentsHome = require('./components/Home');

var _componentsHome2 = _interopRequireDefault(_componentsHome);

var _componentsLogin = require('./components/Login');

var _componentsLogin2 = _interopRequireDefault(_componentsLogin);

var _componentsCart = require('./components/Cart');

var _componentsCart2 = _interopRequireDefault(_componentsCart);

var _componentsSignUp = require('./components/SignUp');

var _componentsSignUp2 = _interopRequireDefault(_componentsSignUp);

var _componentsCartOutside = require('./components/CartOutside');

var _componentsCartOutside2 = _interopRequireDefault(_componentsCartOutside);

var _componentsFaqs = require('./components/Faqs');

var _componentsFaqs2 = _interopRequireDefault(_componentsFaqs);

var _componentsPrivacyPolicy = require('./components/PrivacyPolicy');

var _componentsPrivacyPolicy2 = _interopRequireDefault(_componentsPrivacyPolicy);

var _componentsContact = require('./components/Contact');

var _componentsContact2 = _interopRequireDefault(_componentsContact);

var _componentsFooterHowToAvail = require('./components/FooterHowToAvail');

var _componentsFooterHowToAvail2 = _interopRequireDefault(_componentsFooterHowToAvail);

var _componentsShowModal = require('./components/ShowModal');

var _componentsShowModal2 = _interopRequireDefault(_componentsShowModal);

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { handler: _componentsApp2['default'] },
  _react2['default'].createElement(_reactRouter.Route, { path: '/', handler: _componentsHome2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/login', handler: _componentsLogin2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/cart', handler: _componentsCart2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/signUp', handler: _componentsSignUp2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/cartOutside', handler: _componentsCartOutside2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/faqs', handler: _componentsFaqs2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/ppolicy', handler: _componentsPrivacyPolicy2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/contact', handler: _componentsContact2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/howtoavail', handler: _componentsFooterHowToAvail2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: '/showModal', handler: _componentsShowModal2['default'] })
);
module.exports = exports['default'];

},{"./components/App":5,"./components/Cart":6,"./components/CartOutside":7,"./components/Contact":8,"./components/Faqs":10,"./components/FooterHowToAvail":12,"./components/Home":15,"./components/Login":18,"./components/PrivacyPolicy":20,"./components/ShowModal":21,"./components/SignUp":22,"react":"react","react-router":"react-router"}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsHomeAction = require('../actions/HomeAction');

var _actionsHomeAction2 = _interopRequireDefault(_actionsHomeAction);

var HomeStore = (function () {
	function HomeStore() {
		_classCallCheck(this, HomeStore);

		this.bindActions(_actionsHomeAction2['default']);
	}

	_createClass(HomeStore, [{
		key: 'onClickClaimNow',
		value: function onClickClaimNow(redirect) {
			redirect.router.transitionTo('/login');
		}
	}]);

	return HomeStore;
})();

exports['default'] = _alt2['default'].createStore(HomeStore);
module.exports = exports['default'];

},{"../actions/HomeAction":1,"../alt":4}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsLoginFormActions = require('../actions/LoginFormActions');

var _actionsLoginFormActions2 = _interopRequireDefault(_actionsLoginFormActions);

var LoginFormStore = (function () {
	function LoginFormStore() {
		_classCallCheck(this, LoginFormStore);

		this.bindActions(_actionsLoginFormActions2['default']);
		this.email = '';
		this.password = '';
		this.helpBlock = '';
	}

	_createClass(LoginFormStore, [{
		key: 'onLoginFormSuccess',
		value: function onLoginFormSuccess(successData) {
			successData.router.transitionTo('/cart');
		}
	}, {
		key: 'onLoginFormFail',
		value: function onLoginFormFail(errorMessage) {
			this.nameVaidationState = 'has-error';
			this.helpBlock = errorMessage;
		}
	}, {
		key: 'onInvalidEmail',
		value: function onInvalidEmail() {
			this.helpBlock = 'Please Enter an Email id';
		}
	}, {
		key: 'onInvalidPassword',
		value: function onInvalidPassword() {
			this.helpBlock = 'Please Enter a Password';
		}
	}, {
		key: 'onUpdateEmail',
		value: function onUpdateEmail(event) {
			this.helpBlock = '';
			this.email = event.target.value;
		}
	}, {
		key: 'onUpdatePassword',
		value: function onUpdatePassword(event) {
			this.helpBlock = '';
			this.password = event.target.value;
		}
	}, {
		key: 'onSignUpRedirtect',
		value: function onSignUpRedirtect(redirect) {
			redirect.router.transitionTo('/signUp');
		}
	}]);

	return LoginFormStore;
})();

exports['default'] = _alt2['default'].createStore(LoginFormStore);
module.exports = exports['default'];

},{"../actions/LoginFormActions":2,"../alt":4}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _actionsShowModalAction = require('../actions/ShowModalAction');

var _actionsShowModalAction2 = _interopRequireDefault(_actionsShowModalAction);

var ShowModalStore = function ShowModalStore() {
	_classCallCheck(this, ShowModalStore);

	this.bindActions(_actionsShowModalAction2['default']);
	this.show = true;
};

exports['default'] = _alt2['default'].createStore(ShowModalStore);
module.exports = exports['default'];

},{"../actions/ShowModalAction":3,"../alt":4}]},{},[23]);
