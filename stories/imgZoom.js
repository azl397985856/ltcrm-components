import React from 'react';
import { render } from 'react-dom'
import {Table, Icon, Checkbox, Input, Row, Col, Form, Button, message, InputNumber } from 'antd';
import ImgZoom from '../components/ImgZoom/index.js';
import { storiesOf, action } from '@kadira/storybook';
import R from 'ramda';
import mixin from '../utils/mixin.js';
const CheckboxGroup = Checkbox.Group;
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
  name: 'data',
  desc: '传入的对象数组。格式：[{title: \'\', thumbnail: \'./img1.png\', img: \'./img_big.png\', link: \'.http://www.800best.com\'}]',
  type: 'Array',
  default: '[]'
}, {
 name: 'duration',
  desc: '单位秒',
  type: '整数',
  default: '15 * 24 * 3600'
}, {
  name: 'sortFunc',
  desc: '自定义处理函数，用户可以传入自定的函数用于指定list的排序方式',
  type: 'func',
  default: ''
}, {
  name: 'titleVisible',
  desc: '控制title是否显示 true为显示，false为不显示',
  type: 'boolean',
  default: 'true'
}];
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
          title: '1号店',
          thumbnail: 'yhd.jpg',
          image: 'yhd.png',
          link: 'http://www.yhd.com'
        },{
          title: '折800',
          thumbnail: 'zhe800_ico.png',
          image: 'zhe800.png',
          link: 'http://zhe800.com'
        },{
          title: '微店',
          thumbnail: 'weidian_ico.png',
          image: 'weidian.png',
          link: 'http://www.weidian.com'
        },{
          title: '蘑菇街',
          thumbnail: 'mogujie.ico',
          image: 'mogujie.png',
          link: 'http://www.mugujie.com'
        }];
const Component = React.createClass({
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
      <ImgZoom style={{margin: 200}} data = {this.props.data || defaultData} duration={this.props.duration} titleVisible={this.props.titleVisible} onClick={action('click the button')}/>
    )
  }
});
const Sample = React.createClass({
  getInitialState() {
     return {
     }
  },
  onTitleVisibleChange(e) {
    this.setState({
      titleVisible: e.target.checked
    });
  },
  onDataChange(e) {
    this.setState({
      data: e.target.value
    });
  },
  onDurationBlur() {
    const duration = this.state.duration || 15;
    message.success('cookie will be expired after ' + duration + ' days', 3);
  },
  onDurationChange(e) {
    this.setState({
      duration: e.target.value
    });
  },
  render() {
    return (
      <Form horizontal className="advanced-search-form">
      <Component titleVisible={this.state.titleVisible} data={this.state.data} duration={this.state.duration}/>
      <Row style={{margin: 10}}>
       <Col span="12">
          <FormItem
            label="duration: "
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}>
            <Input max={1000000} placeholder="plz input duration of the cooike" value={this.state.duration} onBlur={this.onDurationBlur} onChange={this.onDurationChange} />
          </FormItem>
        </Col>
        <Col span="8">
          <FormItem
            label="titleVisible: "
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}>
            <Checkbox value={this.state.titleVisible} onChange={this.onTitleVisibleChange}/>
          </FormItem>
        </Col>
      </Row>
</Form>
    )
  }
});

  storiesOf('imgZoom', module)
  .add('imgZoom', () => {
    return (
      <div className="lt-com-container">
        <h2 style={{textAlign: 'center', marginBottom: 15, color: '#4078c0'}}>imgZoom</h2>
        默认取列表(data)第一个作为大图展示，组件会记住排序的结果（默认时间是15天）。<br/><br/>
         <div className="lt-com-box">
            <span className="lt-com-title">Code Lab</span>
            <div id="codeLab"/><Sample/>
         </div>
         <div className="lt-com-box">
          <span className="lt-com-title">Code List</span>
            <div className="lt-com-component">
              {' <ImgZoom style={{margin: 200}} data = {this.props.data || defaultData} duration={this.props.duration} titleVisible={this.props.titleVisible}/>'}<br/>
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
