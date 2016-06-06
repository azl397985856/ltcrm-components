import React from 'react';
import { render } from 'react-dom';
import CodeBlock from './code-block';
import assign from 'lodash.assign';
import {Table, Icon, Checkbox, Input, Row, Col, Form, Button, message, Select } from 'antd';
import Wizard from '../components/Wizard/index';
import ImgZoom from '../components/ImgZoom/index';
import ReactMarkdown from 'react-markdown';
import { storiesOf, action } from '@kadira/storybook';
import R from 'ramda';
import mixin from '../utils/mixin.js';
const FormItem = Form.Item;

const columns = [{
  title: '参数',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '说明',
  dataIndex: 'desc',
  key: 'desc',
}, {
  title: '类型',
  dataIndex: 'type',
  key: 'type',
  }, {
  title: '默认值',
  dataIndex: 'default',
  key: 'default',
}];
const data = [{
  name: 'Mixin',
  desc: '混入的方式，类似于Reflux，需要传递两个参数，详见（Mixin的参数）',
  type: 'func',
  default: 'noop'
}, {
  name: 'getUserTourProgress',
  desc: '获取当前进行到第几步',
  type: 'func',
  default: 'noop'
}, {
  name: 'setTourSteps(step, cb)',
  desc: '用来异步的在用户操作的时候更改配置等',
  type: 'func',
  default: 'noop'
}, {
  name: 'Mixin的参数-配置对象',
  desc: '传递自定义配置和一个用于显示步骤的数组（详见参数step）',
  type: 'array',
  default: '{}'
}, {
  name: 'Mixin的参数-回调函数',
  desc: '用户完成所有步骤的回调函数',
  type: 'func',
  default: 'noop'
}, {
  name: 'goToStep',
  desc: '跳转到第几步',
  type: 'func',
  default: 'noop'
}, {
  name: 'exit',
  desc: '退出向导模式',
  type: 'func',
  default: 'noop'
}, {
  name: 'step',
  desc: '对象数组，对象属性有text：显示说明信息。element：目标节点的selector。preButtonText：上一步的文字。closeButtonText：下一步的文字。更多介绍请看示例',
  type: 'array',
  default: '[]'
}];
// const source = '<div><ProgressCircle percent={this.props.percent} noSuccess width="250" strokeColor="#E87975" strokeWidth="3" progressInfo={this.state.innerHtml1}/><ProgressCircle percent={this.props.percent} noSuccess width="250" strokeWidth="3" strokeColor="#67DDDE" progressInfo={this.state.innerHtml2}/></div>';
const source = ['\n\n```javascript \nimport React, { PropTypes, Component } from "react";\nimport guide from "react-guest-tutorial";',
                '\n\nlet tour = {\n',
  '   startIndex: 0,\n',
  '   scrollToSteps: true,\n',
  'steps: [\n',
    '{\n',
      '   text: "请先输入用户名",\n',
      '   element: "#first",\n',
      '   position: "center",\n',  
      '   closeButtonText: "下一步",\n',
      '   offsetY: -50\n',
    '},\n',
    '{\n',
      '   text: "请输入密码",\n',
      '   element: "#sencond",\n',
      '   position: "center",\n',
      '   closeButtonText: "开始体验"\n',
    '}\n',
  ']\n',
'};\n'].join('');
const TourGuideMixin = Wizard.Mixin;
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

const defaultData = [{
          title: '淘宝',
          thumbnail: 'taobao.ico',
          image: 'taobao.jpg',
          link: 'http://www.taobao.com'
        }, {
          title: '京东',
          thumbnail: 'jd.ico',
          image: 'jd.png',
          link: 'http://www.jd.com'
        }, {
          title: '1号店o',
          thumbnail: 'yhd.jpg',
          image: 'yhd.png',
          link: 'http://www.yhd.com'
        },{
          title: '折800',
          thumbnail: 'zhe800_ico.png',
          image: 'assets/zhe800.png',
          link: 'http://zhe800.com'
        },{
          title: '微店',
          thumbnail: 'assets/weidian_ico.png',
          image: 'assets/weidian.png',
          link: 'http://www.weidian.com'
        },{
          title: '蘑菇街',
          thumbnail: 'mogujie.ico',
          image: 'mogujie.png',
          link: 'http://www.mugujie.com'
        }];
const Component = React.createClass({
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
    TourGuideMixin.goToStep.bind(this, index)();
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
                用户名：<Input id="first" onBlur={TourGuideMixin.goToStep.bind(this, -1)}/>
              </Row>
              <Row style={{margin:20}}>
                密码：<Input id="sencond"/>
              </Row>
              <ImgZoom className="img-zoom" titleVisible={true} data={defaultData}/>
            </div>
    )
  }
});

const Sample = React.createClass({
  mixins: [mixin],
  getInitialState() {
     return {
     }
  },
  onChange() {

  },
  onDurationBlur() {

  },
  render() {  
    return (
      <Form horizontal className="advanced-search-form">
      <Row>
        <Component/>
      </Row>
</Form>
    )
  }
});

  storiesOf('Wizard', module)
  .add('Wizard', () => {
    return (
      <div className="lt-com-container">
        <h2 style={{textAlign: 'center', marginBottom: 15, color: '#4078c0'}}>Wizard</h2>
        Wizard主要支持网站的新手导航，可以自定义加入步骤<br/><br/>
         <div className="lt-com-box">
            <span className="lt-com-title">Code Lab</span>
            <div id="codeLab" className="lt-com-component"/><Sample/>
         </div>
         <div className="lt-com-box">
          <span className="lt-com-title">Code List</span>
            <div className="lt-com-component">
              <ReactMarkdown
                source={source}
                renderers={assign({}, ReactMarkdown.renderers, {
                  CodeBlock: CodeBlock
              })} />
            </div>
          </div>
        <div className="lt-com-box">
          <span className="lt-com-title">API</span>
          <div className="lt-com-code-interface">
            <Table columns={columns} dataSource={data} />
            这个Mixin接受两个参数(setting, callback). setting用来配置显示模式等。callback是当操作完成时的回调函数。
          </div>
        </div>
      </div>
    );
  });
