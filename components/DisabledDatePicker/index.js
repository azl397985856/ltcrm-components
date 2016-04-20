import React, { PropTypes, Component } from 'react';
import { DatePicker} from 'antd';

function noop() {

}
const DisabledDatePicker = React.createClass({
  getInitialState() {
     return {
     }
  },
	disabledSendStartDate(startValue) {
		if (!startValue || !this.props.end) {
			return false;
		}
		const date = new Date(startValue.getTime());
		const dateWithouHour = new Date(date.getFullYear(), date.getMonth(), date.getDate());
		return dateWithouHour.getTime() >= this.props.end.getTime();
	},
	disabledSendEndDate(endValue) {
		if (!endValue || !this.props.start) {
			return false;
		}
		const date = new Date(endValue.getTime());
		const dateWithouHour = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
		return dateWithouHour.getTime() <= this.props.start.getTime();
	},
	disabledDate(arg) {
		if (this.props.start === true) {
			return this.disabledSendStartDate(arg);
		} else if (this.props.end === true){
			return this.disabledSendEndDate(arg);
		}
	},
  render() {
  	const props = this.props;
  	const onChange = this.props.onChange || noop;
  	const value = this.props.value || null;
  	const placeholder = this.props.placeholder || '';
    return (
    	<DatePicker disabledDate={this.disabledDate} onChange={onChange} value={value} placeholder={placeholder}/>
    )
  }
});

DisabledDatePicker.propTypes = {
}

export default DisabledDatePicker;
module.exports = exports['default'];
