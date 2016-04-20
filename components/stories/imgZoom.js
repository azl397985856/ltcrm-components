import React from 'react';
import { render } from 'react-dom'
import {Table, Icon, Checkbox, Input } from 'antd';
import ImgZoom from '../ImgZoom/index.js';
import { storiesOf, action } from '@kadira/storybook';
import R from 'ramda';
import mixin from '../../utils/mixin.js';
const CheckboxGroup = Checkbox.Group;

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
          link: 'http://www.zhe800.com?tb=1'
        },{
          title: '微店',
          thumbnail: 'weidian_ico.png',
          image: 'weidian.png',
          link: 'http://www.weidian.com?tb=1'
        },{
          title: '蘑菇街',
          thumbnail: 'mogujie.ico',
          image: 'mogujie.png',
          link: 'http://www.mogujie.com?tb=1'
        }];
const hqq = React.createClass({
   getInitialState() {
      return {
        data: '212121212'
      }
    },
   render() {
     return (
      <div>test
       <Input value={this.state.data} onchange={this.setValue.bind(this, 'data')}/>
     </div>
     );
   }
});

  storiesOf('imgZoom', module)
  .add('imgZoom', () => {
    return (
      <div className="container">
        <h2 style={{textAlign: 'center', marginBottom: 15, color: '#4078c0'}}>imgZoom</h2>
        默认取列表(data)第一个作为大图展示，组件会记住排序的结果（默认时间是15天）。<br/><br/>
        <ImgZoom style={{margin: 200}} data = {defaultData} duration={30} titleVisible={true} onClick={action('click the button')}/>
         <div className="box">
            <span className="title">Code Lab</span>
            <div id="codeLab"/><hqq/>
         </div>
        <div className="box">
          <span className="title">API</span>
          <div className="code-interface">
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    );
  });
