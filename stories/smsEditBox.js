import React from 'react';
import { render } from 'react-dom'
import {Table, Icon, Checkbox, Input, Row, Col, Form, Button, message } from 'antd';
import PreView from '../components/SmsEditBox'
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
  desc: '指定标签',
  type: 'array',
  default: '[]'
}, {
 name: 'hideTemplate',
  desc: '是否异常短信模板',
  type: 'boll',
  default: 'false'
}, {
  name: 'onChange',
  desc: '短信内容变化时回调函数',
  type: 'Function(checkedValue)',
  default: 'noop'
}, {
  name: 'hideTip',
  desc: '是否异常短信下方提示',
  type: 'bool',
  default: 'false'
}];
 
const Component = React.createClass({
  mixins: [mixin],
  getInitialState() {
     return {
        tags: ['标签1', '标签2', '标签3'],
        smsSignature: '这是签名',
        smsContent: ''
     }
  },
  onChange(value) {
    this.setState({
      smsContent: value
    });
  },
  openTemplateModal() {
    console.log('openTemplateModal');
  },
  openShortLinkModal() {
    console.log('openShortLinkModal');
  },
  render() {
    return (
      <PreView
          options={this.state.tags}
          onChange={this.onChange}
          defaultLength={(this.state.smsSignature && this.state.smsSignature != null) ? this.state.smsSignature.length + 12 : 12}
          onTemplate={this.openTemplateModal}
          onShortUrl={this.openShortLinkModal}
          signature={this.state.smsSignature}
          boxStyle={{width: '400px'}}
          hideTemplate
          linkStyle={{float: 'right'}}
          hideTip
          hideIphone
          preViewStyle={{right:'200px', top: '50px'}}
          value={this.state.smsContent}/>
    )
  }
});
const Sample = React.createClass({
  mixins: [mixin],
  getInitialState() {
     return {
     }
  },
  render() {
    return (
      <div>
        <Row>
          <Component/>
        </Row>
      </div>
    )
  }
});

  storiesOf('preView', module)
  .add('preView', () => {
    return (
      <div className="lt-com-container">
        <h2 style={{textAlign: 'center', marginBottom: 15, color: '#4078c0'}}>preView</h2>
        PreViewy用来预览手机短信显示，支持插入标签以及对内置标签进行验证，保证非法标签不会输入。<br/>
        内置标签有：balabala
        <br/>
         <div className="lt-com-box">
            <span className="lt-com-title">Code Lab</span>
            <div id="codeLab" className="lt-com-component"/><Sample/>
         </div>
         <div className="lt-com-box">
          <span className="lt-com-title">Code List</span>
            <div className="lt-com-component">
              {'  <PreView'
         + 'options={this.state.tags}' 
          +'value={this.state.smsContent}/>'}<br/>
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
