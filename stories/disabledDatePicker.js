import React from 'react';
import {Table, DatePicker, Icon} from 'antd';
import DisabledDatePicker from '../components/DisabledDatePicker/index.js';
import { storiesOf, action } from '@kadira/storybook';
import R from 'ramda';

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
  name: 'start',
  desc: '代表它是开始时间',
  type: 'bool或不填',
  default: ''
}, {
 name: 'end',
  desc: '代表它是结束时间',
  type: 'bool或不填',
  default: ''
}, {
  name: 'value',
  desc: '时间值',
  type: 'Date',
  default: ''
}, {
  name: 'onChange',
  desc: '时间变化的回调函数',
  type: 'func',
  default: 'noop'
}, {
  name: 'placeholder',
  desc: '占位字符',
  type: 'string',
  default: ''
}];
const Sample = React.createClass({
  getInitialState() {
     return {
     }
  },
  onStartTimeChange(value) {
    this.setState({
      startTime: value
    });
  },
  onEndTimeChange(value) {
    this.setState({
      endTime: value
    });
  },
  render() {
    return (
      <div>
        <div>
          开始时间：<DisabledDatePicker start value={this.state.startTime} end={this.state.endTime} onChange={this.onStartTimeChange}/>&nbsp;
          结束时间：<DisabledDatePicker end value={this.state.endTime} start={this.state.startTime} onChange={this.onEndTimeChange}/>
        </div>
       <div className="lt-com-box">
          <span className="lt-com-title">Code List</span>
            <div className="lt-com-component">
              开始时间: {'<DisabledDatePicker start value={this.state.startTime} end={this.state.endTime} onChange={this.onStartTimeChange}/>'}<br/>
              结束时间：{'<DisabledDatePicker end value={this.state.endTime} start={this.state.startTime} onChange={this.onEndTimeChange}/>'}
            </div>
       </div>
      </div>
    )
  }
});
  storiesOf('DisabledDatePicker', module)
  .add('DisabledDatePicker', () => {
    return (
      <div className="lt-com-container">
        <h2 style={{textAlign: 'center', marginBottom: 15, color: '#4078c0'}}>DisabledDatePicker</h2>
        <Sample />
        <div className="lt-com-box">
          <div className="lt-com-title">API</div>
          <div className="lt-com-code-interface">
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    );
  });
