import React, { PropTypes, Component } from 'react';
import guide from 'react-guest-tutorial';
import { Modal, Row, Col, Input, Button, Form, Select} from 'antd';
import ImgZoom from '../ImgZoom/';
import '../../style/Wizard/index.css';

const TourGuideMixin = guide.Mixin;
const Option = Select.Option;
let tour = {
  startIndex: 0,
  scrollToSteps: true,
  config: {
  	disabledMaskCancel: true,
  	showIndicator: false,
  },
  steps: [
    {
      text: '请先输入用户名，妈妈说名字长的人斗笔读你名字的时间也会增加哦！',
      element: '#first',
      position: 'center',
      preButtonText: '关闭',
      closeButtonText: '下一步',
      offsetY: 100,
    },
    {
      text: '请输入密码，我告诉你，不要太长也不要太短，不要太简单被别人破了，也别太复杂，自己都记不住，听见没？',
      element: '#sencond',
      position: 'center',
      offsetY: 100,
      preButtonText: '上一步',
      closeButtonText: '下一步'
    },
     {
      text: '就问你帅不帅！',
      element: '.img-zoom',
      position: 'center',
      offsetY: 150,
      preButtonText: '上一步',
      closeButtonText: '开始体验'
    }
  ]
};
const cb = function() {
  console.log('User has completed tour!');
};


function noop() {}


const Wizard = React.createClass({
  mixins: [TourGuideMixin(tour, cb)],
  getInitialState() {
     return {
     }
  },
  rePerform() {
  	this.setState({
  		currentIndex: 0,
  	});
  },
  onSelectChange(index) {
  	this.setState({
  		currentIndex: new Number(index),
  	});
  },
  getStep() {
  	const step = this.getPercents() === 0 ? 0 : 0.03*this.getPercents();
  	const num = new Number(step).toFixed(0);
  	return num;
  },
  getPercents() {
  	const percents =this.getUserTourProgress().percentageComplete;
  	return percents< 0 ? 0 : percents;
  },
  render() {
  	// console.log(tour.startIndex);
    return (
            <div horizontal style={{margin: 20, width: '80%', height: '80%'}}>
            	你现在已经完成{this.getStep()}步,已经完成{this.getPercents()}%,加油<br/><br/>
            	<Button type="primary" onClick={this.rePerform}>我还想从头看一次</Button><br/><br/><br/>
            		&nbsp;我想从第
            		<Select
            			onChange={this.onSelectChange}
            			defaultValue="0"
            			style={{display: 'inline-block', width: 80}}
            			>
            			<Option value="0">1</Option>
            			<Option value="1">2</Option>
            			<Option value="2">3</Option>
            		</Select>
            		步开始看
							<Row style={{margin:20}}>
								用户名：<Input id="first" />
							</Row>
							<Row style={{margin:20}}>
								密码：<Input id="sencond"/>
							</Row>
							<ImgZoom className="img-zoom" percent={this.props.percent} noSuccess width='250' strokeColor="#E87975" strokeWidth="3" progressInfo={<span>test</span>}/>
            </div>
    )
  }
});

Wizard.propTypes = {
}

export default Wizard;
module.exports = exports['default'];
