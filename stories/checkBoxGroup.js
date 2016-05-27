import React from 'react';
import { render } from 'react-dom'
import {Table, Icon, Checkbox, Input, Row, Col, Form, Button, message, InputNumber } from 'antd';
import CheckboxGroup from '../components/CheckboxGroup/index'
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
  name: 'options',
  desc: '指定可选项',
  type: 'array',
  default: '[]'
}, {
 name: 'value',
  desc: '指定选中的选项',
  type: 'array',
  default: '[]'
}, {
  name: 'onChange',
  desc: '变化时回调函数',
  type: 'Function(checkedValue)',
  default: 'noop'
}, {
  name: 'span',
  desc: '控制单个值列宽',
  type: '整数',
  default: '4'
}];
 
const Component = React.createClass({
  getInitialState() {
     return {
     }
  },
  render() {
    console.log(this.props.options);
    return (
      <div>
       <CheckboxGroup options={this.props.options} span={this.props.span}/>
      </div>
    )
  }
});
const Sample = React.createClass({
  mixins: [mixin],
  getInitialState() {
     return {
      options: ['Apple', 'Pear', 'Orange']
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
        <Component span={this.state.span} value={this.state.value} options={this.state.options} onChange={this.onChange}/>
      </Row>
      <Row style={{margin: 10}}>
        <Col span="12">
          <FormItem
            label="span: "
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}>
            <Input max={1000000} placeholder="plz input span" value={this.state.span} onChange={this.setValue.bind(this, 'span')} />
          </FormItem>
        </Col>
      </Row>
</Form>
    )
  }
});

  storiesOf('CheckboxGroup', module)
  .add('CheckboxGroup', () => {
    return (
      <div className="lt-com-container">
        <h2 style={{textAlign: 'center', marginBottom: 15, color: '#4078c0'}}>CheckboxGroup</h2>
        CheckboxGroup主要是对Checkbox的封装，以便于更方便的使用。支持传入数组显示多个checkbox，支持列排版<br/><br/>
         <div className="lt-com-box">
            <span className="lt-com-title">Code Lab</span>
            <div id="codeLab" className="lt-com-component"/><Sample/>
         </div>
         <div className="lt-com-box">
          <span className="lt-com-title">Code List</span>
            <div className="lt-com-component">
              {'  <CheckboxGroup options={this.props.options} span={this.props.span}/>'}<br/>
            </div>
          </div>
        <div className="lt-com-box">
          <span className="lt-com-title">API</span>
          <div className="lt-com-code-interface">
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    );
  });
