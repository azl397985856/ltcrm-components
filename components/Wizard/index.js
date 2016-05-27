import React, { PropTypes, Component } from 'react';
import guide from 'react-guest-tutorial';
import { Modal, Row, Col, Input, Button, Form} from 'antd';
import '../../style/Wizard/index.css';

const TourGuideMixin = guide.Mixin;
let tour = {
  startIndex: 0,
  scrollToSteps: true,
  steps: [
    {
      text: '请先输入用户名',
      element: '#first',
      position: 'center',
      preButtonText: '上一步',
      closeButtonText: '下一步',
      offsetY: 100
    },
    {
      text: '请输入密码',
      element: '#sencond',
      position: 'center',
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
     	visible: true
     }
  },
  render() {
    return (
            <div horizontal style={{margin: 20, width: '80%', height: '80%'}}>
							<Row style={{margin:20}}>
								用户名：<Input id="first" />
							</Row>
							<Row style={{margin:20}}>
								密码：<Input id="sencond"/>
							</Row>
            </div>
    )
  }
});

Wizard.propTypes = {
}

export default Wizard;
module.exports = exports['default'];
