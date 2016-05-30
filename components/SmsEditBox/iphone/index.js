import '../../../style/SmsEditBox/iphone.less';
import React from 'react';

function getMyDate() {
	const date = new Date();
	return `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`;
}

const templateMap = {
	收件人姓名: '奥斯卡',
	买家旺旺: '莱昂纳多-迪普里奥',
	店铺名称: '**旗舰店',
	快递公司: '百世快递',
	快递单号: 21358465124,
	收件人城市: '杭州',
	签收日期: getMyDate(),
	发货日期: getMyDate(),
};

function getRegList(options) {
	const regRepArr = [];
	options.forEach((option, index) => {
		regRepArr[index] = {};
		regRepArr[index].rep = templateMap[option];
		regRepArr[index].reg = new RegExp(`【#${option}#】`, 'g');
	});
	return regRepArr;
}

const Iphone = React.createClass({
	getDefaultProps() {
		return {
			content: '这是默认填充内容',
			title: '签名',
			unsubscribe: '退订回复TD',
			options: [],
		};
	},
	getInitialState() {
		const options = this.props.options || [];
		return {
			regRepArr: getRegList(options),
		};
	},
	_dirtyCode() {
		// 脏代码，渲染逻辑options一开始不存在，在此补上
		if (this.state.regRepArr.length === 0) {
			this.state.regRepArr = getRegList(this.props.options);
		}
	},
	render() {
		this._dirtyCode(this.props.options);
		let content = this.props.title + this.props.content + this.props.unsubscribe;
		this.state.regRepArr.forEach((val) => {
			content = content.replace(val.reg, val.rep);
		});
		return (<div className={this.props.hideIphone ? 'none' : 'iphone'} style={this.props.hideIphone ? {display: 'none'} : this.props.preViewStyle}>
			<div className="sms-box">
				<div className="sms">
					{content}
				</div>
			</div>
		</div>);
	},
});

export default Iphone;
