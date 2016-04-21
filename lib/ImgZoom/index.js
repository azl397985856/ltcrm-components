'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = require('E:\\ltcrm\\trunk\\ltcrm-components\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('E:\\ltcrm\\trunk\\ltcrm-components\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('E:\\ltcrm\\trunk\\ltcrm-components\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _antd = require('antd');

var _docCookies = require('./docCookies.js');

var _docCookies2 = _interopRequireDefault(_docCookies);

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
	_component: {}
};

var _ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'components/ImgZoom/index.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'components/ImgZoom/index.js',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformHmrLibIndexJs2(_ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

// add remove to Array.prototype for delete the given index element
Array.prototype.remove = function (dx) {
	if (isNaN(dx) || dx > this.length) {
		return false;
	}
	for (var i = 0, n = 0; i < this.length; i++) {
		if (this[i] != this[dx]) {
			this[n++] = this[i];
		}
	}
	this.length -= 1;
};
var cookie = [];
var ImgZoom = _wrapComponent('_component')(_react3.default.createClass({
	displayName: 'ImgZoom',
	getInitialState: function getInitialState() {
		return {};
	},
	setCookies: function setCookies() {
		var date = new Date();
		// cookie's expired in 15 days for default
		var expired = this.props.duration || 1000 * 60 * 60 * 24 * 15;
		date = date.getTime() + expired;
		_docCookies2.default.setItem('LT_favrorate_login_entry', JSON.stringify(cookie), date);
	},
	getCookies: function getCookies() {
		if (this.hasCookies() === true) {
			return JSON.parse(_docCookies2.default.getItem('LT_favrorate_login_entry'));
		} else {
			return this.props.data;
		}
	},
	hasCookies: function hasCookies() {
		return _docCookies2.default.hasItem('LT_favrorate_login_entry');
	},
	removeCookies: function removeCookies() {
		_docCookies2.default.removeItem('LT_favrorate_login_entry');
	},

	// sort the images, default by last 3 Click Time desc.
	sort: function sort(title) {
		console.log(title);
		var temp = [];
		var data = this.props.data;
		for (var i = 0; i < data.length; i++) {
			if (data[i].title === title) {
				temp[0] = data[i];
				data.remove(i);
			}
		}
		cookie = _ramda2.default.clone(temp.concat(data));
		// set cookie for zooming the favorate_login_entry next time he/she login
		this.setCookies();
	},
	render: function render() {
		var _this = this;

		var data = this.getCookies() || this.props.data;
		var titleVisible = this.props.titleVisible || true;
		var style = this.props.style || {};
		return _react3.default.createElement(
			'div',
			{ style: style },
			_react3.default.createElement(
				_antd.Row,
				null,
				_react3.default.createElement(
					_antd.Col,
					{ span: '10', push: '7' },
					_react3.default.createElement(
						'a',
						{ href: data[0].link, onClick: this.sort.bind(this, data[0].title) },
						_react3.default.createElement('image', { src: data[0].image, style: { margin: '10px auto 10px auto' } })
					)
				)
			),
			_react3.default.createElement(
				_antd.Row,
				{ style: { margin: '20px auto 20px auto' } },
				_ramda2.default.clone(data).slice(1).map(function (dat) {
					return _react3.default.createElement(
						_antd.Col,
						{ span: '2', push: '5' },
						titleVisible ? dat.title : '',
						_react3.default.createElement(
							'a',
							{ href: dat.link, onClick: _this.sort.bind(_this, dat.title) },
							_react3.default.createElement('image', { src: dat.thumbnail, style: { marginBottom: '-4px', width: 20, height: 20 } })
						)
					);
				})
			)
		);
	}
}));

ImgZoom.propTypes = {
	titleVisible: _react2.PropTypes.bool.isRequired,
	data: _react2.PropTypes.array.isRequired
};

exports.default = ImgZoom;

module.exports = exports['default'];