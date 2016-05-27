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
		var value = this.props.value;
		var placeholder = this.props.placeholder || '';
		var defaultValue = this.props.defaultValue;
		var format = this.props.format || "yyyy-MM-dd";
		var disabled = this.props.disabled || false;
		var popupStyle = this.props.popupStyle || {};
		var size = this.props.size;
		var style = this.props.style || {};
		var locale = this.props.locale || {};
		var showTime = this.props.showTime || false;
		var onOk = this.props.onOk || noop;
		var getCalendarContainer = this.props.getCalendarContainer;
		return _react2.default.createElement(_antd.DatePicker, {
			disabledDate: this.disabledDate,
			onChange: onChange,
			value: value,
			placeholder: placeholder,
			defaultValue: defaultValue,
			format: format,
			disabled: disabled,
			style: style,
			popupStyle: popupStyle,
			size: size,
			locale: locale,
			showTime: showTime,
			onOk: onOk,
			getCalendarContainer: getCalendarContainer
		});
	}
});

DisabledDatePicker.propTypes = {};

exports.default = DisabledDatePicker;

module.exports = exports['default'];