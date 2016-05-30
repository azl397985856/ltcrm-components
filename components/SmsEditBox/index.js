import '../../style/SmsEditBox/smsEditBox.less';
import React from 'react';
import {Tag, Input, Tooltip, Row, Col} from 'antd';
import {insertAtCaret, validInputValue} from './SmsEditUtils.js';
import Iphone from './iphone/';

const SmSEditBox = React.createClass({
	getDefaultProps() {
		return {
			options: [],
			defaultLength: 0,
			// 签名
			signature: '店铺签名',
			onTemplate: function onTemplate() {},
			onShortUrl: function onShortUrl() {},
			onChange: function onChange() {}
		};
	},
	getInitialState() {
		return {
			smsDetail: '',
			// tips，底部的文案提示
			tips: '',
		};
	},
	componentWillReceiveProps(nextProps) {
		// console.log('receive >>>', nextProps);
		if ('value' in nextProps) {
			// 当发生修改时才触发change
			this.setState({
				smsDetail: nextProps.value,
			});
		}
	},
	onChange(e) {
		let ev = e;
		if (e.target !== undefined) {
			ev = e.target.value;
		}
		this.text = document.getElementById('smsDetail');
		let {target, tips} = validInputValue({
			value: ev,
			lastValue: this.state.smsDetail,
			options: this.props.options,
		}, 'input', this.text);
		ev = target;
		if (ev.length === 0 && tips === '') {
			tips = '注意：请输入短信模板内容或选择某一模板';
		}
		if (!('value' in this.props)) {
			this.setState({
				smsDetail: ev,
				tips: tips,
			});
		} else {
			// 重置底部参数
			this.state.tips = tips;
		}
		this.props.onChange(ev, this._getRealLength(ev), this._getRealNum(ev));
	},
	insertText(option) {
		this.text = document.getElementById('smsDetail');
		let value = insertAtCaret(this.text, option);
		let {target, tips} = validInputValue({
			value: value,
			lastValue: this.state.smsDetail,
			options: this.props.options,
		}, 'insert', this.text);
		value = target;
		if (value.length === 0 && tips === '') {
			tips = '注意：请输入短信模板内容或选择某一模板';
		}
		if (!('value' in this.props)) {
			this.setState({
				smsDetail: value,
				tips: tips,
			});
		} else {
			this.state.tips = tips;
		}
		this.props.onChange(value, this._getRealLength(value), this._getRealNum(value));
	},
	_getRealLength(value) {
		const len = value.length + this.props.defaultLength;
		return len;
	},
	_getRealNum(value) {
		const len = value.length + this.props.defaultLength;
		return len <= 70 ? 1 : Math.ceil((len - 70) / 67) + 1;
	},
	render() {
		const options = this.props.options;
		const valueLength = this._getRealLength(this.state.smsDetail);
		const smsNum = this._getRealNum(this.state.smsDetail);
		// 提示相关
		let explain = '注意：已限制自行输入或修改标签识别符【# #】以及非本短信标签。';
		let explainClassName = 'lt-sms-edit-explain';
		let inputBoxClassName = 'lt-sms-edit-box-info-input';
		if (this.state.tips !== '') {
			explain = this.state.tips;
			explainClassName = 'lt-sms-edit-explain lt-sms-edit-warn';
			inputBoxClassName = 'lt-sms-edit-box-info-input lt-sms-edit-box-warn';
		}
		return (
			<div className="lt-sms-edit-box">
				<Row >
					<Row className="lt-sms-edit-item">
						<Col span="3">
							<label style={this.props.linkStyle || {}}>短信标签：</label>
						</Col>
						<Col span="18">
							<div className="lt-sms-edit-box-tag">
							{
								options.map((option) =>
									<Tag key={`smsTag${option}`} color="blue"
										onClick={this.insertText.bind(this, `【#${option}#】`)}
									>
										{'【#' + option + '#】'}
									</Tag>)
							}
							</div>
						</Col>
					</Row>
<div style={this.props.hideTemplate ? {display: 'none'} : {display: 'block'}}>
					<Row className="lt-sms-edit-item">
						<Col span="3">
							<label style={this.props.templateStyle || {}}>短信模板：</label>
						</Col>
						<Col span="18">
							<div className="lt-sms-edit-box-btn">
								<a onClick={this.props.onTemplate}>短信模板</a>
								<a onClick={this.props.onShortUrl}>插入短链接</a>
							</div>
						</Col>
					</Row>
	</div>
					<Row className="lt-sms-edit-item">
						<Col span="12" push="3">
							<div className={inputBoxClassName}>
								<Input ref="textarea" type="textarea" placeholder="请输入短信模板内容或选择某一模板"
									id="smsDetail" name="smsDetail" className="lt-sms-edit-box-text"
									value={this.state.smsDetail} onChange={this.onChange}
								/>
							</div>
							<div className="lt-sms-edit-box-info" style={this.props.hideTip ? {display: 'none'} : combine({display: 'inline-block'}, this.props.boxStyle)}>
								<p>已经输入<span className="red-span">{valueLength}</span>/<span className="red-span">70</span>
								(超过<span className="red-span">{valueLength - 70 > 0 ? valueLength - 70 : 0}</span>字，不满<span className="red-span">70</span>字，需要<span className="red-span">{smsNum}</span>条短信)
								<Tooltip title="70字计一条短信费，超出70字则以67字每条计费，带变量短信以实际发送为准，有可能超出默认字数。【自定义签名】与“退订回复TD”默认包含在短信内，且计入字数"><a>计费规则</a></Tooltip></p>
							</div>
							<div className={explainClassName}>
								{explain}
							</div>
						</Col>
					</Row>
				</Row>
				<div className="lt-sms-show">
					<Iphone content={this.state.smsDetail}
						title={`【${this.props.signature}】`}
						hideIphone={this.props.hideIphone}
						preViewStyle={this.props.preViewStyle}
						options={this.props.options}
					/>
				</div>
			</div>
		);
	}
});

export default SmSEditBox;
module.exports = exports['default'];
