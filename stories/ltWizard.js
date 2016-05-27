import React from 'react';
import { render } from 'react-dom';
import CodeBlock from './code-block';
import assign from 'lodash.assign';
import {Table, Icon, Checkbox, Input, Row, Col, Form, Button, message } from 'antd';
import Wizard from '../components/Wizard/index';
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
  desc: '混入的方式，类似于Reflux',
  type: 'object',
  default: '{}'
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

const Component = React.createClass({
  getInitialState() {
     return {
     }
  },
  render() {
    return (
      <div>
       <Wizard />
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
