import React from 'react';
import { render } from 'react-dom';
import assign from 'lodash.assign';
import CodeBlock from './code-block';
import ReactMarkdown from 'react-markdown';
import {Table, Icon, Checkbox, Input, Row, Col, Form, Button } from 'antd';
import ExcelParser from '../components/ExcelParser'
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
  name: 'percent',
  desc: '百分比',
  type: 'number',
  default: '0'
}, {
 name: 'format',
  desc: '内容的模板函数',
  type: 'function(percent)',
  default: ''
}, {
  name: 'status',
  desc: '状态，可选：normal、exception',
  type: 'string',
  default: 'normal'
}, {
  name: 'strokeWidth',
  desc: '进度条线的宽度，单位是进度条画布宽度的百分比',
  type: 'number',
  default: '1'
}, {
  name: 'width',
  desc: '必填，进度条画布宽度，单位px。这里没有提供height属性设置，Line型高度就是strokeWidth，Circle型高度等于width',
  type: 'number',
  default: ''
}, {
  name: 'progressInfo',
  desc: '中间提示信息',
  type: 'React Node',
  default: ''
}, {
  name: 'noSuccess',
  desc: '当100%时是否不显示success',
  type: 'bool',
  default: 'false'
}, {
  name: 'strokeColor',
  desc: '圆形progress的边框颜色',
  type: 'color',
  default: '#2db7f5'
}];
// const source = '<div><ProgressCircle percent={this.props.percent} noSuccess width="250" strokeColor="#E87975" strokeWidth="3" progressInfo={this.state.innerHtml1}/><ProgressCircle percent={this.props.percent} noSuccess width="250" strokeWidth="3" strokeColor="#67DDDE" progressInfo={this.state.innerHtml2}/></div>';
const source = ['\n\n```javascript \nvar React = require(\'react\');\nvar Progress = require(\'react-markdown\');',
                '\n\nReact.render(\n    const ProgressCircle = Progress.Circle;\n    ',
                '<div>\n',
                '     <ProgressCircle percent={this.props.percent} noSuccess width="250" strokeColor="#E87975" strokeWidth="3" progressInfo={this.state.innerHtml1}/>\n',
                '     <ProgressCircle percent={this.props.percent} noSuccess width="250" strokeWidth="3" strokeColor="#67DDDE" progressInfo={this.state.innerHtml2}/>',
                '\n    </div>\n',
                'document.getElementById(\'content\')\n);\n\n```'].join('');

const Component = React.createClass({
  getInitialState() {
     return {
      innerHtml1: <div><span style={{fontSize: 18, fontFamily: 'STHeitiSC-Light', fontWeight: 'bold', color: '#E17072', position: 'relative', top: -20}}>总消耗短信</span>
          <br/>
          <span style={{fontSize: 30, fontFamily: 'STHeitiSC-Light', fontWeight: 'bold', marginBottom: 10, position: 'relative', top: -20}}>100条</span>
          <br/>
          <div style={{width: 70, height: 3, margin: '0 auto 0 auto', padding: 0, overFlow: 'hidden', backgroundColor: '#E17072', position: 'relative', top: 8}}></div>
          <a style={{fontSize: 16, fontFamily: 'STHeitiSC-Light', fontWeight: 'bold', color: '#6C7B8A'}}>详情清单</a></div>,
          innerHtml2: <div><span style={{fontSize: 18, fontFamily: 'STHeitiSC-Light', fontWeight: 'bold', color: '#1ACAB9', position: 'relative', top: -20}}>花费</span>
          <br/>
          <span style={{fontSize: 30, fontFamily: 'STHeitiSC-Light', fontWeight: 'bold', marginBottom: 10, position: 'relative', top: -20}}>32.5元</span>
          <br/>
          <div style={{width: 70, height: 3, margin: '0 auto 0 auto', padding: 0, overFlow: 'hidden', backgroundColor: '#1ACAB9', position: 'relative', top: 8}}></div>
          <a style={{fontSize: 16, fontFamily: 'STHeitiSC-Light', fontWeight: 'bold', color: '#6C7B8A'}}>详情清单</a></div>
     }
  },
  render() {
    return (
      <div>
        <ExcelParser/>
      </div>
    )
  }
});
const Sample = React.createClass({
  mixins: [mixin],
  getInitialState() {
     return {
      percent: 75
     }
  },
  render() {
    return (
      <Form horizontal className="advanced-search-form">
      <Row>
        <Component percent={this.state.percent} />
      </Row>
      <Row style={{margin: 10}}>
        <Col span="12">
          <FormItem
            label="请输入百分比: "
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}>
            <Input max="99" min="0" placeholder="plz input percent" value={this.state.percent} onChange={this.setValue.bind(this, 'percent')} />
          </FormItem>
        </Col>
      </Row>
</Form>
    )
  }
});

  storiesOf('excelParser', module)
  .add('excelParser', () => {
    return (
      <div className="lt-com-container">
        <h2 style={{textAlign: 'center', marginBottom: 15, color: '#4078c0'}}>excelParser</h2>
       有时候为了减轻后台的压力，需要在前端处理excel文件。<br/><br/>
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
          </div>
        </div>
      </div>
    );
  });
