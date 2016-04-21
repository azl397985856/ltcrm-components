'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antd = require('antd');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}
var DisabledDatePicker = _react2.default.createClass({
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
		return _react2.default.createElement(_antd.DatePicker, { disabledDate: this.disabledDate, onChange: onChange, value: value, placeholder: placeholder });
	}
});

DisabledDatePicker.propTypes = {};

exports.default = DisabledDatePicker;

module.exports = exports['default'];