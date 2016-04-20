import React from 'react';
import {Table, Icon, Checkbox } from 'antd';
import DragableTextArea from '../DragableTextArea/index';
import DragableTextImage from '../DragableImage/index';
import { storiesOf, action } from '@kadira/storybook';
import R from 'ramda';
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
  name: 'defaultValue',
  desc: '默认的列表',
  type: 'Array',
  default: '[]'
}, {
 name: 'dataSource',
  desc: '表格的数据源',
  type: 'Array',
  default: '[]'
}, {
  name: 'columns',
  desc: '表格的列',
  type: 'Array',
  default: '[]'
}];
storiesOf('ltDragable', module)
  .add('dragableTextArea', () => {
    return (
      <div className="lt-com-container">
        <h2 style={{textAlign: 'center', marginBottom: 15, color: '#4078c0'}}>DragableTextArea</h2>
        <DragableTextArea drag={action('Add Todo')}/>
        <div className="lt-com-box">
          <div className="lt-com-title">API</div>
          <div className="lt-com-code-interface">
            <Table columns={columns} dataSource={data} />
          </div>
          <div className="lt-com-title">注意：</div>
          <div className="info">So this part is just freakin' awesome. With React JS and the react-hot-loader you can change the class code of your component and see the instances update live in the DOM, without loosing their state! This is pretty much exactly how CSS updates behave, only that it is your components.</div>
        </div>
      </div>
    );
  }).add('dragableTextImage', () => {
    return (
      <div className="lt-com-container">
        <h2 style={{textAlign: 'center', marginBottom: 15, color: '#4078c0'}}>DragableTextImage</h2>
        <DragableTextImage drag={action('Add Todo')}/>
         <div className="lt-com-box">
          <div className="lt-com-title">API</div>
          <div className="lt-com-code-interface">
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    );
  });
