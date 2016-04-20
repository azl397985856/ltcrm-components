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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
	_component: {}
};

var _ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'components/DisabledDatePicker/index.js',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'components/DisabledDatePicker/index.js',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformHmrLibIndexJs2(_ELtcrmTrunkLtcrmComponentsNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

function noop() {}
var DisabledDatePicker = _wrapComponent('_component')(_react3.default.createClass({
	displayName: 'DisabledDatePicker',
	getInitialState: function getInitialState() {
		return {};
	},
	disabledSendStartDate: function disabledSendStartDate(startValue) {
		if (!startValue || !this.props.end) {
			return false;
		}
		var date = new Date(startValue.getTime());
		var dateWithouHour = new Date(date.getFullYear(), date.getMonth(), date.getDate());
		return dateWithouHour.getTime() >= this.props.end.getTime();
	},
	disabledSendEndDate: function disabledSendEndDate(endValue) {
		if (!endValue || !this.props.start) {
			return false;
		}
		var date = new Date(endValue.getTime());
		var dateWithouHour = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
		return dateWithouHour.getTime() <= this.props.start.getTime();
	},
	disabledDate: function disabledDate(arg) {
		if (this.props.start === true) {
			return this.disabledSendStartDate(arg);
		} else if (this.props.end === true) {
			return this.disabledSendEndDate(arg);
		}
	},
	render: function render() {
		var props = this.props;
		var onChange = this.props.onChange || noop;
		var value = this.props.value || null;
		var placeholder = this.props.placeholder || '';
		return _react3.default.createElement(_antd.DatePicker, { disabledDate: this.disabledDate, onChange: onChange, value: value, placeholder: placeholder });
	}
}));

DisabledDatePicker.propTypes = {};

exports.default = DisabledDatePicker;

module.exports = exports['default'];